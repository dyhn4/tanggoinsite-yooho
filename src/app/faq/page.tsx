"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { Noto_Sans_KR } from "next/font/google";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-4 py-5 text-left group"
      >
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-black mt-0.5"
          style={{ background: "linear-gradient(135deg, #1d4ed8, #0ea5e9)", fontFamily: "'Noto Sans KR', sans-serif" }}
        >
          Q
        </span>
        <span className="flex-1 text-slate-800 font-semibold text-sm leading-relaxed group-hover:text-blue-700 transition-colors">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-slate-400 mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="flex gap-4 pb-5">
          <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-blue-700 text-xs font-black bg-blue-50 border border-blue-200 mt-0.5"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
            A
          </span>
          <p className="flex-1 text-slate-500 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  const { lang } = useLanguage();
  const t = translations[lang].faqPage;

  const [activeCatIdx, setActiveCatIdx] = useState(0);

  const filtered =
    activeCatIdx === 0
      ? t.faqs
      : t.faqs.filter((f) => f.category === t.categories[activeCatIdx]);

  return (
    <div className={`min-h-screen ${notoSansKR.className}`} style={{ backgroundColor: "#f7f6f2" }}>

      {/* 상단 헤더 바 */}
      <div
        className="sticky top-0 z-30 border-b border-slate-200/80"
        style={{ background: "rgba(247,246,242,0.92)", backdropFilter: "blur(12px)" }}
      >
        <div className="max-w-3xl mx-auto px-6 sm:px-10 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-700 transition-colors text-sm font-medium group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
            {t.backHome}
          </Link>
          <span
            className="text-base font-black tracking-tight"
            style={{ fontFamily: "'Sora', 'Pretendard', sans-serif" }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">Tango</span><span className="text-slate-900">Insight</span>
          </span>
        </div>
      </div>

      {/* 히어로 배너 */}
      <div
        className="px-6 sm:px-10 py-14"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #0f172a 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-blue-400/60" />
            <span className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase">Support</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3" style={{ letterSpacing: "-0.01em" }}>{t.heroTitle}</h1>
          <p className="text-slate-400 text-sm font-normal">{t.heroSubtitle}</p>
        </div>
      </div>

      {/* 카테고리 탭 */}
      <div className="sticky top-14 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {t.categories.map((cat, idx) => (
              <button
                key={cat}
                onClick={() => setActiveCatIdx(idx)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  activeCatIdx === idx
                    ? "text-white shadow-md"
                    : "text-slate-500 hover:text-slate-700 bg-slate-100 hover:bg-slate-200"
                }`}
                style={
                  activeCatIdx === idx
                    ? { background: "linear-gradient(135deg, #1d4ed8, #0ea5e9)" }
                    : {}
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ 목록 */}
      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-8">
        <div className="bg-white rounded-2xl border border-slate-200 px-6 divide-y-0"
          style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
        >
          {filtered.length === 0 ? (
            <p className="py-12 text-center text-slate-400 text-sm">{t.noResults}</p>
          ) : (
            filtered.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))
          )}
        </div>

        {/* 하단 문의 유도 */}
        <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-slate-700 font-semibold text-sm">{t.contactPrompt}</p>
            <p className="text-slate-500 text-xs mt-0.5">{t.contactDesc}</p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #1d4ed8, #0ea5e9)" }}
          >
            {t.contactBtn}
          </Link>
        </div>
      </div>

    </div>
  );
}
