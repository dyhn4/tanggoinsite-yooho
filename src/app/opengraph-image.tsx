import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "TangoInsight | AI 기반 문서 데이터화 전문 기업";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0f2460 50%, #0a1628 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* 배경 그리드 */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        {/* 글로우 블러 */}
        <div style={{
          position: "absolute",
          top: "10%", left: "20%",
          width: "400px", height: "400px",
          borderRadius: "50%",
          background: "rgba(29,78,216,0.18)",
          filter: "blur(80px)",
        }} />
        <div style={{
          position: "absolute",
          bottom: "10%", right: "20%",
          width: "300px", height: "300px",
          borderRadius: "50%",
          background: "rgba(14,165,233,0.12)",
          filter: "blur(80px)",
        }} />

        {/* 뱃지 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "7px 22px",
            borderRadius: "999px",
            border: "1px solid rgba(96,165,250,0.35)",
            background: "rgba(29,78,216,0.18)",
            color: "#93c5fd",
            fontSize: "17px",
            letterSpacing: "0.18em",
            marginBottom: "32px",
          }}
        >
          AI OCR · KPO · 문서 디지털화
        </div>

        {/* 메인 로고 — Tango(파랑) + Insight(흰색) */}
        <div style={{ display: "flex", alignItems: "baseline", marginBottom: "20px" }}>
          <span
            style={{
              fontSize: "100px",
              fontWeight: 900,
              letterSpacing: "-3px",
              backgroundImage: "linear-gradient(90deg, #2563eb, #38bdf8)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Tango
          </span>
          <span
            style={{
              fontSize: "100px",
              fontWeight: 900,
              letterSpacing: "-3px",
              color: "white",
            }}
          >
            Insight
          </span>
        </div>

        {/* 서브타이틀 */}
        <div
          style={{
            color: "#94a3b8",
            fontSize: "24px",
            marginBottom: "52px",
            letterSpacing: "-0.3px",
          }}
        >
          고문헌부터 현대 문서까지 · 인식에서 활용까지 하나의 플랫폼
        </div>

        {/* 하단 지표 */}
        <div style={{ display: "flex", gap: "20px" }}>
          {[
            { value: "98.7%", label: "OCR 인식 정확도" },
            { value: "1M+",   label: "누적 처리 건수"  },
            { value: "50+",   label: "도입 기관 수"    },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "16px 36px",
                borderRadius: "16px",
                border: "1px solid rgba(96,165,250,0.22)",
                background: "rgba(29,78,216,0.14)",
              }}
            >
              <span style={{ color: "#60a5fa", fontSize: "34px", fontWeight: 900 }}>
                {stat.value}
              </span>
              <span style={{ color: "#64748b", fontSize: "16px", marginTop: "4px" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
