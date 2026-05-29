"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingChat() {
  const { lang } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* 말풍선 툴팁 */}
      <div className="bg-white text-slate-700 text-xs font-medium px-3 py-1.5 rounded-full shadow-lg border border-slate-100 whitespace-nowrap animate-bounce-slow">
        {lang === "ko" ? "도입 문의하기" : "Contact Us"}
      </div>

      {/* 채팅 버튼 → /contact 연결 */}
      <Link
        href="/contact"
        aria-label="도입 문의하기"
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform duration-200 hover:scale-110 active:scale-95"
        style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%)" }}
      >
        {/* 펄스 링 */}
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-20"
          style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%)" }}
        />
        <MessageCircle size={26} className="text-white relative z-10" fill="white" strokeWidth={0} />
      </Link>
    </div>
  );
}
