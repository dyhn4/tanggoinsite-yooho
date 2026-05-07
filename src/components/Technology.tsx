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
    color: "from-blue-600 to-blue-700",
    pct: 98,
  },
  {
    label: "현대 문서 정확도",
    value: "99.5%+",
    sub: "인쇄체 기준",
    color: "from-sky-500 to-sky-600",
    pct: 99,
  },
  {
    label: "처리 속도",
    value: "≤ 2초",
    sub: "페이지당 평균",
    color: "from-indigo-500 to-indigo-600",
    pct: 95,
  },
];

export default function Technology() {
  return (
    <section id="technology" className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-700 font-semibold text-sm tracking-widest uppercase mb-4">
            사용 방법
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            이렇게 사용합니다
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            복잡한 과정 없이 간단하게 시작하세요.
            업로드부터 결과물 저장까지 4단계로 완성됩니다.
          </p>
        </div>

        {/* 4단계 프로세스 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {processSteps.map((step, index) => (
            <div key={step.step} className="relative group">
              {/* 화살표 연결선 (마지막 제외) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-6 text-slate-300 text-xl font-bold z-10 -translate-x-3">
                  →
                </div>
              )}
              <div className="bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 rounded-2xl p-5 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center flex-shrink-0">
                    <step.icon size={18} className="text-white" />
                  </div>
                  <span className="text-blue-700 font-bold text-sm">{step.step}</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm mb-2 leading-relaxed">{step.desc}</p>
                <p className="text-slate-400 text-xs">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 기술 성능 지표 */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* 왼쪽 텍스트 */}
            <div>
              <span className="inline-block text-sky-400 font-semibold text-sm tracking-widest uppercase mb-4">
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
              <div className="flex flex-wrap gap-3">
                {["한자 인식", "훈민정음", "세로쓰기", "필사체", "On-Premise"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-medium"
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

              <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-xl flex items-center gap-4">
                <div className="text-3xl font-bold text-white">5M+</div>
                <div>
                  <div className="text-white text-sm font-medium">누적 처리 페이지</div>
                  <div className="text-slate-400 text-xs">50+ 기관 · 국립도서관·대학·연구원</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
