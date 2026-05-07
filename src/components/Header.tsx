"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "회사 소개", href: "#about" },
  { label: "서비스", href: "#services" },
  { label: "기술력", href: "#technology" },
  { label: "문의하기", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* 로고 */}
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-700 to-sky-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span
              className={`font-bold text-lg tracking-tight transition-colors ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              탱고인사이트
            </span>
          </a>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-colors hover:text-sky-400 ${
                  scrolled ? "text-slate-700" : "text-white/90"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium transition-colors"
            >
              무료 상담
            </button>
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-slate-700 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="메뉴"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 드로어 */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-left px-3 py-3 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="mt-2 px-4 py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-medium transition-colors text-center"
            >
              무료 상담 문의
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
