"use client";

import { ArrowRight, BookOpen, Cpu, Users } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* 배경 장식 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-800/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(148,163,184,0.4) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 pt-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 왼쪽 텍스트 */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              AI-Powered OCR Solution
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              고문헌 특화 AI,
              <br />
              <span className="text-gradient">훈민정음까지</span>
              <br />
              가능한 OCR
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-10">
              한자부터 현대 문서까지 정확하게 인식하고, 편집하고, 데이터를
              추출하세요. 탱고인사이트와 함께 역사적 자료를 디지털화하세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-900/40 hover:-translate-y-0.5"
              >
                도입 문의하기
                <ArrowRight size={18} />
              </button>
              <button
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold transition-all duration-200"
              >
                서비스 자세히 보기
              </button>
            </div>
          </div>

          {/* 오른쪽 비주얼 카드 */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* 메인 카드 */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-slate-400 text-xs ml-2">AI OCR 분석 중...</span>
                </div>
                {/* 가짜 문서 라인 */}
                <div className="space-y-3 mb-5">
                  <div className="flex gap-2 items-center">
                    <div className="w-16 h-3 bg-amber-400/60 rounded" />
                    <div className="w-32 h-3 bg-white/30 rounded" />
                    <div className="w-20 h-3 bg-white/20 rounded" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-24 h-3 bg-white/30 rounded" />
                    <div className="w-28 h-3 bg-white/20 rounded" />
                    <div className="w-16 h-3 bg-amber-400/40 rounded" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-20 h-3 bg-white/20 rounded" />
                    <div className="w-36 h-3 bg-white/30 rounded" />
                    <div className="w-12 h-3 bg-white/20 rounded" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-28 h-3 bg-sky-400/50 rounded" />
                    <div className="w-20 h-3 bg-white/30 rounded" />
                    <div className="w-24 h-3 bg-white/20 rounded" />
                  </div>
                </div>
                <div className="bg-green-500/20 border border-green-400/30 rounded-xl p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/30 flex items-center justify-center text-green-300 text-sm">✓</div>
                  <div>
                    <div className="text-green-300 text-xs font-medium">인식 완료</div>
                    <div className="text-white/60 text-xs">정확도 98.7% · 처리 시간 1.8초</div>
                  </div>
                </div>
              </div>

              {/* 부유 배지 */}
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                한자 · 훈민정음 지원
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                50+ 기관 도입
              </div>
            </div>
          </div>
        </div>

        {/* 하단 통계 */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: BookOpen,
              value: "5M+",
              label: "누적 처리 페이지",
              desc: "고문헌부터 현대 문서까지",
            },
            {
              icon: Users,
              value: "50+",
              label: "도입 기관",
              desc: "국립도서관·대학·연구원",
            },
            {
              icon: Cpu,
              value: "98.7%",
              label: "고문헌 인식 정확도",
              desc: "일반 OCR 대비 3배 향상",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <stat.icon size={22} className="text-sky-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-slate-300 font-medium">{stat.label}</div>
                <div className="text-xs text-slate-500">{stat.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
