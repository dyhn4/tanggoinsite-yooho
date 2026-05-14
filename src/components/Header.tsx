"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  {
    label: "회사소개",
    items: [
      { label: "회사개요", href: "#about" },
      { label: "연혁", href: "#history" },
    ],
  },
  {
    label: "서비스",
    items: [
      { label: "서비스 안내", href: "#services" },
      { label: "서비스 신청", href: "#apply" },
    ],
  },
  {
    label: "솔루션",
    items: [
      { label: "Tango PDF", href: "#pdf" },
      { label: "Tango Batch", href: "#batch" },
      { label: "Tango Editor", href: "#editor" },
      { label: "MooN AI OCR", href: "#moon" },
    ],
  },
  {
    label: "문의하기",
    items: [{ label: "문의하기", href: "#contact" }],
  },
];

// 다크 배경 섹션 id 목록 (흰 글자를 써야 하는 섹션)
const DARK_SECTIONS = ["hero", "process", "contact"];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(true); // 처음엔 Hero(다크)

  useEffect(() => {
    // page.tsx의 main 스크롤 컨테이너 기준으로 감지
    const main = document.querySelector("main");
    if (!main) return;

    const handleScroll = () => {
      const scrollTop = main.scrollTop;
      const windowH = main.clientHeight;
      const sectionIndex = Math.round(scrollTop / windowH);

      // 섹션 순서: 0=Hero, 1=About, 2=Services, 3=Technology, 4=Process, 5=Contact, 6=Footer
      const darkIndexes = [0, 5]; // Hero, Process, Contact
      setIsDark(darkIndexes.includes(sectionIndex));
    };

    main.addEventListener("scroll", handleScroll);
    return () => main.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setOpenMobileMenu(null);
    const main = document.querySelector("main");
    const target = document.querySelector(href);
    if (main && target) {
      const windowH = main.clientHeight;
      const sections = Array.from(main.querySelectorAll("section"));
      const targetSection = target.closest("section");
      const idx = sections.indexOf(targetSection as HTMLElement);
      if (idx !== -1) {
        main.scrollTo({ top: idx * windowH, behavior: "smooth" });
      }
    }
  };

  const textColor = isDark
    ? "text-white/90 hover:text-sky-300"
    : "text-slate-700 hover:text-blue-700";

  const logoColor = isDark ? "text-white" : "text-slate-900";

  const bgStyle = isDark
    ? "bg-transparent"
    : "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100";

  const mobileIconColor = isDark
    ? "text-white hover:bg-white/10"
    : "text-slate-700 hover:bg-slate-100";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgStyle}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* 로고 */}
          <a
            href="#"
            onClick={() => {
              const main = document.querySelector("main");
              main?.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center group"
          >
            <span
              className={`text-xl font-black tracking-tight transition-colors select-none ${logoColor}`}
              style={{
                fontFamily: "'Sora', 'Pretendard', sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              <span className={`bg-gradient-to-r ${isDark ? "from-blue-400 to-sky-300" : "from-blue-600 to-sky-500"} bg-clip-text text-transparent`}>
                Tango
              </span>
              {" "}
              <span className={isDark ? "text-white" : "text-slate-900"}>
                Insight
              </span>
            </span>
          </a>

          {/* 데스크탑 네비 */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${textColor}`}
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className="transition-transform duration-200 group-hover:rotate-180"
                  />
                </button>

                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="w-56 rounded-2xl border border-slate-100 bg-white/95 backdrop-blur-xl shadow-xl shadow-blue-500/10 p-2">
                    {item.items.map((subItem) => (
                      <button
                        key={subItem.label}
                        onClick={() => handleNavClick(subItem.href)}
                        className="block w-full text-left px-4 py-3 rounded-xl text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={() => handleNavClick("#contact")}
              className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium transition-colors"
            >
              무료 상담
            </button>
          </nav>

          {/* 모바일 햄버거 */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${mobileIconColor}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="메뉴"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setOpenMobileMenu(
                      openMobileMenu === item.label ? null : item.label
                    )
                  }
                  className="flex items-center justify-between w-full px-3 py-3 text-slate-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors"
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      openMobileMenu === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openMobileMenu === item.label && (
                  <div className="ml-3 mt-1 border-l border-blue-100 pl-3">
                    {item.items.map((subItem) => (
                      <button
                        key={subItem.label}
                        onClick={() => handleNavClick(subItem.href)}
                        className="block w-full text-left px-3 py-2.5 text-sm text-slate-600 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
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
