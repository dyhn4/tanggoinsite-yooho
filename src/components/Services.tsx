import { ScanLine, Edit3, Table, MessageSquare, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: ScanLine,
    emoji: "📜",
    title: "고문헌 특화 OCR",
    description:
      "한자, 한자, 한사본까지 인식합니다. 딥러닝 기반 Data-Adaptive OCR로 일반 OCR 대비 정확도 3배 향상. 훈민정음·세로쓰기·인쇄체·필사체 모두 지원합니다.",
    tags: ["한자 인식", "훈민정음", "필사체", "세로쓰기"],
    color: "blue",
  },
  {
    icon: Edit3,
    emoji: "✏️",
    title: "인터랙티브 웹 편집",
    description:
      "웹에서 바로 인식 결과를 수정하고, 원본 레이아웃을 유지한 PDF로 저장합니다. 별도 프로그램 설치 없이 브라우저에서 전문가 검수까지 완료할 수 있습니다.",
    tags: ["웹 기반 편집", "PDF 저장", "레이아웃 보존"],
    color: "sky",
  },
  {
    icon: Table,
    emoji: "📊",
    title: "스마트 데이터 추출",
    description:
      "표와 이미지를 자동으로 분리하여 Excel·CSV로 변환합니다. 고문서 속 수치·통계 데이터를 즉시 연구에 활용 가능한 형태로 구조화합니다.",
    tags: ["Excel/CSV 변환", "표 자동 분리", "데이터 구조화"],
    color: "indigo",
  },
  {
    icon: MessageSquare,
    emoji: "💬",
    title: "AI 문서 대화",
    description:
      "인식된 문서에 질문하고, 번역하고, 요약하는 AI 어시스턴트. 방대한 고문헌 자료에서 필요한 정보를 대화하듯 찾아냅니다.",
    tags: ["문서 QA", "자동 번역", "자동 요약"],
    color: "blue",
  },
  {
    icon: Shield,
    emoji: "🔒",
    title: "보안 배포",
    description:
      "On-Premise와 Cloud 모두 지원하는 유연한 배포 방식. 기밀성이 요구되는 기관 자료도 내부망에서 안전하게 처리합니다.",
    tags: ["On-Premise", "Cloud", "내부망 지원"],
    color: "sky",
  },
  {
    icon: Zap,
    emoji: "⚡",
    title: "고속 대량 처리",
    description:
      "페이지당 평균 2초 이내의 고속 처리 속도. 클라우드 분산 처리로 수십만 페이지의 아카이빙 프로젝트도 빠르게 완수합니다.",
    tags: ["페이지당 2초", "병렬 처리", "대용량 지원"],
    color: "indigo",
  },
];

const colorMap = {
  blue: {
    icon: "bg-blue-100 text-blue-700",
    tag: "bg-blue-50 text-blue-700",
    border: "hover:border-blue-200",
  },
  sky: {
    icon: "bg-sky-100 text-sky-700",
    tag: "bg-sky-50 text-sky-700",
    border: "hover:border-sky-200",
  },
  indigo: {
    icon: "bg-indigo-100 text-indigo-700",
    tag: "bg-indigo-50 text-indigo-700",
    border: "hover:border-indigo-200",
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-700 font-semibold text-sm tracking-widest uppercase mb-4">
            핵심 기능
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            고문헌 특화 AI 기술
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            한자, 훈민정음, 한사본까지 정확하게 인식하는 전문 OCR 기술.
            인식부터 편집, 데이터 활용까지 하나의 플랫폼에서 해결합니다.
          </p>
        </div>

        {/* 서비스 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const colors = colorMap[service.color as keyof typeof colorMap];
            return (
              <div
                key={service.title}
                className={`group bg-white rounded-2xl p-6 border border-slate-100 ${colors.border} hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${colors.icon}`}
                  >
                    <service.icon size={22} />
                  </div>
                  <span className="text-2xl">{service.emoji}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-3 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${colors.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
