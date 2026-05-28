"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft, ArrowRight, CheckCircle, Send,
  FileText, Database, Cpu, Wrench, ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

type FormData = {
  serviceType: string;
  docType: string[];
  volume: string;
  outputFormat: string[];
  deadline: string;
  specialNotes: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
};

const serviceTypeMeta = [
  { id: "kpo",        icon: Database, gradientFrom: "#1d4ed8", gradientTo: "#0ea5e9", ring: "ring-blue-300",   selectedBg: "bg-blue-50 border-blue-400",   iconBg: "bg-blue-100",   iconColor: "text-blue-700" },
  { id: "ocr-api",   icon: Cpu,      gradientFrom: "#6d28d9", gradientTo: "#4f46e5", ring: "ring-violet-300", selectedBg: "bg-violet-50 border-violet-400", iconBg: "bg-violet-100", iconColor: "text-violet-700" },
  { id: "on-premise",icon: Wrench,   gradientFrom: "#0891b2", gradientTo: "#06b6d4", ring: "ring-cyan-300",   selectedBg: "bg-cyan-50 border-cyan-400",    iconBg: "bg-cyan-100",   iconColor: "text-cyan-700" },
  { id: "consulting",icon: FileText, gradientFrom: "#c2410c", gradientTo: "#f97316", ring: "ring-orange-300", selectedBg: "bg-orange-50 border-orange-400", iconBg: "bg-orange-100", iconColor: "text-orange-700" },
];

export default function ApplyPage() {
  const { lang } = useLanguage();
  const t = translations[lang].applyPage;

  const serviceTypes = t.serviceTypes.map((st, i) => ({ ...st, ...serviceTypeMeta[i] }));

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [form, setForm] = useState<FormData>({
    serviceType: "",
    docType: [],
    volume: "",
    outputFormat: [],
    deadline: "",
    specialNotes: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
  });

  const toggleArr = (field: "docType" | "outputFormat", value: string) => {
    setForm((prev) => {
      const arr = prev[field];
      return {
        ...prev,
        [field]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });
  };

  const canNext1 = form.serviceType !== "";
  const canNext2 = form.docType.length > 0 && form.volume !== "";
  const canSubmit = form.name.trim() !== "" && form.email.trim() !== "";

  const handleSubmit = async () => {
    setLoading(true);
    setError(false);
    try {
      const serviceLabel = serviceTypes.find((s) => s.id === form.serviceType)?.title ?? form.serviceType;
      const message = [
        `[${t.heroBadge}]`,
        `${t.summaryService}: ${serviceLabel}`,
        `${t.summaryDoc}: ${form.docType.join(", ")}`,
        `${t.summaryVolume}: ${form.volume}`,
        `${t.outputLabel}: ${form.outputFormat.join(", ") || "-"}`,
        `${t.deadlineLabel}: ${form.deadline || "-"}`,
        form.role ? `${t.roleLabel}: ${form.role}` : null,
        form.specialNotes ? `${t.notesLabel}: ${form.specialNotes}` : null,
      ]
        .filter(Boolean)
        .join("\n");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          service: serviceLabel,
          message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const selectedService = serviceTypes.find((s) => s.id === form.serviceType);

  const steps = t.steps.map((label, i) => ({ id: i + 1, label }));

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── 상단 네비 ── */}
      <div
        className="sticky top-0 z-30 border-b border-slate-200/80"
        style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)" }}
      >
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-700 transition-colors text-sm font-medium group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
            {t.backServices}
          </Link>
          <span
            className="text-base font-black tracking-tight"
            style={{ fontFamily: "'Sora', sans-serif", letterSpacing: "-0.02em" }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">Tango</span>
            <span className="text-slate-900">Insight</span>
          </span>
          <Link
            href="/contact"
            className="text-sm text-slate-500 hover:text-blue-700 transition-colors hidden sm:block"
          >
            {t.generalContact}
          </Link>
        </div>
      </div>

      {/* ── 히어로 ── */}
      <div
        className="px-6 py-16 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #0f172a 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-blue-400/60" />
            <span className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase">{t.heroBadge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">{t.heroTitle}</h1>
          <p className="text-slate-400 text-sm mb-10">
            {t.heroDesc}
          </p>

          <div className="flex items-center gap-2 flex-wrap">
            {t.processLabels.map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <div className="flex items-center gap-2 rounded-full px-3 py-1.5 bg-white/10 border border-white/10">
                  <div className="w-5 h-5 rounded-full bg-blue-500/30 flex items-center justify-center text-[10px] font-bold text-blue-200 flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-white/80 text-xs hidden sm:block">{label}</span>
                </div>
                {i < t.processLabels.length - 1 && <ChevronRight size={12} className="text-white/30 flex-shrink-0" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 메인 영역 ── */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* 폼 영역 */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-sm">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h2 className="text-2xl font-black text-slate-900 mb-3">{t.successTitle}</h2>
                <p className="text-slate-500 mb-2 leading-relaxed text-sm">
                  {t.successDesc}
                </p>
                <p className="text-slate-500 text-sm mb-8">
                  {t.successDesc2.split("contact@tangoinsight.ai")[0]}
                  <a href="mailto:contact@tangoinsight.ai" className="text-blue-700 font-medium hover:underline">
                    contact@tangoinsight.ai
                  </a>
                  {t.successDesc2.split("contact@tangoinsight.ai")[1]}
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors"
                >
                  {t.backHome}
                </Link>
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">

                {/* 스텝 인디케이터 */}
                <div className="px-8 py-5 border-b border-slate-100">
                  <div className="flex items-center">
                    {steps.map((s, i) => (
                      <div key={s.id} className="flex items-center flex-1 last:flex-none">
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                              step > s.id
                                ? "bg-blue-700 text-white"
                                : step === s.id
                                ? "bg-blue-700 text-white ring-4 ring-blue-100"
                                : "bg-slate-100 text-slate-400"
                            }`}
                          >
                            {step > s.id ? <CheckCircle size={14} /> : s.id}
                          </div>
                          <span
                            className={`text-xs font-medium hidden sm:block transition-colors ${
                              step >= s.id ? "text-slate-900" : "text-slate-400"
                            }`}
                          >
                            {s.label}
                          </span>
                        </div>
                        {i < steps.length - 1 && (
                          <div
                            className={`flex-1 h-px mx-3 transition-colors ${
                              step > s.id ? "bg-blue-300" : "bg-slate-200"
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8">

                  {/* ── 스텝 1 ── */}
                  {step === 1 && (
                    <div>
                      <h2 className="text-xl font-black text-slate-900 mb-1">
                        {t.step1Title}
                      </h2>
                      <p className="text-slate-500 text-sm mb-7">{t.step1Subtitle}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {serviceTypes.map((s) => {
                          const isSelected = form.serviceType === s.id;
                          return (
                            <button
                              key={s.id}
                              onClick={() => setForm((p) => ({ ...p, serviceType: s.id }))}
                              className={`p-5 rounded-2xl border-2 text-left transition-all duration-200 ${
                                isSelected
                                  ? `${s.selectedBg} ring-2 ${s.ring}`
                                  : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                              }`}
                            >
                              <div
                                className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                                  isSelected ? `${s.iconBg} ${s.iconColor}` : "bg-slate-100 text-slate-500"
                                }`}
                              >
                                <s.icon size={20} />
                              </div>
                              <p className="font-bold text-slate-900 text-sm mb-1">{s.title}</p>
                              <p className="text-slate-500 text-xs">{s.desc}</p>
                            </button>
                          );
                        })}
                      </div>

                      <div className="mt-7 flex justify-end">
                        <button
                          onClick={() => setStep(2)}
                          disabled={!canNext1}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-700 text-white font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-800 transition-colors"
                        >
                          {t.nextBtn} <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ── 스텝 2 ── */}
                  {step === 2 && (
                    <div>
                      <h2 className="text-xl font-black text-slate-900 mb-1">{t.step2Title}</h2>
                      <p className="text-slate-500 text-sm mb-7">{t.step2Subtitle}</p>

                      {/* 자료 유형 */}
                      <div className="mb-7">
                        <label className="block text-sm font-bold text-slate-800 mb-1.5">
                          {t.docTypeLabel} <span className="text-red-500">*</span>
                          <span className="text-slate-400 font-normal ml-1.5 text-xs">{t.docTypeMultiple}</span>
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {t.docTypes.map((dt) => (
                            <button
                              key={dt}
                              onClick={() => toggleArr("docType", dt)}
                              className={`px-4 py-2 rounded-xl text-sm font-medium border transition-colors ${
                                form.docType.includes(dt)
                                  ? "bg-blue-700 text-white border-blue-700"
                                  : "bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50"
                              }`}
                            >
                              {dt}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* 분량 */}
                      <div className="mb-7">
                        <label className="block text-sm font-bold text-slate-800 mb-1.5">
                          {t.volumeLabel} <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {t.volumes.map((v) => (
                            <button
                              key={v.label}
                              onClick={() => setForm((p) => ({ ...p, volume: v.label }))}
                              className={`px-4 py-3 rounded-xl border text-left transition-colors ${
                                form.volume === v.label
                                  ? "bg-blue-700 text-white border-blue-700"
                                  : "bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50"
                              }`}
                            >
                              <p className="font-semibold text-sm">{v.label}</p>
                              <p className={`text-xs mt-0.5 ${form.volume === v.label ? "text-blue-200" : "text-slate-400"}`}>
                                {v.sub}
                              </p>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* 출력 포맷 */}
                      <div className="mb-7">
                        <label className="block text-sm font-bold text-slate-800 mb-1.5">
                          {t.outputLabel}
                          <span className="text-slate-400 font-normal ml-1.5 text-xs">{t.docTypeMultiple}</span>
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {t.outputFormats.map((f) => (
                            <button
                              key={f}
                              onClick={() => toggleArr("outputFormat", f)}
                              className={`px-4 py-2 rounded-xl text-sm font-medium border transition-colors ${
                                form.outputFormat.includes(f)
                                  ? "bg-slate-900 text-white border-slate-900"
                                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-400"
                              }`}
                            >
                              {f}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* 납기 */}
                      <div className="mb-7">
                        <label className="block text-sm font-bold text-slate-800 mb-1.5">{t.deadlineLabel}</label>
                        <div className="flex flex-wrap gap-2">
                          {t.deadlines.map((d) => (
                            <button
                              key={d}
                              onClick={() => setForm((p) => ({ ...p, deadline: d }))}
                              className={`px-4 py-2 rounded-xl text-sm font-medium border transition-colors ${
                                form.deadline === d
                                  ? "bg-blue-700 text-white border-blue-700"
                                  : "bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50"
                              }`}
                            >
                              {d}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* 추가 요청 */}
                      <div className="mb-7">
                        <label className="block text-sm font-bold text-slate-800 mb-1.5">{t.notesLabel}</label>
                        <textarea
                          value={form.specialNotes}
                          onChange={(e) => setForm((p) => ({ ...p, specialNotes: e.target.value }))}
                          rows={3}
                          placeholder={t.notesPlaceholder}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm resize-none transition"
                        />
                      </div>

                      <div className="flex justify-between">
                        <button
                          onClick={() => setStep(1)}
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors"
                        >
                          <ArrowLeft size={15} /> {t.prevBtn}
                        </button>
                        <button
                          onClick={() => setStep(3)}
                          disabled={!canNext2}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-700 text-white font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-800 transition-colors"
                        >
                          {t.nextBtn} <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ── 스텝 3 ── */}
                  {step === 3 && (
                    <div>
                      <h2 className="text-xl font-black text-slate-900 mb-1">{t.step3Title}</h2>
                      <p className="text-slate-500 text-sm mb-7">{t.step3Subtitle}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">
                            {t.nameLabel} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                            placeholder={t.namePlaceholder}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">
                            {t.emailLabel} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                            placeholder={t.emailPlaceholder}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">{t.phoneLabel}</label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                            placeholder={t.phonePlaceholder}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">{t.companyLabel}</label>
                          <input
                            type="text"
                            value={form.company}
                            onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                            placeholder={t.companyPlaceholder}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition"
                          />
                        </div>
                      </div>

                      <div className="mb-7">
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">{t.roleLabel}</label>
                        <input
                          type="text"
                          value={form.role}
                          onChange={(e) => setForm((p) => ({ ...p, role: e.target.value }))}
                          placeholder={t.rolePlaceholder}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition"
                        />
                      </div>

                      {error && (
                        <p className="text-red-500 text-sm mb-4">{t.errorMsg}</p>
                      )}

                      <div className="flex justify-between">
                        <button
                          onClick={() => setStep(2)}
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors"
                        >
                          <ArrowLeft size={15} /> {t.prevBtn}
                        </button>
                        <button
                          onClick={handleSubmit}
                          disabled={!canSubmit || loading}
                          className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-blue-700 text-white font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-800 transition-colors"
                        >
                          {loading ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              {t.submitting}
                            </>
                          ) : (
                            <>
                              {t.submitBtn} <Send size={15} />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* ── 사이드바 ── */}
          <div className="space-y-4">

            {step > 1 && !submitted && (
              <div className="bg-white rounded-2xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900 text-sm mb-3">{t.summaryTitle}</h3>
                <div className="space-y-2">
                  {selectedService && (
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">{t.summaryService}</span>
                      <span className="text-slate-900 font-semibold">{selectedService.title}</span>
                    </div>
                  )}
                  {form.docType.length > 0 && (
                    <div className="flex justify-between items-start gap-2 text-xs">
                      <span className="text-slate-500 flex-shrink-0">{t.summaryDoc}</span>
                      <span className="text-slate-900 font-medium text-right">{form.docType.join(", ")}</span>
                    </div>
                  )}
                  {form.volume && (
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">{t.summaryVolume}</span>
                      <span className="text-slate-900 font-semibold">{form.volume}</span>
                    </div>
                  )}
                  {form.deadline && (
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">{t.summaryDeadline}</span>
                      <span className="text-slate-900 font-semibold">{form.deadline}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div
              className="rounded-2xl p-5 text-white"
              style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%)" }}
            >
              <h3 className="font-bold text-sm mb-4">{t.afterTitle}</h3>
              <ol className="space-y-3">
                {t.afterSteps.map((text, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-blue-100">{text}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-2">{t.directTitle}</h3>
              <p className="text-slate-500 text-xs mb-3 leading-relaxed">
                {t.directDesc}
              </p>
              <a
                href="mailto:contact@tangoinsight.ai"
                className="text-blue-700 text-xs font-semibold hover:underline"
              >
                contact@tangoinsight.ai
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
