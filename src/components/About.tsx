import { Building2, Calendar, MapPin, Award } from "lucide-react";

const highlights = [
  {
    icon: Calendar,
    label: "설립연도",
    value: "2022년 9월",
  },
  {
    icon: MapPin,
    label: "위치",
    value: "서울 성동구 (왕십리)",
  },
  {
    icon: Building2,
    label: "기업 유형",
    value: "비상장 중소기업",
  },
  {
    icon: Award,
    label: "핵심 기술",
    value: "Data-Adaptive OCR",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 텍스트 영역 */}
          <div>
            <span className="inline-block text-blue-700 font-semibold text-sm tracking-widest uppercase mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              AI로 문서의 가치를
              <br />
              재정의합니다
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                탱고인사이트(Tango Insight)는 2022년 설립된 AI 기반 문서 데이터화 및
                지식 프로세스 아웃소싱(KPO) 전문 기업입니다.
              </p>
              <p>
                딥러닝 기반의 Data-Adaptive OCR 기술을 핵심으로, 종이 문서의 디지털화와
                데이터 가공 업무를 대행합니다. 단순한 텍스트 인식을 넘어 문서 내 정보를
                구조화하고 활용 가능한 데이터로 변환합니다.
              </p>
              <p>
                기업이 핵심 역량에 집중할 수 있도록, 복잡한 문서 처리 업무를 탱고인사이트가
                전문적으로 대행합니다.
              </p>
            </div>

            {/* 미션 박스 */}
            <div className="mt-8 p-5 rounded-2xl bg-blue-50 border border-blue-100">
              <p className="text-blue-800 font-medium text-sm leading-relaxed">
                <span className="font-bold">미션:</span> "모든 기업의 문서가 데이터 자산이
                되는 세상" — 아날로그 정보를 디지털 지식으로, 복잡한 업무를 지능적인
                워크플로우로 전환합니다.
              </p>
            </div>
          </div>

          {/* 정보 카드 그리드 */}
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

            {/* 강조 카드 */}
            <div className="col-span-2 p-5 rounded-2xl bg-gradient-to-r from-blue-700 to-sky-600 text-white">
              <div className="text-sm font-medium text-blue-100 mb-1">핵심 역량</div>
              <div className="font-bold text-lg mb-2">
                딥러닝 × 워크플로우 × KPO
              </div>
              <div className="text-blue-100 text-sm">
                기술력과 전문 인력이 결합된 하이브리드 솔루션으로 최고의 정확도와 효율을
                제공합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
