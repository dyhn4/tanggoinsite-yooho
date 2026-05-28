"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const barColors = [
  "from-blue-500 to-sky-400",
  "from-blue-600 to-blue-400",
  "from-sky-500 to-cyan-400",
];

export default function Process() {
  const { lang } = useLanguage();
  const t = translations[lang].process;

  const accuracyBars = t.bars.map((bar, i) => ({ ...bar, color: barColors[i] }));

  return (
    <section
      id="process"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-10"
    >
      <div className="max-w-6xl mx-auto w-full space-y-8">

        {/* 정확도 섹션 */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-semibold text-xs mb-3">
                {t.techBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
                {t.techTitle[0]}<br />{t.techTitle[1]}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {t.techDesc}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {accuracyBars.map((bar) => (
                <div key={bar.label}>
                  <div className="flex justify-between items-baseline mb-1">
                    <div>
                      <span className="text-white text-sm font-semibold">{bar.label}</span>
                      <span className="text-slate-500 text-xs ml-2">{bar.sub}</span>
                    </div>
                    <span className="text-white font-bold text-sm">{bar.display}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${bar.color}`}
                      style={{ width: `${bar.value}%` }}
                    />
                  </div>
                </div>
              ))}

              <div className="mt-4 p-4 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center gap-4">
                <span className="text-3xl font-extrabold text-white">5M+</span>
                <div>
                  <div className="text-white text-sm font-semibold">{t.statLabel}</div>
                  <div className="text-slate-400 text-xs">{t.statSub}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 문서 처리 프로세스 */}
        <div>
          <div className="text-center mb-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-semibold text-xs mb-2">
              {t.processBadge}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t.processTitle}
            </h3>
          </div>

          <div className="relative">
            <div
              className="hidden md:block absolute h-px top-6 z-0"
              style={{
                left: "calc(12.5% - 0px)",
                right: "calc(12.5% - 0px)",
                background: "linear-gradient(to right, rgba(96,165,250,0.15), rgba(56,189,248,0.6) 30%, rgba(56,189,248,0.6) 70%, rgba(96,165,250,0.15))",
              }}
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {t.steps.map((step) => (
                <div key={step.step} className="flex flex-col items-center text-center">
                  <div className="relative z-10 mb-4">
                    <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md scale-125" />
                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center shadow-lg shadow-blue-500/40">
                      <span className="text-white font-black text-sm tracking-tight">{step.step}</span>
                    </div>
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1">{step.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed max-w-[140px] mx-auto">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
