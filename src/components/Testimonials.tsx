"use client";

const testimonials = [
  {
    quote:
      "조선시대 고문서 디지털화 작업이 80% 빠르게 완료되었습니다. 특히 한자 인식 정확도가 일반 OCR과는 비교할 수 없을 정도로 뛰어났습니다.",
    name: "김진수",
    role: "디지털 아카이브팀",
    org: "국립도서관",
    initial: "김",
    gradient: "from-blue-600 to-sky-400",
  },
  {
    quote:
      "세로쓰기 신문 자료를 검색 가능한 텍스트로 변환하는 프로젝트에서 96% 이상의 정확도를 달성했습니다. 연구 효율이 3배 향상되었어요.",
    name: "이서연 교수",
    role: "역사학과",
    org: "국내 주요 대학",
    initial: "이",
    gradient: "from-indigo-600 to-blue-400",
  },
  {
    quote:
      "한의학 고전 데이터베이스 구축에 Tangoinsight를 활용했습니다. 웹 기반 편집 기능 덕분에 전문가 검수가 매우 편리했습니다.",
    name: "박민준 연구원",
    role: "연구원",
    org: "한의학 연구소",
    initial: "박",
    gradient: "from-sky-500 to-cyan-400",
  },
];

export default function Testimonials() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex flex-col items-center justify-center px-6 py-16">
      {/* 헤더 */}
      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest bg-blue-100 text-blue-700 mb-4">
          고객 평가
        </span>
        <h2
          className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-3"
          style={{ fontFamily: "'Sora', sans-serif", letterSpacing: "-0.02em" }}
        >
          도입 기관의 목소리
        </h2>
        <p className="text-slate-500 text-sm md:text-base">
          실제 사용자들의 생생한 경험을 들어보세요
        </p>
      </div>

      {/* 카드 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-5xl">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="group relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100
                       hover:shadow-md hover:-translate-y-1 hover:border-blue-100
                       transition-all duration-300 flex flex-col gap-4"
          >
            {/* 따옴표 장식 */}
            <div
              className={`text-5xl font-black leading-none bg-gradient-to-br ${t.gradient} bg-clip-text text-transparent select-none`}
              aria-hidden
            >
              &ldquo;
            </div>

            {/* 인용문 */}
            <p className="text-slate-600 text-sm leading-relaxed flex-1">
              {t.quote}
            </p>

            {/* 구분선 */}
            <div className="h-px bg-slate-100" />

            {/* 프로필 */}
            <div className="flex items-center gap-3">
              {/* 이니셜 아바타 */}
              <div
                className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-sm font-bold shrink-0`}
              >
                {t.initial}
              </div>
              <div>
                <p className="text-slate-800 text-sm font-semibold leading-tight">
                  {t.name}
                </p>
                <p className="text-slate-400 text-xs mt-0.5">
                  {t.org} · {t.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 하단 카운터 힌트 */}
      <p className="mt-10 text-xs text-slate-400 tracking-wide">
        더 많은 도입 사례가 계속 추가됩니다
      </p>
    </section>
  );
}
