"use client";

import { Building2, Calendar, MapPin, Award, Target, RefreshCw, BarChart3 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const highlightIcons = [Calendar, MapPin, Building2, Award];
const diffStyles = [
  { icon: Target,    color: "text-blue-600",   bg: "bg-blue-50 border-blue-100" },
  { icon: RefreshCw, color: "text-sky-600",    bg: "bg-sky-50 border-sky-100" },
  { icon: BarChart3, color: "text-indigo-600", bg: "bg-indigo-50 border-indigo-100" },
];

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  const highlights = t.highlights.map((h, i) => ({ ...h, icon: highlightIcons[i] }));
  const differentiators = t.diff.map((d, i) => ({ ...d, ...diffStyles[i] }));

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 bg-white py-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* 텍스트 영역 */}
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200 font-semibold text-xs mb-3">
              {t.badge}
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
              {t.title[0]}
              <br />
              {t.title[1]}
            </h2>

            <div className="space-y-2.5 text-slate-600 leading-relaxed text-sm">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
            </div>

            {/* 미션 박스 */}
            <div className="mt-4 p-4 rounded-xl bg-blue-50 border border-blue-100">
              <p className="text-blue-900 font-medium text-xs leading-relaxed">
                <strong>{t.missionPrefix}</strong> {t.missionBody}
              </p>
            </div>
          </div>

          {/* 정보 카드 */}
          <div className="grid grid-cols-2 gap-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-700/10 flex items-center justify-center mb-2">
                  <item.icon size={16} className="text-blue-700" />
                </div>
                <div className="text-xs text-slate-500 mb-0.5">{item.label}</div>
                <div className="font-semibold text-slate-900 text-sm">{item.value}</div>
              </div>
            ))}

            {/* 검증된 실적 카드 */}
            <div
              className="col-span-2 p-5 rounded-2xl bg-gradient-to-r from-blue-700 to-sky-600 text-white shadow-lg"
              style={{ boxShadow: "0 6px 20px rgba(29,78,216,0.3)" }}
            >
              <div className="text-xs font-medium text-blue-100 mb-3">{t.statsLabel}</div>
              <div className="grid grid-cols-3 gap-4 text-center">
                {t.stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-xl font-bold text-white">{s.value}</div>
                    <div className="text-blue-100 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 차별점 3개 카드 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
          {differentiators.map((d) => (
            <div
              key={d.title}
              className={`flex items-start gap-3 p-4 rounded-2xl border ${d.bg} transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md`}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-white shadow-sm">
                <d.icon size={16} className={d.color} />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm mb-0.5">{d.title}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
