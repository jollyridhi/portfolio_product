import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#C5ADC5",
          color: "#2A2433",
          fontSize: 16,
          fontFamily: "Georgia, serif",
        }}
      >
        RJ
      </div>
    ),
    { ...size },
  );
}
