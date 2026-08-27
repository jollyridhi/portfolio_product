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
          background: "#F7F6F2",
          color: "#141414",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#2C3480",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          {site.title}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 92, lineHeight: 0.95 }}>{site.name}</div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "#4A4A4A",
              maxWidth: 920,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Early-career AI and platform PM. Two live products.
            Skills-first AI. Accessibility without a fake “compliant” stamp.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            color: "#4A4A4A",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <span>IEEE-published ML researcher</span>
          <span>KaDeep Technologies</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
