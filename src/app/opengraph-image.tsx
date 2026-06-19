import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const runtime = "edge";
export const alt = `${profile.name} — Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #ffffff 0%, #f1f5f9 50%, #eef2f7 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "linear-gradient(135deg, #1e40af, #2563eb)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            MH
          </div>
          <div style={{ fontSize: 22, color: "#64748b", fontWeight: 500 }}>
            Portfolio & Resume
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "#0f172a",
              lineHeight: 1.15,
              maxWidth: 900,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#1e40af",
              fontWeight: 600,
              maxWidth: 800,
              lineHeight: 1.35,
            }}
          >
            {profile.tagline}
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {profile.roles.map((role) => (
            <div
              key={role}
              style={{
                padding: "10px 20px",
                borderRadius: 999,
                background: "white",
                border: "1px solid #e2e8f0",
                color: "#475569",
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              {role}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
