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
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const solutionMeta = [
  { id: "moon-editor",      icon: PenLine,      title: "MooN Editor",      color: "from-violet-600 to-blue-500" },
  { id: "moon-ai-ocr",      icon: ScanSearch,   title: "MooN AI OCR",      color: "from-sky-600 to-cyan-400" },
  { id: "tango-xml",        icon: Braces,       title: "Tango XML(JSON)",  color: "from-emerald-600 to-teal-400" },
  { id: "tango-batch",      icon: Layers,       title: "Tango Batch",      color: "from-orange-500 to-amber-400" },
  { id: "tango-pdf",        icon: FileText,     title: "Tango PDF",        color: "from-rose-600 to-pink-400" },
  { id: "moon-ai-explorer", icon: BrainCircuit, title: "MooN AI Explorer", color: "from-indigo-600 to-blue-400" },
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
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 bg-white py-10"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-7">
        <div className="text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200 font-semibold text-sm mb-3">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
            {t.title}
          </h2>
          <p className="text-slate-500 text-sm">
            {t.subtitle}
          </p>
        </div>

        <div className="flex gap-5 items-stretch">

          {/* Tango Workflow */}
          <Link
            href="/solutions#tango-workflow"
            className="w-56 flex-shrink-0 flex flex-col rounded-2xl p-6 text-white relative overflow-hidden hover:brightness-110 transition-all duration-300"
            style={{ background: "linear-gradient(160deg, #1e3a8a 0%, #1d4ed8 50%, #0ea5e9 100%)" }}
          >
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/5" />

            <span className="relative z-10 self-start text-[10px] font-bold tracking-widest uppercase border border-white/30 rounded-full px-2.5 py-0.5 text-white/80 mb-5">
              {t.workflowBadge}
            </span>

            <div className="relative z-10 w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5 backdrop-blur-sm">
              <GitBranch size={22} className="text-white" />
            </div>

            <h3 className="relative z-10 text-lg font-black mb-1 leading-tight">
              Tango
            </h3>
            <h3 className="relative z-10 text-lg font-black mb-5 leading-tight text-sky-200">
              Workflow
            </h3>

            <p className="relative z-10 text-xs text-white/70 mb-5 leading-relaxed">
              {t.workflowDesc}
            </p>

            <ul className="relative z-10 flex flex-col gap-2.5 mt-auto">
              {t.workflowFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-white/85 leading-snug">
                  <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sky-300" />
                  {f}
                </li>
              ))}
            </ul>
          </Link>

          {/* 6개 솔루션 (3×2 그리드) */}
          <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-4">
            {solutions.map((sol) => (
              <Link
                key={sol.title}
                href={`/solutions#${sol.id}`}
                className="group flex flex-col gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-100 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2.5">
                  <div className={`flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br ${sol.color} flex items-center justify-center shadow-md`}>
                    <sol.icon size={16} className="text-white" />
                  </div>
                  <span className="text-[9px] font-bold tracking-widest uppercase text-slate-400 border border-slate-200 rounded-full px-2 py-0.5">
                    {t.pluginBadge}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-700 transition-colors leading-tight">
                  {sol.title}
                </h3>

                <ul className="flex flex-col gap-1">
                  {sol.features.map((f) => (
                    <li key={f} className="flex items-start gap-1.5 text-xs text-slate-500 leading-snug">
                      <span className={`mt-1 flex-shrink-0 w-1 h-1 rounded-full bg-gradient-to-br ${sol.color}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
