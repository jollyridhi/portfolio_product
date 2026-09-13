import { ImageResponse } from "next/og";
import { site } from "@/data/content";

export const runtime = "edge";
export const alt = "Ridhi Jolly — AI Product Manager";
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
          background: "#121018",
          color: "#F4F1F7",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#F4F1F7",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div style={{ width: 18, height: 18, borderRadius: 99, background: "#C5ADC5" }} />
          {site.title}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 92, lineHeight: 0.95 }}>{site.name}</div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "#B0AABC",
              maxWidth: 920,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Studios, TestStudios, Accessibility. Skills-first AI.
            Open to PM seats in India, Canada, and the UAE.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            color: "#B0AABC",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <span>IEEE-published ML researcher</span>
          <span>KaDeep AI</span>
        </div>
        <div
          style={{
            position: "absolute",
            right: 80,
            bottom: 72,
            width: 160,
            height: 160,
            borderRadius: 999,
            background: "#B2B5E0",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
