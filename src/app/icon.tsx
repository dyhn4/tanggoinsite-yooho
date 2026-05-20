import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "7px",
        }}
      >
        {/* 상단 광택 */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "50%",
            background: "rgba(255,255,255,0.12)",
            borderRadius: "7px 7px 0 0",
          }}
        />
        {/* T 글자 */}
        <div
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: 900,
            fontFamily: "Arial Black, sans-serif",
            letterSpacing: "-1px",
            lineHeight: 1,
          }}
        >
          T
        </div>
      </div>
    ),
    { ...size }
  );
}
