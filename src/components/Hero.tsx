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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0718]">
      {/* 배경 — 퍼플 AI 글로우 + 앰버 도서관 글로우 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-amber-700/10 rounded-full blur-3xl" />
        {/* AI 도트 그리드 */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(167,139,250,0.6) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* 책 페이지 수평선 */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(167,139,250,0.8) 39px, rgba(167,139,250,0.8) 40px)`,
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 pt-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 왼쪽 텍스트 */}
          <div>
            {/* 배지 — tango.ai.kr .hero-badge 스타일 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/15 border border-violet-400/25 text-violet-300 text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              AI-Powered OCR Solution
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              고문헌 특화 AI,
              <br />
              <span className="text-gradient">훈민정음까지</span>
              <br />
              가능한 OCR
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed mb-10">
              한자부터 현대 문서까지 정확하게 인식하고, 편집하고, 데이터를
              추출하세요. 탱고인사이트와 함께 역사적 자료를 디지털화하세요.
            </p>

            {/* 버튼 — tango.ai.kr pill 스타일 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 hover:opacity-90 text-white font-semibold transition-all duration-200 shadow-lg shadow-violet-900/50 hover:-translate-y-0.5"
              >
                도입 문의하기
                <ArrowRight size={18} />
              </button>
              <button
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold transition-all duration-200"
              >
                서비스 자세히 보기
              </button>
            </div>
          </div>

          {/* 오른쪽 — 고문헌 OCR 시각화 카드 */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-violet-500/20 rounded-3xl p-6 shadow-2xl shadow-violet-950/50">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-violet-400/80" />
                  <span className="text-slate-500 text-xs ml-2 font-mono">AI OCR 분석 중...</span>
                </div>

                {/* 스캔 시각화 라인 */}
                <div className="space-y-3 mb-5">
                  <div className="flex gap-2 items-center">
                    <div className="w-16 h-3 bg-amber-400/50 rounded-full" />
                    <div className="w-32 h-3 bg-violet-400/30 rounded-full" />
                    <div className="w-20 h-3 bg-slate-600/40 rounded-full" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-24 h-3 bg-violet-400/30 rounded-full" />
                    <div className="w-28 h-3 bg-slate-600/40 rounded-full" />
                    <div className="w-16 h-3 bg-amber-400/35 rounded-full" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-20 h-3 bg-slate-600/40 rounded-full" />
                    <div className="w-36 h-3 bg-violet-400/30 rounded-full" />
                    <div className="w-12 h-3 bg-slate-600/40 rounded-full" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-28 h-3 bg-indigo-400/40 rounded-full" />
                    <div className="w-20 h-3 bg-violet-400/30 rounded-full" />
                    <div className="w-24 h-3 bg-amber-400/25 rounded-full" />
                  </div>
                </div>

                {/* 인식 완료 배지 */}
                <div className="bg-violet-500/15 border border-violet-400/25 rounded-2xl p-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500/40 to-violet-600/40 flex items-center justify-center text-violet-300 text-sm">✓</div>
                  <div>
                    <div className="text-violet-300 text-xs font-semibold">인식 완료</div>
                    <div className="text-slate-500 text-xs font-mono">정확도 98.7% · 처리 시간 1.8초</div>
                  </div>
                </div>
              </div>

              {/* 부유 배지 */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-violet-950/50">
                한자 · 훈민정음 지원
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-[#2d3561] text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                50+ 기관 도입
              </div>
            </div>
          </div>
        </div>

        {/* 하단 통계 — 딥 퍼플 글라스 카드 */}
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
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-violet-800/20 backdrop-blur-sm"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/30 to-violet-600/30 flex items-center justify-center">
                <stat.icon size={22} className="text-violet-300" />
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
