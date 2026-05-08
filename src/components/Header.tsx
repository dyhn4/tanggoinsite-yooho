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
          ? "bg-[#fffdf5]/96 backdrop-blur-xl shadow-sm border-b border-[#dfd0b4]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#3730a3] to-[#4338ca] flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span
              className={`font-bold text-lg tracking-tight transition-colors font-serif-kr ${
                scrolled ? "text-[#1c0f06]" : "text-[#fde8c0]"
              }`}
            >
              탱고인사이트
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-colors hover:text-[#3730a3] ${
                  scrolled ? "text-[#3d2410]" : "text-[#f5e6c8]/90"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#3730a3] to-[#4338ca] hover:opacity-90 text-white text-sm font-semibold transition-all duration-200 shadow-md hover:-translate-y-0.5"
            >
              무료 상담
            </button>
          </nav>

          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-[#3d2410] hover:bg-amber-50"
                : "text-[#fde8c0] hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="메뉴"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#fffdf5] border-t border-[#dfd0b4] shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-left px-3 py-3 text-[#3d2410] font-medium rounded-xl hover:bg-amber-50 hover:text-[#3730a3] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="mt-2 px-4 py-3 rounded-full bg-gradient-to-r from-[#3730a3] to-[#4338ca] text-white font-semibold transition-all text-center"
            >
              무료 상담 문의
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
