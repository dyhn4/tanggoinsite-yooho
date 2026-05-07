import { Building2, Calendar, MapPin, Award } from "lucide-react";

const highlights = [
  { icon: Calendar, label: "설립연도", value: "2022년 9월" },
  { icon: MapPin, label: "위치", value: "서울 성동구 (왕십리)" },
  { icon: Building2, label: "기업 유형", value: "비상장 중소기업" },
  { icon: Award, label: "핵심 기술", value: "Data-Adaptive OCR" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 텍스트 */}
          <div>
            <span className="inline-block text-blue-700 font-semibold text-sm tracking-widest uppercase mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              고문헌부터 현대 문서까지,
              <br />
              인식에서 활용까지
              <br />
              하나의 플랫폼에서
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                탱고인사이트(Tango Insight)는 2022년 설립된 AI 기반 문서 데이터화 및
                지식 프로세스 아웃소싱(KPO) 전문 기업입니다.
              </p>
              <p>
                딥러닝 기반의 <strong className="text-slate-900">Data-Adaptive OCR</strong>을 핵심 기술로,
                한자·훈민정음·세로쓰기 등 기존 OCR이 실패하는 고문헌에서도 98.7%의
                인식 정확도를 달성합니다. 국립도서관, 한국학연구원, 대학 역사학과 등
                50개 이상의 기관이 도입하여 5백만 페이지 이상을 처리했습니다.
              </p>
              <p>
                단순 텍스트 인식을 넘어, 인터랙티브 웹 편집·AI 문서 대화·데이터
                추출까지 하나의 플랫폼에서 제공합니다. 기업과 연구기관이 핵심 역량에
                집중할 수 있도록 복잡한 문서 디지털화 업무 전체를 대행합니다.
              </p>
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-blue-50 border border-blue-100">
              <p className="text-blue-800 font-medium text-sm leading-relaxed">
                <strong>미션:</strong> "모든 역사적 기록이 디지털 지식 자산으로" —
                아날로그에 잠들어 있는 정보를 누구나 검색하고 활용할 수 있도록 합니다.
              </p>
            </div>
          </div>

          {/* 카드 그리드 */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-700/10 flex items-center justify-center mb-3">
                  <item.icon size={20} className="text-blue-700" />
                </div>
                <div className="text-xs text-slate-500 mb-1">{item.label}</div>
                <div className="font-semibold text-slate-900">{item.value}</div>
              </div>
            ))}

            {/* 실적 강조 카드 */}
            <div className="col-span-2 p-5 rounded-2xl bg-gradient-to-r from-blue-700 to-sky-600 text-white">
              <div className="text-sm font-medium text-blue-100 mb-3">검증된 실적</div>
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "5M+", label: "처리 페이지" },
                  { value: "50+", label: "도입 기관" },
                  { value: "98.7%", label: "인식 정확도" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-xl font-bold text-white">{s.value}</div>
                    <div className="text-blue-200 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
