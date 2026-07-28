"use client";

import { useState } from "react";
import { Send, MapPin, Mail, Phone, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    assignee: "",
    message: "",
  });
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [privacyError, setPrivacyError] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyConsent) {
      setPrivacyError(true);
      return;
    }
    setPrivacyError(false);
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", company: "", service: "", assignee: "", message: "" });
        setPrivacyConsent(false);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const contactInfoItems = [
    { icon: MapPin, label: lang === "ko" ? "주소" : "Address", value: "서울 구로구 디지털로 26길 43 L-1211" },
    { icon: Mail,   label: t.emailLabel,                        value: "contact@tangoinsight.ai" },
    { icon: Phone,  label: t.phoneLabel,                        value: lang === "ko" ? "문의 후 안내드립니다" : "Contact us for details" },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-700 font-semibold text-sm tracking-widest uppercase mb-4">
            {t.sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {t.sectionTitle}
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto whitespace-pre-line">
            {t.sectionDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* 연락처 정보 */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-blue-700 to-sky-600 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-6">{t.infoTitle}</h3>
              <div className="space-y-5">
                {contactInfoItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <div className="text-blue-200 text-xs mb-0.5">{item.label}</div>
                      <div className="text-white text-sm font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <h4 className="font-semibold text-slate-900 mb-3">{t.guarantee}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t.guaranteeDesc}
              </p>
            </div>
          </div>

          {/* 문의 폼 */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-100 p-6 md:p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle size={56} className="text-green-500 mb-4" />
                <h3 className="font-bold text-xl text-slate-900 mb-2">
                  {t.successTitle}
                </h3>
                <p className="text-slate-600">
                  {t.successDesc}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 px-5 py-2.5 rounded-lg bg-blue-700 text-white font-medium text-sm hover:bg-blue-800 transition-colors"
                >
                  {t.newInquiry}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      {t.nameLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder={lang === "ko" ? "홍길동" : "John Doe"}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      {t.emailLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder={lang === "ko" ? "hong@company.com" : "john@institution.org"}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      {t.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder={lang === "ko" ? "010-0000-0000" : "+82-10-0000-0000"}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      {t.companyLabel}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder={lang === "ko" ? "(주)회사명" : "Institution / Company"}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      {t.serviceLabel}
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white"
                    >
                      <option value="">{t.selectService}</option>
                      {t.serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      {t.assigneeLabel}
                    </label>
                    <select
                      name="assignee"
                      value={form.assignee}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white"
                    >
                      {t.assigneeOptions.map((opt) => (
                        <option key={opt} value={opt === t.assigneeOptions[0] ? "" : opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    {t.messagelabel} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder={t.messageHolder}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm resize-none"
                  />
                </div>

                {/* 개인정보 수집·이용 동의 */}
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">
                    {t.privacyText}
                  </p>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={privacyConsent}
                      onChange={(e) => {
                        setPrivacyConsent(e.target.checked);
                        if (e.target.checked) setPrivacyError(false);
                      }}
                      className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-slate-700">{t.privacyLabel}</span>
                  </label>
                  {privacyError && (
                    <p className="text-red-500 text-xs mt-2">{t.privacyRequired}</p>
                  )}
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm">
                    {t.errorMsg}{" "}
                    <a
                      href="mailto:contact@tangoinsight.ai"
                      className="underline hover:text-red-700"
                    >
                      contact@tangoinsight.ai
                    </a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {t.submitting}
                    </>
                  ) : (
                    <>
                      {t.submitBtn}
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
