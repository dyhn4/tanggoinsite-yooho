const testimonials = [
  {
    quote:
      "조선시대 고문서 디지털화 작업이 80% 빠르게 완료되었습니다. 특히 한자 인식 정확도가 일반 OCR과는 비교할 수 없을 정도로 뛰어났습니다.",
    name: "김지선",
    role: "국립도서관 디지털 아카이빙팀",
    initial: "김",
    gradient: "from-[#3730a3] to-[#4338ca]",
  },
  {
    quote:
      "세로쓰기 전문 자료를 검색 가능한 텍스트로 변환하는 프로젝트에서 96% 이상의 정확도를 달성했습니다. 연구 효율이 3배 향상되었어요.",
    name: "이성우 교수",
    role: "OO대학교 역사학과",
    initial: "이",
    gradient: "from-amber-600 to-amber-500",
  },
  {
    quote:
      "한국학 고전 데이터베이스 구축에 탱고인사이트를 활용했습니다. 웹 기반 편집 기능 덕분에 전문가 검수가 매우 편리했습니다.",
    name: "박민준 연구원",
    role: "한국학 연구원",
    initial: "박",
    gradient: "from-[#3730a3] to-[#6d28d9]",
  },
];

const clients = [
  "국립도서관",
  "한국학연구원",
  "국사편찬위원회",
  "OO대학교 역사학과",
  "문화재청",
  "지방자치단체 기록원",
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-[#fefcf8]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200 font-semibold text-sm mb-4">
            고객 평가
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c0f06] mb-4 font-serif-kr">
            도입 기관의 목소리
          </h2>
          <p className="text-[#7a5e42] max-w-xl mx-auto text-lg">
            실제 사용자들의 생생한 경험을 들어보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#fffdf5] rounded-3xl p-7 border border-[#dfd0b4] hover:-translate-y-2 hover:shadow-2xl hover:border-amber-300 transition-all duration-300 flex flex-col"
              style={{ boxShadow: "0 2px 12px rgba(201,168,76,0.1)" }}
            >
              <div className="text-amber-300 text-5xl font-serif leading-none mb-4 select-none">
                "
              </div>
              <p className="text-[#7a5e42] text-sm leading-relaxed flex-1 mb-6">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#dfd0b4]">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md font-serif-kr`}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="font-semibold text-[#1c0f06] text-sm font-serif-kr">{t.name}</div>
                  <div className="text-[#a08060] text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[#a08060] text-sm mb-6 font-medium">
            50+ 기관에서 신뢰하는 탱고인사이트
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {clients.map((client) => (
              <span
                key={client}
                className="px-5 py-2 rounded-full bg-[#fffdf5] border border-[#dfd0b4] hover:border-amber-400 hover:bg-amber-50 text-[#7a5e42] hover:text-amber-800 text-sm font-medium transition-all duration-200"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
