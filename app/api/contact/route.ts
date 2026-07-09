import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  /** Honeypot — should always be empty for real users. */
  botField?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  // Honeypot: silently accept bots without sending anything.
  if (body.botField) {
    return Response.json({ ok: true });
  }

  const fieldErrors: Record<string, string> = {};
  if (!name) fieldErrors.name = "Please enter your name.";
  if (!email) fieldErrors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(email)) fieldErrors.email = "Please enter a valid email.";
  if (!message || message.length < 10)
    fieldErrors.message = "Please enter a message (at least 10 characters).";

  if (Object.keys(fieldErrors).length > 0) {
    return Response.json({ error: "Validation failed.", fieldErrors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — cannot send contact email.");
    return Response.json(
      { error: "The contact form is not configured yet. Please email us directly." },
      { status: 503 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || siteConfig.email;
  const from =
    process.env.CONTACT_FROM_EMAIL ||
    "Hemisphere Aerospace <onboarding@resend.dev>";

  const resend = new Resend(apiKey);

  const subject = `New website inquiry: ${name}${company ? ` · ${company}` : ""}`;
  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    "",
    message,
  ].filter((line): line is string => line !== null);

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      text: lines.join("\n"),
      html: `
        <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; color: #0b1a2e;">
          <h2 style="margin: 0 0 16px;">New website inquiry</h2>
          <p style="margin: 4px 0;"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin: 4px 0;"><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${company ? `<p style="margin: 4px 0;"><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
          <p style="margin: 16px 0 4px;"><strong>Message:</strong></p>
          <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: "We couldn't send your message. Please try again or email us directly." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return Response.json(
      { error: "Something went wrong. Please try again or email us directly." },
      { status: 500 },
    );
  }
}
