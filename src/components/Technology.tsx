import { Layers, Zap, RefreshCw, ShieldCheck } from "lucide-react";

const techFeatures = [
  {
    icon: Layers,
    title: "딥러닝 기반 인식 엔진",
    description:
      "CNN, Transformer 아키텍처를 활용한 최신 OCR 모델로, 손글씨·인쇄체·표·도장 등 모든 문자 유형을 정확하게 인식합니다.",
  },
  {
    icon: RefreshCw,
    title: "데이터 적응형 학습",
    description:
      "고객사의 특정 문서 양식에 맞게 모델을 파인튜닝합니다. 사용할수록 정확도가 높아지는 학습형 OCR 엔진입니다.",
  },
  {
    icon: Zap,
    title: "고속 대량 처리",
    description:
      "클라우드 기반 분산 처리 아키텍처로 수만 건의 문서를 병렬 처리합니다. 피크타임 자동 스케일링으로 항상 빠른 처리를 보장합니다.",
  },
  {
    icon: ShieldCheck,
    title: "검수 및 품질 보증",
    description:
      "AI 인식 후 전문 검수 인력이 2차 품질 검증을 수행합니다. 오인식률을 최소화하고 데이터 신뢰성을 보장합니다.",
  },
];

const processSteps = [
  { step: "01", title: "문서 수집", desc: "스캔, 사진, PDF 등 다양한 형태로 수집" },
  { step: "02", title: "AI 인식", desc: "Data-Adaptive OCR 엔진으로 고정밀 인식" },
  { step: "03", title: "데이터 정제", desc: "오류 검출 및 자동/수동 보정" },
  { step: "04", title: "구조화 출력", desc: "고객사 시스템에 맞는 형식으로 전달" },
];

export default function Technology() {
  return (
    <section id="technology" className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-700 font-semibold text-sm tracking-widest uppercase mb-4">
            Technology
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            기술력
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            최신 딥러닝 기술을 기반으로 지속적으로 진화하는 OCR 엔진.
            어떤 문서도 정확하게 처리합니다.
          </p>
        </div>

        {/* 기술 특징 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {techFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-5 p-6 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-transparent hover:border-blue-100 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-700 flex items-center justify-center">
                <feature.icon size={22} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 처리 프로세스 */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 md:p-12">
          <h3 className="text-white font-bold text-2xl text-center mb-12">
            문서 처리 프로세스
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* 연결선 (마지막 제외) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-blue-700/50 -translate-x-4 z-0" />
                )}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center mx-auto mb-4">
                    <span className="text-sky-400 font-bold text-lg">{step.step}</span>
                  </div>
                  <div className="text-white font-semibold mb-1">{step.title}</div>
                  <div className="text-slate-400 text-xs leading-relaxed">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
