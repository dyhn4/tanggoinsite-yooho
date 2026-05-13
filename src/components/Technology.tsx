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

export default function Technology() {
  return (
    <section
      id="technology"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 bg-white py-16"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200 font-semibold text-sm mb-4">
            Solution
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            솔루션
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            최신 딥러닝 기술을 기반으로 지속적으로 진화하는 OCR 엔진.
            어떤 문서도 정확하게 처리합니다.
          </p>
        </div>

        {/* 기술 특징 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techFeatures.map((feature) => (
            <div
              key={feature.title}
              className="group flex gap-5 p-7 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-blue-50/40 hover:border-blue-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 to-sky-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <feature.icon size={22} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
