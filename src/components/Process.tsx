const processSteps = [
  { step: "01", title: "문서 수집", desc: "스캔, 사진, PDF 등 다양한 형태로 수집" },
  { step: "02", title: "AI 인식", desc: "Data-Adaptive OCR 엔진으로 고정밀 인식" },
  { step: "03", title: "데이터 정제", desc: "오류 검출 및 자동/수동 보정" },
  { step: "04", title: "구조화 출력", desc: "고객사 시스템에 맞는 형식으로 전달" },
];

const accuracyBars = [
  { label: "고문헌 인식 정확도", sub: "일반 OCR 대비 3배 향상", value: 98.7, display: "98.7%", color: "from-blue-500 to-sky-400" },
  { label: "현대 문서 정확도", sub: "인쇄체 기준", value: 99.5, display: "99.5%+", color: "from-blue-600 to-blue-400" },
  { label: "처리 속도", sub: "페이지당 평균", value: 95, display: "≤ 2초", color: "from-sky-500 to-cyan-400" },
];

const tags = ["한자 인식", "훈민정음", "세로쓰기", "필사체", "On-Premise"];

export default function Process() {
  return (
    <section
      id="process"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-10"
    >
      <div className="max-w-6xl mx-auto w-full space-y-8">

        {/* 상단: 정확도 섹션 */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* 왼쪽 텍스트 */}
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-semibold text-xs mb-3">
                기술력
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
                딥러닝이 만든<br />압도적인 정확도
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                한자·훈민정음·세로쓰기 등 기존 OCR이 실패하는 고문헌에서도 98.7%의 인식 정확도를 달성합니다. 사용할수록 특정 문서에 최적화되는 Data-Adaptive 학습 엔진이 핵심입니다.
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 오른쪽 그래프 */}
            <div className="space-y-4">
              {accuracyBars.map((bar) => (
                <div key={bar.label}>
                  <div className="flex justify-between items-baseline mb-1">
                    <div>
                      <span className="text-white text-sm font-semibold">{bar.label}</span>
                      <span className="text-slate-500 text-xs ml-2">{bar.sub}</span>
                    </div>
                    <span className="text-white font-bold text-sm">{bar.display}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${bar.color}`}
                      style={{ width: `${bar.value}%` }}
                    />
                  </div>
                </div>
              ))}

              {/* 5M+ 카드 */}
              <div className="mt-4 p-4 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center gap-4">
                <span className="text-3xl font-extrabold text-white">5M+</span>
                <div>
                  <div className="text-white text-sm font-semibold">누적 처리 페이지</div>
                  <div className="text-slate-400 text-xs">50+ 기관 · 국립도서관·대학·연구원</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단: 문서 처리 프로세스 */}
        <div>
          <div className="text-center mb-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-semibold text-xs mb-2">
              Process
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              문서 처리 프로세스
            </h3>
          </div>

          <div className="relative">
            {/* 단일 연결선 — 첫 번째 노드 중심 ~ 마지막 노드 중심 */}
            <div
              className="hidden md:block absolute h-px top-6 z-0"
              style={{
                left: "calc(12.5% - 0px)",
                right: "calc(12.5% - 0px)",
                background: "linear-gradient(to right, rgba(96,165,250,0.15), rgba(56,189,248,0.6) 30%, rgba(56,189,248,0.6) 70%, rgba(96,165,250,0.15))",
              }}
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {processSteps.map((step) => (
                <div key={step.step} className="flex flex-col items-center text-center">
                  {/* 노드 */}
                  <div className="relative z-10 mb-4">
                    {/* 글로우 링 */}
                    <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md scale-125" />
                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center shadow-lg shadow-blue-500/40">
                      <span className="text-white font-black text-sm tracking-tight">{step.step}</span>
                    </div>
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1">{step.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed max-w-[140px] mx-auto">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
