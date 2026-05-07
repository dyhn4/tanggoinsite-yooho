"use client";

import { useState } from "react";
import { Send, MapPin, Mail, CheckCircle } from "lucide-react";

const inquiryTypes = [
  { value: "consultation", label: "도입 상담" },
  { value: "demo", label: "데모 요청" },
  { value: "technical", label: "기술 문의" },
  { value: "other", label: "기타" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
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
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company
            ? `${form.company}${form.position ? ` · ${form.position}` : ""}`
            : form.position,
          service: form.service,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", company: "", position: "", service: "", message: "" });
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
            도입 문의
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            담당자가 영업일 기준 1일 이내 연락드립니다.
            고문헌 샘플을 보내주시면 무료로 테스트 결과를 제공해 드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* 연락처 정보 */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-blue-700 to-sky-600 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-6">연락처 정보</h3>
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: "주소", value: "서울 성동구 왕십리" },
                  { icon: Mail, label: "이메일", value: "contact@tangoinsight.ai" },
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

            {/* 안내 박스 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 mb-1.5 text-sm">🎯 무료 테스트 제공</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  보유 중인 고문헌 샘플 이미지를 보내주시면 실제 인식 결과를 무료로 확인하실 수 있습니다.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1.5 text-sm">⚡ 빠른 답변 보장</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  영업일 기준 24시간 내 담당 컨설턴트가 연락드립니다.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1.5 text-sm">🔒 보안 배포 지원</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  기밀 자료도 내부망(On-Premise) 환경에서 안전하게 처리 가능합니다.
                </p>
              </div>
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
                      담당자명 <span className="text-red-500">*</span>
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
                      placeholder="hong@org.kr"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      소속 기관/기업명 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={form.company}
                      onChange={handleChange}
                      placeholder="국립○○도서관"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      직책
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={form.position}
                      onChange={handleChange}
                      placeholder="학예연구사"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    문의 유형
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white"
                  >
                    <option value="">선택해주세요</option>
                    {inquiryTypes.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
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
                    placeholder="예: 조선시대 고문서 약 10만 페이지 디지털화 프로젝트 관련 상담 희망. 한자·한글 혼용 자료이며 On-Premise 환경 적용 가능 여부도 문의드립니다."
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
                      문의 보내기
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
