import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "탱고인사이트 | AI 기반 문서 데이터화 전문 기업";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #0f172a 100%)",
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
        {/* 배경 그리드 패턴 */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* 상단 뱃지 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 20px",
            borderRadius: "999px",
            border: "1px solid rgba(96,165,250,0.4)",
            background: "rgba(29,78,216,0.2)",
            color: "#93c5fd",
            fontSize: "18px",
            letterSpacing: "0.15em",
            marginBottom: "28px",
          }}
        >
          AI OCR · KPO · 문서 디지털화
        </div>

        {/* 메인 타이틀 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "16px",
          }}
        >
          {/* 로고 아이콘 */}
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #1d4ed8, #0ea5e9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              fontWeight: 900,
              color: "white",
            }}
          >
            T
          </div>
          <span
            style={{
              fontSize: "72px",
              fontWeight: 900,
              color: "white",
              letterSpacing: "-2px",
            }}
          >
            탱고인사이트
          </span>
        </div>

        {/* 서브타이틀 */}
        <div
          style={{
            color: "#94a3b8",
            fontSize: "26px",
            marginBottom: "48px",
            letterSpacing: "-0.5px",
          }}
        >
          고문헌부터 현대 문서까지 · 인식에서 활용까지 하나의 플랫폼
        </div>

        {/* 하단 지표 3개 */}
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
                padding: "16px 32px",
                borderRadius: "16px",
                border: "1px solid rgba(96,165,250,0.25)",
                background: "rgba(29,78,216,0.15)",
              }}
            >
              <span style={{ color: "#60a5fa", fontSize: "32px", fontWeight: 900 }}>
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
