"use client";

import { ArrowRight, FileText, Cpu, TrendingUp } from "lucide-react";

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
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-800/10 rounded-full blur-3xl" />
        {/* 그리드 패턴 */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(148,163,184,0.4) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 pt-32">
        <div className="max-w-3xl">
          {/* 배지 */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            AI 기반 문서 지능화 전문 기업
          </div>

          {/* 헤드라인 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            종이 문서를
            <br />
            <span className="text-gradient">디지털 자산</span>으로
            <br />
            변환합니다
          </h1>

          {/* 서브 텍스트 */}
          <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl">
            딥러닝 기반의 Data-Adaptive OCR 기술로 어떤 형태의 문서도 정확하게
            인식합니다. 문서 디지털화부터 데이터 가공, KPO 서비스까지 — 탱고인사이트가
            기업의 업무 효율을 혁신합니다.
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-900/40 hover:shadow-blue-800/50 hover:-translate-y-0.5"
            >
              무료 상담 문의
              <ArrowRight size={18} />
            </button>
            <button
              onClick={scrollToServices}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold transition-all duration-200"
            >
              서비스 알아보기
            </button>
          </div>
        </div>

        {/* 주요 지표 카드 */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: FileText,
              label: "처리 문서 유형",
              value: "50+",
              desc: "다양한 문서 포맷 지원",
            },
            {
              icon: Cpu,
              label: "OCR 인식 정확도",
              value: "99%+",
              desc: "딥러닝 기반 고정밀 인식",
            },
            {
              icon: TrendingUp,
              label: "업무 처리 속도",
              value: "10x",
              desc: "기존 수동 작업 대비",
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
                <div className="text-xs text-slate-400">{stat.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
