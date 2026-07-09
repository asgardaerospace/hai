import { ImageResponse } from "next/og";

export const alt = "Hemisphere Aerospace Investments";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #0a1e3a 0%, #0e2c54 52%, #061225 100%)",
          padding: "72px 80px",
          color: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Azure glow */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: 560,
            background:
              "radial-gradient(circle, rgba(47,128,214,0.45) 0%, rgba(47,128,214,0) 68%)",
          }}
        />

        {/* Brand lockup */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <svg width="70" height="56" viewBox="0 0 120 96">
            <polygon points="56,8 6,88 30,88 56,44" fill="#ffffff" />
            <polygon points="64,8 114,88 90,88 64,44" fill="#8fa2bd" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>
              HEMISPHERE AEROSPACE
            </div>
            <div style={{ fontSize: 15, letterSpacing: 8, color: "#c6a15b" }}>
              INVESTMENTS
            </div>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              width: 64,
              height: 3,
              background: "linear-gradient(90deg, #c6a15b, rgba(198,161,91,0))",
              marginBottom: 30,
            }}
          />
          <div
            style={{
              fontSize: 68,
              fontWeight: 600,
              lineHeight: 1.05,
              maxWidth: 960,
              letterSpacing: -1.5,
            }}
          >
            Pushing the boundaries of aerospace technology
          </div>
          <div style={{ marginTop: 26, fontSize: 26, color: "#adc4e2", maxWidth: 900 }}>
            Global provider of commercial aircraft &amp; engine trading assets.
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
          }}
        >
          <div style={{ display: "flex", gap: 14, color: "#7f9fcd" }}>
            <span>737-800</span>
            <span style={{ color: "#c6a15b" }}>·</span>
            <span>A321</span>
            <span style={{ color: "#c6a15b" }}>·</span>
            <span>CFM56</span>
            <span style={{ color: "#c6a15b" }}>·</span>
            <span>CF6-50C2</span>
          </div>
          <div style={{ color: "#7f9fcd" }}>hai-aero.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
