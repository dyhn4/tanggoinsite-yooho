"use client";

import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
          지금 바로 시작하세요
        </h2>
        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
          고문헌 인식부터 데이터 추출까지, 탱고인사이트의 모든 기능을 무료로 체험해보세요.
          샘플 자료를 보내주시면 실제 인식 결과를 바로 확인할 수 있습니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-800 font-bold text-base hover:bg-blue-50 transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            무료 샘플 테스트 신청
            <ArrowRight size={18} />
          </button>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/40 text-white font-semibold text-base hover:bg-white/10 transition-all duration-200"
          >
            도입 문의하기
          </button>
        </div>
      </div>
    </section>
  );
}
