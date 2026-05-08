import { ScanLine, Edit3, Table, MessageSquare, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: ScanLine,
    title: "고문헌 특화 OCR",
    description:
      "한자, 한사본까지 인식합니다. 딥러닝 기반 Data-Adaptive OCR로 일반 OCR 대비 정확도 3배 향상. 훈민정음·세로쓰기·인쇄체·필사체 모두 지원합니다.",
    tags: ["한자 인식", "훈민정음", "필사체", "세로쓰기"],
    gradient: "from-[#3730a3] to-[#4338ca]",
    shadowColor: "rgba(55,48,163,0.2)",
  },
  {
    icon: Edit3,
    title: "인터랙티브 웹 편집",
    description:
      "웹에서 바로 인식 결과를 수정하고, 원본 레이아웃을 유지한 PDF로 저장합니다. 별도 프로그램 설치 없이 브라우저에서 전문가 검수까지 완료할 수 있습니다.",
    tags: ["웹 기반 편집", "PDF 저장", "레이아웃 보존"],
    gradient: "from-[#d97706] to-[#c9a84c]",
    shadowColor: "rgba(217,119,6,0.25)",
  },
  {
    icon: Table,
    title: "스마트 데이터 추출",
    description:
      "표와 이미지를 자동으로 분리하여 Excel·CSV로 변환합니다. 고문서 속 수치·통계 데이터를 즉시 연구에 활용 가능한 형태로 구조화합니다.",
    tags: ["Excel/CSV 변환", "표 자동 분리", "데이터 구조화"],
    gradient: "from-[#3730a3] to-[#6d28d9]",
    shadowColor: "rgba(55,48,163,0.2)",
  },
  {
    icon: MessageSquare,
    title: "AI 문서 대화",
    description:
      "인식된 문서에 질문하고, 번역하고, 요약하는 AI 어시스턴트. 방대한 고문헌 자료에서 필요한 정보를 대화하듯 찾아냅니다.",
    tags: ["문서 QA", "자동 번역", "자동 요약"],
    gradient: "from-[#d97706] to-[#b45309]",
    shadowColor: "rgba(217,119,6,0.25)",
  },
  {
    icon: Shield,
    title: "보안 배포",
    description:
      "On-Premise와 Cloud 모두 지원하는 유연한 배포 방식. 기밀성이 요구되는 기관 자료도 내부망에서 안전하게 처리합니다.",
    tags: ["On-Premise", "Cloud", "내부망 지원"],
    gradient: "from-[#3730a3] to-[#4338ca]",
    shadowColor: "rgba(55,48,163,0.2)",
  },
  {
    icon: Zap,
    title: "고속 대량 처리",
    description:
      "페이지당 평균 2초 이내의 고속 처리 속도. 클라우드 분산 처리로 수십만 페이지의 아카이빙 프로젝트도 빠르게 완수합니다.",
    tags: ["페이지당 2초", "병렬 처리", "대용량 지원"],
    gradient: "from-[#d97706] to-[#c9a84c]",
    shadowColor: "rgba(217,119,6,0.25)",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-[#fefcf8]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200 font-semibold text-sm mb-4">
            핵심 기능
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c0f06] mb-4 font-serif-kr">
            고문헌 특화 AI 기술
          </h2>
          <p className="text-[#7a5e42] max-w-2xl mx-auto text-lg leading-relaxed">
            한자, 훈민정음, 한사본까지 정확하게 인식하는 전문 OCR 기술.
            인식부터 편집, 데이터 활용까지 하나의 플랫폼에서 해결합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-[#fffdf5] rounded-3xl p-7 border border-[#dfd0b4] hover:-translate-y-2 hover:shadow-2xl hover:border-amber-300 transition-all duration-300 cursor-default"
              style={{ boxShadow: "0 2px 12px rgba(201,168,76,0.1)" }}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br ${service.gradient} shadow-lg`}
                style={{ boxShadow: `0 6px 18px ${service.shadowColor}` }}
              >
                <service.icon size={24} className="text-white" />
              </div>

              <h3 className="font-bold text-[#1c0f06] text-lg mb-3 group-hover:text-[#3730a3] transition-colors font-serif-kr">
                {service.title}
              </h3>
              <p className="text-[#7a5e42] text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200"
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
