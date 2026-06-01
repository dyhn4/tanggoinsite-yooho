"use client";

import Link from "next/link";
import {
  GitBranch,
  PenLine,
  ScanSearch,
  Braces,
  Layers,
  FileText,
  BrainCircuit,
  Wand2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

// 순서: 그리드 위치 col/row와 일치 (MooN Editor·OCR·Explorer → Tango PDF·XML·Batch·Image)
const solutionMeta = [
  { id: "moon-editor",      icon: PenLine,      title: "MooN Editor",      color: "from-violet-600 to-blue-500",  col: 1, row: 1 },
  { id: "moon-ai-ocr",      icon: ScanSearch,   title: "MooN AI OCR",      color: "from-sky-600 to-cyan-400",     col: 2, row: 1 },
  { id: "moon-ai-explorer", icon: BrainCircuit, title: "MooN AI Explorer", color: "from-indigo-600 to-blue-400",  col: 3, row: 1 },
  { id: "tango-pdf",        icon: FileText,     title: "Tango PDF",        color: "from-rose-600 to-pink-400",    col: 1, row: 2 },
  { id: "tango-xml",        icon: Braces,       title: "Tango XML(JSON)",  color: "from-emerald-600 to-teal-400", col: 3, row: 2 },
  { id: "tango-batch",      icon: Layers,       title: "Tango Batch",      color: "from-orange-500 to-amber-400", col: 1, row: 3 },
  { id: "tango-image",      icon: Wand2,        title: "Tango Image",      color: "from-red-600 to-orange-500",   col: 3, row: 3 },
];

export default function Technology() {
  const { lang } = useLanguage();
  const t = translations[lang].technology;

  const solutions = solutionMeta.map((meta, i) => ({
    ...meta,
    features: t.solutions[i].features,
  }));

  return (
    <section
      id="technology"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 bg-white py-8"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-5">
        <div className="text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200 font-semibold text-sm mb-3">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
            {t.title}
          </h2>
          <p className="text-slate-500 text-sm">{t.subtitle}</p>
        </div>

        {/* 3×3 그리드 — Tango Workflow 중앙 row-span-2 */}
        <div className="grid grid-cols-3 gap-3">

          {/* 7개 솔루션 카드 (명시적 위치 지정) */}
          {solutions.map((sol) => (
            <Link
              key={sol.id}
              href={`/solutions#${sol.id}`}
              style={{ gridColumn: String(sol.col), gridRow: String(sol.row) }}
              className="group flex flex-col gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-100 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <div className={`flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br ${sol.color} flex items-center justify-center shadow-md`}>
                  <sol.icon size={14} className="text-white" />
                </div>
                <span className="text-[9px] font-bold tracking-widest uppercase text-slate-400 border border-slate-200 rounded-full px-2 py-0.5">
                  {t.pluginBadge}
                </span>
              </div>

              <h3 className="font-bold text-slate-900 text-xs group-hover:text-blue-700 transition-colors leading-tight">
                {sol.title}
              </h3>

              <ul className="flex flex-col gap-0.5">
                {sol.features.map((f) => (
                  <li key={f} className="flex items-start gap-1.5 text-[10px] text-slate-500 leading-snug">
                    <span className={`mt-[3px] flex-shrink-0 w-1 h-1 rounded-full bg-gradient-to-br ${sol.color}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </Link>
          ))}

          {/* Tango Workflow — 중앙 col 2, row 2-3 */}
          <Link
            href="/solutions#tango-workflow"
            style={{
              gridColumn: "2",
              gridRow: "2 / span 2",
              background: "linear-gradient(160deg, #1e3a8a 0%, #1d4ed8 55%, #0ea5e9 100%)",
            }}
            className="flex flex-col rounded-2xl p-5 text-white relative overflow-hidden hover:brightness-110 transition-all duration-300"
          >
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/5" />

            <span className="relative z-10 self-start text-[9px] font-bold tracking-widest uppercase border border-white/30 rounded-full px-2.5 py-0.5 text-white/80 mb-4">
              {t.workflowBadge}
            </span>

            <div className="relative z-10 w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-4 backdrop-blur-sm">
              <GitBranch size={18} className="text-white" />
            </div>

            <h3 className="relative z-10 text-base font-black leading-tight">Tango</h3>
            <h3 className="relative z-10 text-base font-black leading-tight text-sky-200 mb-4">
              Workflow
            </h3>

            <p className="relative z-10 text-xs text-white/70 mb-5 leading-relaxed">
              {t.workflowDesc}
            </p>

            <ul className="relative z-10 flex flex-col gap-2.5 mt-auto">
              {t.workflowFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-white/85 leading-snug">
                  <span className="mt-[3px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sky-300" />
                  {f}
                </li>
              ))}
            </ul>
          </Link>

        </div>
      </div>
    </section>
  );
}
