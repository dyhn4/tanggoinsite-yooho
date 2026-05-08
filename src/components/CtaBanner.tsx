"use client";

import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    /* tango.ai.kr .cta-section 스타일 — 퍼플 그라디언트 배경 */
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700">
      {/* 원형 장식 (tango.ai.kr .cta-section::before/after) */}
      <div className="absolute -top-48 -left-48 w-[500px] h-[500px] rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-amber-400/10 pointer-events-none blur-2xl" />

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
          지금 바로 시작하세요
        </h2>
        <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          고문헌 인식부터 데이터 추출까지, 탱고인사이트의 모든 기능을 무료로 체험해보세요.
          샘플 자료를 보내주시면 실제 인식 결과를 바로 확인할 수 있습니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* tango.ai.kr .btn-white 스타일 */}
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-violet-700 font-bold text-base hover:bg-indigo-50 transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            무료 샘플 테스트 신청
            <ArrowRight size={18} />
          </button>
          {/* tango.ai.kr .btn-outline 스타일 */}
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/60 text-white font-semibold text-base hover:bg-white/15 transition-all duration-200"
          >
            도입 문의하기
          </button>
        </div>
      </div>
    </section>
  );
}
