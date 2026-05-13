import { ScanLine, Workflow, Brain, Database, FileSearch, Users } from "lucide-react";

const services = [
  {
    icon: ScanLine,
    title: "AI OCR 문서 인식",
    description:
      "딥러닝 기반 Data-Adaptive OCR로 손글씨, 표, 인감 등 복잡한 문서도 고정밀 인식합니다. 학습을 통해 특정 문서 양식에 최적화됩니다.",
    tags: ["고정밀 인식", "적응형 학습", "다양한 포맷"],
    color: "blue",
  },
  {
    icon: Workflow,
    title: "워크플로우 기반 문서 처리",
    description:
      "체계적인 워크플로우 시스템으로 대용량 문서를 효율적으로 처리합니다. 접수-인식-검수-출력의 전 과정을 자동화합니다.",
    tags: ["자동화", "대용량 처리", "품질 관리"],
    color: "sky",
  },
  {
    icon: Database,
    title: "데이터 변환 및 가공",
    description:
      "인식된 문서 데이터를 Excel, JSON, XML 등 원하는 형식으로 변환하고, 고객사 시스템에 맞게 구조화합니다.",
    tags: ["다양한 출력 형식", "데이터 정제", "API 연동"],
    color: "indigo",
  },
  {
    icon: Brain,
    title: "지식 프로세스 아웃소싱(KPO)",
    description:
      "단순 데이터 처리를 넘어, 전문 지식이 필요한 고부가가치 업무를 대행합니다. 법률, 의료, 금융 문서 등 특수 도메인 처리에 강점을 가집니다.",
    tags: ["전문 도메인", "고부가가치", "BPO 이상"],
    color: "blue",
  },
  {
    icon: FileSearch,
    title: "문서 디지털 아카이빙",
    description:
      "레거시 문서의 체계적인 디지털 전환을 지원합니다. 메타데이터 관리, 검색 인덱싱, 문서 분류 체계 구축까지 통합 서비스를 제공합니다.",
    tags: ["레거시 전환", "검색 최적화", "체계적 분류"],
    color: "sky",
  },
  {
    icon: Users,
    title: "맞춤형 솔루션 컨설팅",
    description:
      "기업의 문서 처리 현황을 분석하고 최적의 디지털화 로드맵을 제안합니다. 파일럿 프로젝트를 통해 도입 효과를 사전 검증합니다.",
    tags: ["현황 분석", "로드맵 설계", "파일럿 지원"],
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
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            주요 서비스
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            문서 디지털화의 전 과정을 커버합니다. 기업 규모와 요구사항에 맞는
            맞춤형 솔루션을 제공합니다.
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
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colors.icon}`}
                >
                  <service.icon size={24} />
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
