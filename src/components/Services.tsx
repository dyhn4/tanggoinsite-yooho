import { ScanLine, Edit3, Table, MessageSquare, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: ScanLine,
    title: "고문헌 특화 OCR",
    description:
      "한자, 한사본까지 인식합니다. 딥러닝 기반 Data-Adaptive OCR로 일반 OCR 대비 정확도 3배 향상. 훈민정음·세로쓰기·인쇄체·필사체 모두 지원합니다.",
    tags: ["한자 인식", "훈민정음", "필사체", "세로쓰기"],
  },
  {
    icon: Edit3,
    title: "인터랙티브 웹 편집",
    description:
      "웹에서 바로 인식 결과를 수정하고, 원본 레이아웃을 유지한 PDF로 저장합니다. 별도 프로그램 설치 없이 브라우저에서 전문가 검수까지 완료할 수 있습니다.",
    tags: ["웹 기반 편집", "PDF 저장", "레이아웃 보존"],
  },
  {
    icon: Table,
    title: "스마트 데이터 추출",
    description:
      "표와 이미지를 자동으로 분리하여 Excel·CSV로 변환합니다. 고문서 속 수치·통계 데이터를 즉시 연구에 활용 가능한 형태로 구조화합니다.",
    tags: ["Excel/CSV 변환", "표 자동 분리", "데이터 구조화"],
  },
  {
    icon: MessageSquare,
    title: "AI 문서 대화",
    description:
      "인식된 문서에 질문하고, 번역하고, 요약하는 AI 어시스턴트. 방대한 고문헌 자료에서 필요한 정보를 대화하듯 찾아냅니다.",
    tags: ["문서 QA", "자동 번역", "자동 요약"],
  },
  {
    icon: Shield,
    title: "보안 배포",
    description:
      "On-Premise와 Cloud 모두 지원하는 유연한 배포 방식. 기밀성이 요구되는 기관 자료도 내부망에서 안전하게 처리합니다.",
    tags: ["On-Premise", "Cloud", "내부망 지원"],
  },
  {
    icon: Zap,
    title: "고속 대량 처리",
    description:
      "페이지당 평균 2초 이내의 고속 처리 속도. 클라우드 분산 처리로 수십만 페이지의 아카이빙 프로젝트도 빠르게 완수합니다.",
    tags: ["페이지당 2초", "병렬 처리", "대용량 지원"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 bg-white py-12"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* 헤더 */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200 font-semibold text-sm mb-3">
            핵심 기능
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            고문헌 특화 AI 기술
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base leading-relaxed">
            한자, 훈민정음, 한사본까지 정확하게 인식하는 전문 OCR 기술.
            인식부터 편집, 데이터 활용까지 하나의 플랫폼에서 해결합니다.
          </p>
        </div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:-translate-y-1 hover:shadow-xl hover:border-blue-200 hover:bg-blue-50/40 transition-all duration-300 cursor-default flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-blue-700 to-sky-500 shadow-md shadow-blue-500/20 flex-shrink-0">
                <service.icon size={22} className="text-white" />
              </div>

              <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-blue-700 transition-colors tracking-tight">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700 border border-blue-200 whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
