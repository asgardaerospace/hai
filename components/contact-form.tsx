"use client";

import { useState } from "react";
import { CheckCircle, WarningCircle, CircleNotch } from "@phosphor-icons/react";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";

const initialValues = {
  name: "",
  email: "",
  company: "",
  message: "",
  botField: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function update(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  }

  function validate() {
    const errs: Record<string, string> = {};
    if (!values.name.trim()) errs.name = "Please enter your name.";
    if (!values.email.trim()) errs.email = "Please enter your email.";
    else if (!EMAIL_RE.test(values.email.trim()))
      errs.email = "Please enter a valid email.";
    if (values.message.trim().length < 10)
      errs.message = "Please enter a message (at least 10 characters).";
    return errs;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setFieldErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        if (data.fieldErrors) setFieldErrors(data.fieldErrors);
        return;
      }

      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again or email us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-azure-100 bg-azure-50/60 px-8 py-12 text-center">
        <CheckCircle weight="fill" className="size-14 text-azure-500" aria-hidden />
        <h3 className="mt-4 text-xl font-semibold text-navy-900">Message sent</h3>
        <p className="mt-2 max-w-sm text-slate-600">
          Thanks for reaching out — a member of the HAI team will get back to you
          shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-azure-600 hover:text-azure-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {/* Honeypot — visually hidden from users */}
      <div className="absolute left-[-9999px]" aria-hidden>
        <label htmlFor="botField">Do not fill this out</label>
        <input
          id="botField"
          name="botField"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.botField}
          onChange={update}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          required
          value={values.name}
          onChange={update}
          error={fieldErrors.name}
          autoComplete="name"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          value={values.email}
          onChange={update}
          error={fieldErrors.email}
          autoComplete="email"
        />
      </div>

      <Field
        label="Company"
        name="company"
        value={values.company}
        onChange={update}
        error={fieldErrors.company}
        optional
        autoComplete="organization"
      />

      <Field
        label="Message"
        name="message"
        as="textarea"
        required
        value={values.message}
        onChange={update}
        error={fieldErrors.message}
        placeholder="Tell us about your project or requirement…"
      />

      {status === "error" && errorMsg ? (
        <div className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <WarningCircle weight="fill" className="mt-0.5 size-5 shrink-0" aria-hidden />
          <span>{errorMsg}</span>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-azure-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-azure-500/25 transition-all duration-300 hover:bg-azure-600 hover:shadow-azure-600/30 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <CircleNotch className="size-5 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </button>

      <p className="text-xs text-slate-400">
        We&apos;ll only use your details to respond to your inquiry.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  as = "input",
  required = false,
  optional = false,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  type?: string;
  as?: "input" | "textarea";
  required?: boolean;
  optional?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  const base = cn(
    "w-full rounded-xl border bg-white px-4 py-3 text-navy-900 placeholder-slate-400 outline-none transition duration-200 focus:ring-4",
    error
      ? "border-red-300 focus:border-red-400 focus:ring-red-500/10"
      : "border-slate-200 focus:border-azure-400 focus:ring-azure-500/10",
  );

  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-navy-800">
        {label}
        {optional ? (
          <span className="ml-1 font-normal text-slate-400">(optional)</span>
        ) : null}
      </label>
      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
          className={cn(base, "resize-y")}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
          className={base}
        />
      )}
      {error ? (
        <p id={`${name}-error`} className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
