import { Building2, Calendar, MapPin, Award, Target, RefreshCw, BarChart3 } from "lucide-react";

const highlights = [
  { icon: Calendar, label: "설립연도", value: "2022년 9월" },
  { icon: MapPin, label: "위치", value: "서울 구로구 디지털로 26길 43 L-1211" },
  { icon: Building2, label: "기업 유형", value: "비상장 중소기업" },
  { icon: Award, label: "핵심 기술", value: "Data-Adaptive OCR" },
];

const differentiators = [
  {
    icon: Target,
    title: "고문헌 특화 AI",
    desc: "일반 OCR이 포기하는 한자·옛한글·필사체를 98.7% 정확도로 인식. 딥러닝이 자료 특성에 스스로 적응합니다.",
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-100",
  },
  {
    icon: RefreshCw,
    title: "엔드투엔드 서비스",
    desc: "스캔 입력 → AI OCR → 전문가 검수 → 납품까지 단일 플랫폼에서 완결. 별도 솔루션 없이 바로 활용 가능합니다.",
    color: "text-sky-600",
    bg: "bg-sky-50 border-sky-100",
  },
  {
    icon: BarChart3,
    title: "자기학습 엔진",
    desc: "처리할수록 더 정확해지는 Data-Adaptive OCR. 기관별 자료 특성에 맞춰 지속적으로 성능이 향상됩니다.",
    color: "text-indigo-600",
    bg: "bg-indigo-50 border-indigo-100",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 bg-white py-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* 텍스트 영역 */}
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200 font-semibold text-xs mb-3">
              About Us
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
              고문헌부터 현대 문서까지,
              <br />
              인식에서 활용까지
              <br />
              하나의 플랫폼에서
            </h2>

            <div className="space-y-2.5 text-slate-600 leading-relaxed text-sm">
              <p>
                탱고인사이트(Tangoinsight)는 2022년 설립된 AI 기반 문서 데이터화 및
                지식 프로세스 아웃소싱(KPO) 전문 기업입니다.
              </p>
              <p>
                딥러닝 기반의{" "}
                <strong className="text-slate-900">Data-Adaptive OCR</strong>을 핵심 기술로,
                한자·옛한글·세로쓰기 등 기존 OCR이 실패하는 고문헌에서도 98.7%의
                인식 정확도를 달성합니다. 국립도서관, 한국학연구원, 대학 역사학과 등
                50개 이상의 기관이 도입하여 5백만 페이지 이상을 처리했습니다.
              </p>
            </div>

            {/* 미션 박스 */}
            <div className="mt-4 p-4 rounded-xl bg-blue-50 border border-blue-100">
              <p className="text-blue-900 font-medium text-xs leading-relaxed">
                <strong>미션:</strong> "모든 역사적 기록이 디지털 지식 자산으로" —
                아날로그에 잠들어 있는 정보를 누구나 검색하고 활용할 수 있도록 합니다.
              </p>
            </div>
          </div>

          {/* 정보 카드 */}
          <div className="grid grid-cols-2 gap-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-700/10 flex items-center justify-center mb-2">
                  <item.icon size={16} className="text-blue-700" />
                </div>
                <div className="text-xs text-slate-500 mb-0.5">{item.label}</div>
                <div className="font-semibold text-slate-900 text-sm">{item.value}</div>
              </div>
            ))}

            {/* 검증된 실적 카드 */}
            <div
              className="col-span-2 p-5 rounded-2xl bg-gradient-to-r from-blue-700 to-sky-600 text-white shadow-lg"
              style={{ boxShadow: "0 6px 20px rgba(29,78,216,0.3)" }}
            >
              <div className="text-xs font-medium text-blue-100 mb-3">검증된 실적</div>
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "5M+", label: "처리 페이지" },
                  { value: "50+", label: "도입 기관" },
                  { value: "98.7%", label: "인식 정확도" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-xl font-bold text-white">{s.value}</div>
                    <div className="text-blue-100 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 차별점 3개 카드 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
          {differentiators.map((d) => (
            <div
              key={d.title}
              className={`flex items-start gap-3 p-4 rounded-2xl border ${d.bg} transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md`}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-white shadow-sm">
                <d.icon size={16} className={d.color} />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm mb-0.5">{d.title}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
