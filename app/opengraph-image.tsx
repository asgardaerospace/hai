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
          background: "linear-gradient(135deg, #0a1e3a 0%, #0e2c54 55%, #061225 100%)",
          padding: "72px 80px",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <svg width="76" height="61" viewBox="0 0 120 96">
            <polygon points="56,8 6,88 30,88 56,44" fill="#ffffff" />
            <polygon points="64,8 114,88 90,88 64,44" fill="#8fa2bd" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }}>
              HEMISPHERE AEROSPACE
            </div>
            <div style={{ fontSize: 17, letterSpacing: 7, color: "#8fa2bd" }}>
              INVESTMENTS
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 66, fontWeight: 600, lineHeight: 1.08, maxWidth: 940 }}>
            Pushing the Boundaries of Aerospace Technology
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: "#adc4e2", maxWidth: 860 }}>
            Global provider of commercial aircraft &amp; engine trading assets.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#7f9fcd" }}>hai-aero.com</div>
      </div>
    ),
    { ...size },
  );
}
