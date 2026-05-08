"use client";

import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden bg-[#1a0f06]">
      {/* 따뜻한 앰버 + AI 인디고 배경 */}
      <div className="absolute -top-32 -left-32 w-[450px] h-[450px] rounded-full bg-amber-700/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] rounded-full bg-amber-800/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-indigo-900/20 blur-3xl pointer-events-none" />
      {/* 책 페이지 라인 */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(201,168,76,0.8) 31px, rgba(201,168,76,0.8) 32px)`,
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/25 text-amber-300 text-sm font-semibold mb-6">
          무료 테스트 제공
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#fde8c0] mb-4 leading-tight font-serif-kr">
          지금 바로 시작하세요
        </h2>
        <p className="text-[#b89870] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          고문헌 인식부터 데이터 추출까지, 탱고인사이트의 모든 기능을 무료로 체험해보세요.
          샘플 자료를 보내주시면 실제 인식 결과를 바로 확인할 수 있습니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#fde8c0] text-[#1c0f06] font-bold text-base hover:bg-amber-100 transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            무료 샘플 테스트 신청
            <ArrowRight size={18} />
          </button>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-amber-600/40 text-[#fde8c0] font-semibold text-base hover:bg-amber-900/20 transition-all duration-200"
          >
            도입 문의하기
          </button>
        </div>
      </div>
    </section>
  );
}
