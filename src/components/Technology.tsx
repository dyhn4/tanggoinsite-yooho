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
    color: "from-amber-500 to-amber-400",
    pct: 98,
  },
  {
    label: "현대 문서 정확도",
    value: "99.5%+",
    sub: "인쇄체 기준",
    color: "from-[#3730a3] to-[#4338ca]",
    pct: 99,
  },
  {
    label: "처리 속도",
    value: "≤ 2초",
    sub: "페이지당 평균",
    color: "from-amber-600 to-amber-400",
    pct: 95,
  },
];

export default function Technology() {
  return (
    <section id="technology" className="py-24 px-4 sm:px-6 bg-[#fffdf5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200 font-semibold text-sm mb-4">
            사용 방법
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c0f06] mb-4 font-serif-kr">
            이렇게 사용합니다
          </h2>
          <p className="text-[#7a5e42] max-w-2xl mx-auto text-lg leading-relaxed">
            복잡한 과정 없이 간단하게 시작하세요.
            업로드부터 결과물 저장까지 4단계로 완성됩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {processSteps.map((step, index) => (
            <div key={step.step} className="relative group text-center">
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-6 text-amber-400 text-xl font-bold z-10 -translate-x-3">
                  →
                </div>
              )}
              <div
                className="bg-[#fefcf8] hover:bg-[#fffdf5] border border-[#dfd0b4] hover:border-amber-300 rounded-3xl p-6 transition-all duration-300 h-full hover:-translate-y-1"
                style={{ boxShadow: "0 2px 10px rgba(201,168,76,0.08)" }}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#3730a3] to-[#4338ca] flex items-center justify-center mx-auto mb-4 shadow-lg"
                  style={{ boxShadow: "0 6px 18px rgba(55,48,163,0.3)" }}>
                  <step.icon size={22} className="text-white" />
                </div>
                <div className="text-amber-600 font-bold text-sm font-mono mb-2">{step.step}</div>
                <h3 className="font-bold text-[#1c0f06] mb-2 font-serif-kr">{step.title}</h3>
                <p className="text-[#7a5e42] text-sm mb-2 leading-relaxed">{step.desc}</p>
                <p className="text-[#a08060] text-xs">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 기술 성능 지표 — 따뜻한 다크 패널 */}
        <div className="bg-[#1a0f06] rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-700/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-amber-800/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-48 h-48 bg-indigo-800/15 rounded-full blur-2xl pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201,168,76,0.7) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/20 font-semibold text-sm mb-4">
                기술력
              </span>
              <h3 className="text-[#fde8c0] font-bold text-2xl md:text-3xl mb-4 leading-tight font-serif-kr">
                딥러닝이 만든
                <br />
                압도적인 정확도
              </h3>
              <p className="text-[#b89870] leading-relaxed mb-6">
                한자·훈민정음·세로쓰기 등 기존 OCR이 실패하는 고문헌에서도
                98.7%의 인식 정확도를 달성합니다. 사용할수록 특정 문서에 최적화되는
                Data-Adaptive 학습 엔진이 핵심입니다.
              </p>
              <div className="flex flex-wrap gap-2">
                {["한자 인식", "훈민정음", "세로쓰기", "필사체", "On-Premise"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-amber-800/20 border border-amber-600/25 text-amber-300 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {techSpecs.map((spec) => (
                <div key={spec.label}>
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <div className="text-[#fde8c0] font-semibold text-sm">{spec.label}</div>
                      <div className="text-[#7a5e42] text-xs">{spec.sub}</div>
                    </div>
                    <div className="text-[#fde8c0] font-bold text-xl font-serif-kr">{spec.value}</div>
                  </div>
                  <div className="h-2.5 bg-amber-950/50 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${spec.color} rounded-full`}
                      style={{ width: `${spec.pct}%` }}
                    />
                  </div>
                </div>
              ))}

              <div className="mt-6 p-4 bg-amber-950/30 border border-amber-700/20 rounded-2xl flex items-center gap-4">
                <div className="text-3xl font-bold text-[#fde8c0] font-serif-kr">5M+</div>
                <div>
                  <div className="text-[#fde8c0] text-sm font-medium">누적 처리 페이지</div>
                  <div className="text-[#7a5e42] text-xs">50+ 기관 · 국립도서관·대학·연구원</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
