"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* 상단 헤더 바 */}
      <div
        className="sticky top-0 z-30 border-b border-slate-200/80"
        style={{ background: "rgba(247,246,242,0.92)", backdropFilter: "blur(12px)" }}
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-10 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-700 transition-colors text-sm font-medium group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
            홈으로
          </Link>
          <span
            className="text-base font-black tracking-tight"
            style={{ fontFamily: "'Sora', 'Pretendard', sans-serif" }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">Tango</span>
            {" "}
            <span className="text-slate-900">Insight</span>
          </span>
        </div>
      </div>

      {/* 히어로 배너 */}
      <div
        className="px-6 sm:px-10 py-14"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #0f172a 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-blue-400/60" />
            <span className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase">Contact</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">문의하기</h1>
          <p className="text-slate-400 text-sm">전문 컨설턴트가 맞춤 솔루션을 제안해 드립니다.</p>
        </div>
      </div>

      {/* 문의 폼 */}
      <Contact />
    </div>
  );
}
