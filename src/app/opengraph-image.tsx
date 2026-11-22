import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Abdulrahman Elsayed — Power Engineer & Full-Stack Web Developer";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#07080d",
          padding: "72px 80px",
          color: "#f2f4f8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: "#ff7a51",
            }}
          />
          <div
            style={{
              fontSize: 26,
              letterSpacing: 6,
              color: "#9aa3b2",
              textTransform: "uppercase",
            }}
          >
            portfolio.nullspecteracademy.ninja
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.02 }}>
            Abdulrahman Elsayed
          </div>
          <div style={{ fontSize: 40, color: "#ff7a51", fontWeight: 600 }}>
            Power Engineer &amp; Full-Stack Web Developer
          </div>
          <div style={{ fontSize: 28, color: "#9aa3b2", maxWidth: 980, lineHeight: 1.4 }}>
            Engineering power systems and architecting robust, end-to-end web
            platforms.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            height: 6,
            width: 220,
            backgroundColor: "#ff7a51",
            borderRadius: 3,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
