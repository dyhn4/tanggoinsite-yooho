import { Upload, Brain, CheckSquare, Download } from "lucide-react";

const processSteps = [
  {
    step: "01",
    icon: Upload,
    title: "업로드",
    desc: "PDF 또는 이미지 파일을 업로드합니다",
    detail: "스캔본, 사진, PDF 등 모든 포맷 지원",
  },
  {
    step: "02",
    icon: Brain,
    title: "AI 분석",
    desc: "텍스트, 레이아웃, 객체를 자동 인식합니다",
    detail: "페이지당 평균 2초 이내 고속 처리",
  },
  {
    step: "03",
    icon: CheckSquare,
    title: "검토 및 편집",
    desc: "웹에서 결과를 확인하고 수정합니다",
    detail: "브라우저 기반 인터랙티브 편집 도구",
  },
  {
    step: "04",
    icon: Download,
    title: "다운로드",
    desc: "PDF, Excel, Docx 등으로 저장합니다",
    detail: "원본 레이아웃 유지 및 다양한 포맷 지원",
  },
];

const techSpecs = [
  {
    label: "고문헌 인식 정확도",
    value: "98.7%",
    sub: "일반 OCR 대비 3배 향상",
    color: "from-indigo-500 to-violet-600",
    pct: 98,
  },
  {
    label: "현대 문서 정확도",
    value: "99.5%+",
    sub: "인쇄체 기준",
    color: "from-violet-500 to-purple-600",
    pct: 99,
  },
  {
    label: "처리 속도",
    value: "≤ 2초",
    sub: "페이지당 평균",
    color: "from-amber-500 to-orange-400",
    pct: 95,
  },
];

export default function Technology() {
  return (
    <section id="technology" className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 font-semibold text-sm mb-4">
            사용 방법
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d3561] mb-4">
            이렇게 사용합니다
          </h2>
          <p className="text-[#7e8ba3] max-w-2xl mx-auto text-lg leading-relaxed">
            복잡한 과정 없이 간단하게 시작하세요.
            업로드부터 결과물 저장까지 4단계로 완성됩니다.
          </p>
        </div>

        {/* 4단계 프로세스 — tango.ai.kr .how-step 스타일 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {processSteps.map((step, index) => (
            <div key={step.step} className="relative group text-center">
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-6 text-violet-300 text-xl font-bold z-10 -translate-x-3">
                  →
                </div>
              )}
              <div
                className="bg-[#f8f9ff] hover:bg-white border border-[#e8ecf4] hover:border-violet-200 rounded-3xl p-6 transition-all duration-300 h-full hover:-translate-y-1"
                style={{ boxShadow: "0 2px 10px rgba(108, 92, 231, 0.05)" }}
              >
                {/* 스텝 번호 — tango.ai.kr .how-step-number 스타일 */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-violet-200">
                  <step.icon size={22} className="text-white" />
                </div>
                <div className="text-violet-500 font-bold text-sm font-mono mb-2">{step.step}</div>
                <h3 className="font-bold text-[#2d3561] mb-2">{step.title}</h3>
                <p className="text-[#7e8ba3] text-sm mb-2 leading-relaxed">{step.desc}</p>
                <p className="text-[#a8b3c5] text-xs">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 기술 성능 지표 — 딥 퍼플 다크 패널 */}
        <div className="bg-[#0a0718] rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* 배경 장식 */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-600/10 rounded-full blur-2xl pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(167,139,250,0.5) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* 왼쪽 */}
            <div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-violet-500/20 text-violet-300 font-semibold text-sm mb-4">
                기술력
              </span>
              <h3 className="text-white font-bold text-2xl md:text-3xl mb-4 leading-tight">
                딥러닝이 만든
                <br />
                압도적인 정확도
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                한자·훈민정음·세로쓰기 등 기존 OCR이 실패하는 고문헌에서도
                98.7%의 인식 정확도를 달성합니다. 사용할수록 특정 문서에 최적화되는
                Data-Adaptive 학습 엔진이 핵심입니다.
              </p>
              <div className="flex flex-wrap gap-2">
                {["한자 인식", "훈민정음", "세로쓰기", "필사체", "On-Premise"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-violet-500/20 border border-violet-400/25 text-violet-300 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 오른쪽 성능 바 */}
            <div className="space-y-6">
              {techSpecs.map((spec) => (
                <div key={spec.label}>
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <div className="text-white font-semibold text-sm">{spec.label}</div>
                      <div className="text-slate-500 text-xs">{spec.sub}</div>
                    </div>
                    <div className="text-white font-bold text-xl">{spec.value}</div>
                  </div>
                  <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${spec.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${spec.pct}%` }}
                    />
                  </div>
                </div>
              ))}

              <div className="mt-6 p-4 bg-white/5 border border-violet-700/20 rounded-2xl flex items-center gap-4">
                <div className="text-3xl font-bold text-gradient-purple">5M+</div>
                <div>
                  <div className="text-white text-sm font-medium">누적 처리 페이지</div>
                  <div className="text-slate-500 text-xs">50+ 기관 · 국립도서관·대학·연구원</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
