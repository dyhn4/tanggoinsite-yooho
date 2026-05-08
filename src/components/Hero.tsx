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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1a0f06]">
      {/* 배경 — 따뜻한 서점 야간 조명 + AI 인디고 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 앰버 골드 글로우 — 서점 조명 */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-amber-700/25 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-800/20 rounded-full blur-3xl" />
        {/* 인디고 글로우 — AI */}
        <div className="absolute top-1/2 right-1/3 w-[350px] h-[350px] bg-indigo-800/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-0 w-[300px] h-[300px] bg-indigo-900/15 rounded-full blur-2xl" />
        {/* 책 페이지 수평선 패턴 */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(201,168,76,0.8) 31px, rgba(201,168,76,0.8) 32px)`,
          }}
        />
        {/* 도트 그리드 */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201,168,76,0.7) 1px, transparent 0)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 pt-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 왼쪽 텍스트 */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/15 border border-amber-400/25 text-amber-300 text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              AI-Powered Document Intelligence
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-[#fde8c0] leading-tight mb-6 font-serif-kr">
              고문헌부터 현대 문서까지,
              <br />
              <span className="text-gradient-warm">훈민정음까지</span>
              <br />
              가능한 AI OCR
            </h1>

            <p className="text-lg text-[#b89870] leading-relaxed mb-10">
              한자부터 현대 문서까지 정확하게 인식하고, 편집하고, 데이터를
              추출하세요. 탱고인사이트와 함께 역사적 자료를 디지털 지식 자산으로.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#3730a3] to-[#4338ca] hover:opacity-90 text-white font-semibold transition-all duration-200 shadow-lg shadow-indigo-950/60 hover:-translate-y-0.5"
              >
                도입 문의하기
                <ArrowRight size={18} />
              </button>
              <button
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-amber-900/20 hover:bg-amber-900/30 border border-amber-600/30 text-[#fde8c0] font-semibold transition-all duration-200"
              >
                서비스 자세히 보기
              </button>
            </div>
          </div>

          {/* 오른쪽 — OCR 시각화 카드 */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-amber-950/30 backdrop-blur-sm border border-amber-700/20 rounded-3xl p-6 shadow-2xl shadow-amber-950/40">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-3 h-3 rounded-full bg-amber-600/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-indigo-400/80" />
                  <span className="text-[#7a5e42] text-xs ml-2 font-mono">고문헌 AI 분석 중...</span>
                </div>

                <div className="space-y-3 mb-5">
                  <div className="flex gap-2 items-center">
                    <div className="w-16 h-3 bg-amber-500/45 rounded-sm" />
                    <div className="w-32 h-3 bg-amber-700/30 rounded-sm" />
                    <div className="w-20 h-3 bg-amber-900/30 rounded-sm" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-24 h-3 bg-amber-700/30 rounded-sm" />
                    <div className="w-28 h-3 bg-amber-900/25 rounded-sm" />
                    <div className="w-16 h-3 bg-amber-500/35 rounded-sm" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-20 h-3 bg-amber-900/25 rounded-sm" />
                    <div className="w-36 h-3 bg-amber-700/30 rounded-sm" />
                    <div className="w-12 h-3 bg-amber-900/25 rounded-sm" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-28 h-3 bg-indigo-500/35 rounded-sm" />
                    <div className="w-20 h-3 bg-amber-700/30 rounded-sm" />
                    <div className="w-24 h-3 bg-amber-500/25 rounded-sm" />
                  </div>
                </div>

                <div className="bg-amber-800/20 border border-amber-600/20 rounded-2xl p-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-600/40 to-amber-400/30 flex items-center justify-center text-amber-300 text-sm">✓</div>
                  <div>
                    <div className="text-amber-300 text-xs font-semibold">인식 완료</div>
                    <div className="text-[#7a5e42] text-xs font-mono">정확도 98.7% · 처리 시간 1.8초</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#3730a3] to-[#4338ca] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-indigo-950/50">
                한자 · 훈민정음 지원
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#fde8c0] text-[#1c0f06] text-xs font-bold px-4 py-2 rounded-full shadow-lg font-serif-kr">
                50+ 기관 도입
              </div>
            </div>
          </div>
        </div>

        {/* 하단 통계 */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: BookOpen, value: "5M+", label: "누적 처리 페이지", desc: "고문헌부터 현대 문서까지" },
            { icon: Users, value: "50+", label: "도입 기관", desc: "국립도서관·대학·연구원" },
            { icon: Cpu, value: "98.7%", label: "고문헌 인식 정확도", desc: "일반 OCR 대비 3배 향상" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 p-4 rounded-2xl bg-amber-950/25 border border-amber-700/20 backdrop-blur-sm"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-700/35 to-amber-500/25 flex items-center justify-center">
                <stat.icon size={22} className="text-amber-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#fde8c0] font-serif-kr">{stat.value}</div>
                <div className="text-sm text-[#c9a070] font-medium">{stat.label}</div>
                <div className="text-xs text-[#7a5e42]">{stat.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
