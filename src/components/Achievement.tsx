"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  { year: 2025, items: [
    "고문헌(근대자료) 원문 텍스트 데이터베이스 구축사업",
    "디지털화 원문(현대자료) AI 텍스트 데이터 구축사업",
    "시각장애인용 대체자료 기본장서 제작사업",
    "문화예술자료 디지털화 구축사업",
    "국립도서관 원문DB 구축사업(DB III)",
    "단행자료 디지털화 구축사업",
  ]},
  { year: 2024, items: [
    "고문헌(근대자료) 원문 텍스트 데이터베이스 구축사업",
    "기본장서 텍스트 데이터베이스 구축 연구용역",
    "국립도서관 원문DB 구축사업(DB II)",
    "문화예술자료 디지털화 구축사업",
    "단행자료 디지털화 구축사업",
  ]},
  { year: 2023, items: [
    "고문헌(근대자료) 원문 텍스트 데이터베이스 구축사업",
    "고문헌문화예술 자료 디지털화 구축사업",
    "인공지능 기반 고문헌 필사본 텍스트구축 연구용역 사업",
    "연속간행물 자료 디지털화 구축사업",
    "현대간행물 자료 디지털화 구축사업",
  ]},
  { year: 2022, items: [
    "국립도서관 원문DB 구축사업(DB I, II)",
    "연속간행물 자료 디지털화 구축사업",
    "현대간행물 자료 디지털화 구축사업",
  ]},
  { year: 2021, items: [
    "국립도서관 원문DB 구축사업(DB I, II, III)",
    "현대간행물 자료 디지털화 구축사업",
  ]},
  { year: 2020, items: [
    "국립도서관 원문DB 구축사업(DB I, II, III)",
  ]},
];

const clients = [
  "국회도서관",
  "국립중앙도서관",
  "국립장애인도서관",
  "행정안전부",
];

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function Achievement() {
  const [activeYear, setActiveYear] = useState(2025);
  const activeProject = projects.find((p) => p.year === activeYear)!;

  return (
    <section
      id="achievement"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 bg-white py-16"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* 헤더 */}
        <div className="mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200 font-semibold text-sm mb-4">
            실적
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2 leading-tight">
            MooN AI OCR 기반<br className="sm:hidden" /> 디지털 원문 구축 수행 실적
          </h2>
          <p className="text-slate-500 text-base mt-3">
            다양한 기록물 형태에 대한 구축 경험을 기반으로<br />
            자료 특성에 최적화된 AI OCR 구축 수행
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 왼쪽 */}
          <div className="flex flex-col gap-6">
            {/* 숫자 카운트 */}
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 text-white">
              <div className="mb-6">
                <div className="text-slate-400 text-sm mb-1">누적 처리 건수</div>
                <div className="text-4xl sm:text-5xl font-black text-white leading-none">
                  약 <CountUp target={1032912} />
                  <span className="text-2xl font-bold text-sky-400 ml-1">책/건</span>
                </div>
              </div>
              <div className="border-t border-white/10 pt-6">
                <div className="text-slate-400 text-sm mb-1">누적 처리 면수</div>
                <div className="text-4xl sm:text-5xl font-black text-white leading-none">
                  약 <CountUp target={168050125} />
                  <span className="text-2xl font-bold text-sky-400 ml-1">면</span>
                </div>
              </div>
              <p className="text-slate-500 text-xs mt-6">
                ※ 발행연도 1934~2025년까지 연도별 다양한 자료 구축
              </p>
            </div>

            {/* 주요 고객사 */}
            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
              <div className="text-slate-500 text-sm font-semibold mb-4 tracking-wide uppercase">
                주요 고객사
              </div>
              <div className="grid grid-cols-2 gap-3">
                {clients.map((client) => (
                  <div
                    key={client}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-700/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-600 to-sky-400" />
                    </div>
                    <span className="text-slate-700 text-sm font-medium leading-tight">
                      {client}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 오른쪽: 연도별 사업 목록 */}
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6 flex flex-col">
            {/* 연도 탭 */}
            <div className="flex gap-2 flex-wrap mb-5">
              {projects.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setActiveYear(p.year)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeYear === p.year
                      ? "bg-blue-700 text-white shadow-lg shadow-blue-500/20"
                      : "bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-700"
                  }`}
                >
                  {p.year}
                </button>
              ))}
            </div>

            {/* 사업명 목록 */}
            <div className="flex flex-col gap-2 flex-1">
              {activeProject.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-700/10 flex items-center justify-center mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  </div>
                  <span className="text-slate-700 text-sm leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 text-center text-slate-400 text-xs">
              연도 탭을 클릭하면 해당 연도 사업 목록을 확인할 수 있습니다
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
