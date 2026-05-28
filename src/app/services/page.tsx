"use client";

import Link from "next/link";
import {
  ArrowLeft, ArrowRight, CheckCircle, Database, Cpu,
  FileText, Zap, Shield, Clock, Users, Award,
  Globe, Code2, BookOpen, Building2, ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const processIcons = [Users, Cpu, CheckCircle, Award];

const featureMeta = [
  { icon: Award,    color: "text-blue-600",   bg: "bg-blue-50",   border: "border-blue-100" },
  { icon: Zap,     color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-100" },
  { icon: Shield,  color: "text-green-600",  bg: "bg-green-50",  border: "border-green-100" },
  { icon: Code2,   color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100" },
  { icon: Database,color: "text-cyan-600",   bg: "bg-cyan-50",   border: "border-cyan-100" },
  { icon: Clock,   color: "text-pink-600",   bg: "bg-pink-50",   border: "border-pink-100" },
];

const industryIcons = [BookOpen, Building2, FileText, Globe];

export default function ServicesPage() {
  const { lang } = useLanguage();
  const t = translations[lang].servicesPage;

  const processSteps = t.processSteps.map((s, i) => ({ ...s, icon: processIcons[i] }));
  const features = t.features.map((f, i) => ({ ...f, ...featureMeta[i] }));
  const industries = t.industries.map((ind, i) => ({ ...ind, icon: industryIcons[i] }));

  return (
    <div className="min-h-screen bg-white">

      {/* ── 상단 네비 ── */}
      <div
        className="sticky top-0 z-30 border-b border-slate-200/80"
        style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)" }}
      >
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-700 transition-colors text-sm font-medium group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
            {t.backHome}
          </Link>
          <span
            className="text-base font-black tracking-tight"
            style={{ fontFamily: "'Sora', sans-serif", letterSpacing: "-0.02em" }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">Tango</span>
            <span className="text-slate-900">Insight</span>
          </span>
          <Link
            href="/apply"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-colors"
          >
            {t.applyBtn} <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* ── 히어로 ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a1228 0%, #1e3a8a 55%, #0c1a3a 100%)",
          minHeight: "460px",
        }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)",
              transform: "translate(250px, -250px)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
              transform: "translate(-150px, 150px)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-blue-400/60" />
            <span className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase">{t.heroBadge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-[1.15]">
            {t.heroTitle[0]}
            <br />
            <span className="bg-gradient-to-r from-sky-400 to-blue-300 bg-clip-text text-transparent">
              {t.heroTitle[1]}
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-12">
            {t.heroDesc}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {t.stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/5 backdrop-blur-sm rounded-2xl px-5 py-4 border border-white/10 hover:bg-white/8 transition-colors"
              >
                <div className="text-2xl font-black text-white mb-1">{s.value}</div>
                <div className="text-blue-200/60 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 서비스 구성 ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200 font-semibold text-sm mb-4">
              {t.compositionBadge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">{t.compositionTitle}</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
              {t.compositionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* KPO 카드 */}
            <div className="rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div
                className="p-8 sm:p-10"
                style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%)" }}
              >
                <span className="inline-flex px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-4">
                  {t.kpoBadge}
                </span>
                <h3 className="text-2xl font-black text-white mb-3">{t.kpoTitle}</h3>
                <p className="text-blue-100/80 text-sm leading-relaxed">
                  {t.kpoDesc}
                </p>
              </div>
              <div className="p-6 bg-slate-50">
                <ul className="space-y-3.5">
                  {t.kpoItems.map((s) => (
                    <li key={s.name} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">{s.name}</p>
                        <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{s.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* OCR 카드 */}
            <div className="rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div
                className="p-8 sm:p-10"
                style={{ background: "linear-gradient(135deg, #6d28d9 0%, #4f46e5 100%)" }}
              >
                <span className="inline-flex px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-4">
                  {t.ocrBadge}
                </span>
                <h3 className="text-2xl font-black text-white mb-3">{t.ocrTitle}</h3>
                <p className="text-violet-100/80 text-sm leading-relaxed">
                  {t.ocrDesc}
                </p>
              </div>
              <div className="p-6 bg-slate-50">
                <ul className="space-y-3.5">
                  {t.ocrItems.map((s) => (
                    <li key={s.name} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-violet-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">{s.name}</p>
                        <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{s.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 서비스 절차 ── */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200 font-semibold text-sm mb-4">
              {t.processBadge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">{t.processTitle}</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">
              {t.processSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((s, i) => (
              <div key={s.step} className="relative">
                <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <span className="text-5xl font-black text-blue-100 leading-none mb-4">{s.step}</span>
                  <div className="w-10 h-10 rounded-xl bg-blue-700/10 flex items-center justify-center mb-4">
                    <s.icon size={20} className="text-blue-700" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 text-sm">{s.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed flex-1">{s.desc}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 -translate-y-1/2">
                    <ChevronRight size={18} className="text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 특장점 ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200 font-semibold text-sm mb-4">
              {t.featuresBadge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">
              {t.featuresTitle}
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">
              {t.featuresSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className={`p-6 rounded-2xl border ${f.border} hover:shadow-md hover:-translate-y-0.5 transition-all duration-300`}
              >
                <div className={`w-11 h-11 rounded-xl ${f.bg} flex items-center justify-center mb-4`}>
                  <f.icon size={22} className={f.color} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm">{f.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 적용 분야 ── */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200 font-semibold text-sm mb-4">
              {t.industryBadge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">
              {t.industryTitle}
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">
              {t.industrySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <div
                key={ind.label}
                className="bg-white rounded-2xl p-6 border border-slate-100 text-center hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-700/8 flex items-center justify-center mx-auto mb-4">
                  <ind.icon size={24} className="text-blue-700" />
                </div>
                <p className="font-bold text-slate-900 text-sm mb-1">{ind.label}</p>
                <p className="text-slate-500 text-xs">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a1228 0%, #1e3a8a 60%, #0c1a3a 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-5">
            {t.ctaTitle}
          </h2>
          <p className="text-slate-300 mb-10 leading-relaxed text-sm sm:text-base whitespace-pre-line">
            {t.ctaDesc}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base transition-colors shadow-lg shadow-blue-900/40"
            >
              {t.ctaApply} <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base transition-colors border border-white/20"
            >
              {t.ctaContact}
            </Link>
          </div>
        </div>
      </section>

      {/* ── 푸터 ── */}
      <footer className="bg-slate-900 text-slate-500 py-8 px-6 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs">© {new Date().getFullYear()} 탱고인사이트(Tangoinsight). All rights reserved.</p>
          <div className="flex gap-5 text-xs">
            <Link href="/" className="hover:text-white transition-colors">{lang === "ko" ? "홈" : "Home"}</Link>
            <Link href="/company" className="hover:text-white transition-colors">{lang === "ko" ? "회사소개" : "Company"}</Link>
            <Link href="/solutions" className="hover:text-white transition-colors">{lang === "ko" ? "솔루션" : "Solutions"}</Link>
            <Link href="/apply" className="hover:text-white transition-colors">{lang === "ko" ? "서비스 신청" : "Apply"}</Link>
            <Link href="/contact" className="hover:text-white transition-colors">{lang === "ko" ? "문의하기" : "Contact"}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
