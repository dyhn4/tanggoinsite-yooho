"use client";

import { useState } from "react";
import { Send, MapPin, Mail, Phone, CheckCircle } from "lucide-react";

const serviceOptions = [
  "AI OCR 문서 인식",
  "워크플로우 기반 문서 처리",
  "데이터 변환 및 가공",
  "지식 프로세스 아웃소싱(KPO)",
  "문서 디지털 아카이빙",
  "맞춤형 솔루션 컨설팅",
  "기타",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", company: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-700 font-semibold text-sm tracking-widest uppercase mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            문의하기
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            문서 디지털화 도입을 고민하고 계신가요? 전문 컨설턴트가 맞춤 솔루션을
            제안해 드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* 연락처 정보 */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-blue-700 to-sky-600 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-6">연락처 정보</h3>
              <div className="space-y-5">
                {[
                  {
                    icon: MapPin,
                    label: "주소",
                    value: "서울 성동구 왕십리",
                  },
                  {
                    icon: Mail,
                    label: "이메일",
                    value: "contact@tangoinsight.ai",
                  },
                  {
                    icon: Phone,
                    label: "전화",
                    value: "문의 후 안내드립니다",
                  },
                ].map((item) => (
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
              <h4 className="font-semibold text-slate-900 mb-3">빠른 답변 보장</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                평일 기준 24시간 내 담당 컨설턴트가 연락드립니다. 파일럿 프로젝트를 통해
                실제 효과를 확인하신 후 도입을 결정하실 수 있습니다.
              </p>
            </div>
          </div>

          {/* 문의 폼 */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-100 p-6 md:p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle size={56} className="text-green-500 mb-4" />
                <h3 className="font-bold text-xl text-slate-900 mb-2">
                  문의가 접수되었습니다!
                </h3>
                <p className="text-slate-600">
                  영업일 기준 24시간 내에 연락드리겠습니다.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 px-5 py-2.5 rounded-lg bg-blue-700 text-white font-medium text-sm hover:bg-blue-800 transition-colors"
                >
                  새 문의 작성
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      이름 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="홍길동"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      이메일 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="hong@company.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      연락처
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="010-0000-0000"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      회사명
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="(주)회사명"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    관심 서비스
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white"
                  >
                    <option value="">서비스를 선택해주세요</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    문의 내용 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="문서 종류, 처리 규모, 현재 상황 등을 알려주시면 더 정확한 안내가 가능합니다."
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm">
                    전송 중 오류가 발생했습니다. 다시 시도해주세요.
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
                      전송 중...
                    </>
                  ) : (
                    <>
                      문의 전송
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
