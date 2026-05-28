"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft, ArrowRight, CheckCircle, Send,
  FileText, Database, Cpu, Wrench, ChevronRight,
} from "lucide-react";

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

const serviceTypes = [
  {
    id: "kpo",
    icon: Database,
    title: "KPO 아웃소싱",
    desc: "스캔부터 납품까지 전 과정 대행",
    gradientFrom: "#1d4ed8",
    gradientTo: "#0ea5e9",
    ring: "ring-blue-300",
    selectedBg: "bg-blue-50 border-blue-400",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
  },
  {
    id: "ocr-api",
    icon: Cpu,
    title: "AI OCR API",
    desc: "REST API 연동 OCR 서비스",
    gradientFrom: "#6d28d9",
    gradientTo: "#4f46e5",
    ring: "ring-violet-300",
    selectedBg: "bg-violet-50 border-violet-400",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-700",
  },
  {
    id: "on-premise",
    icon: Wrench,
    title: "On-Premise 솔루션",
    desc: "자체 서버에 직접 설치·운영",
    gradientFrom: "#0891b2",
    gradientTo: "#06b6d4",
    ring: "ring-cyan-300",
    selectedBg: "bg-cyan-50 border-cyan-400",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-700",
  },
  {
    id: "consulting",
    icon: FileText,
    title: "컨설팅·기타",
    desc: "맞춤형 솔루션 상담",
    gradientFrom: "#c2410c",
    gradientTo: "#f97316",
    ring: "ring-orange-300",
    selectedBg: "bg-orange-50 border-orange-400",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-700",
  },
];

const docTypes = [
  "고문헌 (한자·옛한글)", "근대자료 (일제강점기~1980s)", "현대 단행본",
  "행정·공문서", "신문·잡지", "필사본", "기타",
];

const outputFormats = [
  "TEI-XML", "JSON", "Excel / CSV", "TXT (텍스트)", "검색 가능 PDF", "맞춤 포맷 협의",
];

const volumeOptions = [
  { label: "1,000면 미만", sub: "소규모 파일럿" },
  { label: "1,000 ~ 10,000면", sub: "중규모 프로젝트" },
  { label: "10,000 ~ 50,000면", sub: "대규모 구축" },
  { label: "50,000 ~ 100,000면", sub: "기관급 아카이브" },
  { label: "100,000면 이상", sub: "국가 DB 구축" },
];

const deadlineOptions = [
  "1개월 이내", "1 ~ 3개월", "3 ~ 6개월", "6개월 이상", "미정 (상담 후 결정)",
];

const STEPS = [
  { id: 1, label: "서비스 선택" },
  { id: 2, label: "프로젝트 상세" },
  { id: 3, label: "연락처 입력" },
];

export default function ApplyPage() {
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
        `[서비스 신청]`,
        `서비스 유형: ${serviceLabel}`,
        `자료 유형: ${form.docType.join(", ")}`,
        `분량: ${form.volume}`,
        `출력 포맷: ${form.outputFormat.join(", ") || "미정"}`,
        `희망 납기: ${form.deadline || "미정"}`,
        form.role ? `직책: ${form.role}` : null,
        form.specialNotes ? `추가 요청: ${form.specialNotes}` : null,
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
            서비스 안내
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
            일반 문의
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
            <span className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase">Service Apply</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">서비스 신청</h1>
          <p className="text-slate-400 text-sm mb-10">
            견적 요청부터 계약까지, 빠르고 정확하게 안내해드립니다. 평일 기준 24시간 내 연락드립니다.
          </p>

          {/* 진행 단계 표시 */}
          <div className="flex items-center gap-2 flex-wrap">
            {["신청 접수", "검토 및 샘플", "견적 제안", "계약 체결"].map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <div className="flex items-center gap-2 rounded-full px-3 py-1.5 bg-white/10 border border-white/10">
                  <div className="w-5 h-5 rounded-full bg-blue-500/30 flex items-center justify-center text-[10px] font-bold text-blue-200 flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-white/80 text-xs hidden sm:block">{label}</span>
                </div>
                {i < 3 && <ChevronRight size={12} className="text-white/30 flex-shrink-0" />}
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
              /* 제출 완료 */
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-sm">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h2 className="text-2xl font-black text-slate-900 mb-3">신청이 완료되었습니다!</h2>
                <p className="text-slate-500 mb-2 leading-relaxed text-sm">
                  담당 컨설턴트가 검토 후 영업일 기준{" "}
                  <strong className="text-slate-900">24시간 내</strong>에 연락드립니다.
                </p>
                <p className="text-slate-500 text-sm mb-8">
                  추가 문의는{" "}
                  <a href="mailto:contact@tangoinsight.ai" className="text-blue-700 font-medium hover:underline">
                    contact@tangoinsight.ai
                  </a>
                  로 보내주세요.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors"
                >
                  홈으로 돌아가기
                </Link>
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">

                {/* 스텝 인디케이터 */}
                <div className="px-8 py-5 border-b border-slate-100">
                  <div className="flex items-center">
                    {STEPS.map((s, i) => (
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
                        {i < STEPS.length - 1 && (
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

                  {/* ── 스텝 1: 서비스 선택 ── */}
                  {step === 1 && (
                    <div>
                      <h2 className="text-xl font-black text-slate-900 mb-1">
                        어떤 서비스가 필요하신가요?
                      </h2>
                      <p className="text-slate-500 text-sm mb-7">가장 적합한 서비스를 선택해 주세요.</p>

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
                          다음 단계 <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ── 스텝 2: 프로젝트 상세 ── */}
                  {step === 2 && (
                    <div>
                      <h2 className="text-xl font-black text-slate-900 mb-1">프로젝트 상세 정보</h2>
                      <p className="text-slate-500 text-sm mb-7">
                        정확한 견적 산출을 위해 자료 정보를 입력해 주세요.
                      </p>

                      {/* 자료 유형 */}
                      <div className="mb-7">
                        <label className="block text-sm font-bold text-slate-800 mb-1.5">
                          자료 유형 <span className="text-red-500">*</span>
                          <span className="text-slate-400 font-normal ml-1.5 text-xs">(복수 선택 가능)</span>
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {docTypes.map((t) => (
                            <button
                              key={t}
                              onClick={() => toggleArr("docType", t)}
                              className={`px-4 py-2 rounded-xl text-sm font-medium border transition-colors ${
                                form.docType.includes(t)
                                  ? "bg-blue-700 text-white border-blue-700"
                                  : "bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50"
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* 분량 */}
                      <div className="mb-7">
                        <label className="block text-sm font-bold text-slate-800 mb-1.5">
                          예상 처리 분량 <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {volumeOptions.map((v) => (
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
                          원하는 출력 포맷
                          <span className="text-slate-400 font-normal ml-1.5 text-xs">(복수 선택 가능)</span>
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {outputFormats.map((f) => (
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
                        <label className="block text-sm font-bold text-slate-800 mb-1.5">희망 납기</label>
                        <div className="flex flex-wrap gap-2">
                          {deadlineOptions.map((d) => (
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
                        <label className="block text-sm font-bold text-slate-800 mb-1.5">추가 요청 사항</label>
                        <textarea
                          value={form.specialNotes}
                          onChange={(e) => setForm((p) => ({ ...p, specialNotes: e.target.value }))}
                          rows={3}
                          placeholder="특별한 요구사항, 자료 설명, 보안 요건 등을 자유롭게 입력해 주세요."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm resize-none transition"
                        />
                      </div>

                      <div className="flex justify-between">
                        <button
                          onClick={() => setStep(1)}
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors"
                        >
                          <ArrowLeft size={15} /> 이전
                        </button>
                        <button
                          onClick={() => setStep(3)}
                          disabled={!canNext2}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-700 text-white font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-800 transition-colors"
                        >
                          다음 단계 <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ── 스텝 3: 연락처 ── */}
                  {step === 3 && (
                    <div>
                      <h2 className="text-xl font-black text-slate-900 mb-1">연락처 정보</h2>
                      <p className="text-slate-500 text-sm mb-7">
                        견적 결과와 샘플 처리 결과를 안내해 드릴 연락처를 남겨주세요.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">
                            이름 <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                            placeholder="홍길동"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">
                            이메일 <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                            placeholder="hong@company.com"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">연락처</label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                            placeholder="010-0000-0000"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">기관·회사명</label>
                          <input
                            type="text"
                            value={form.company}
                            onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                            placeholder="(주)회사명 또는 기관명"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition"
                          />
                        </div>
                      </div>

                      <div className="mb-7">
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">직책·역할</label>
                        <input
                          type="text"
                          value={form.role}
                          onChange={(e) => setForm((p) => ({ ...p, role: e.target.value }))}
                          placeholder="담당자, 연구원, 사서 등"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition"
                        />
                      </div>

                      {error && (
                        <p className="text-red-500 text-sm mb-4">
                          전송 중 오류가 발생했습니다. 다시 시도하거나 직접 이메일로 문의해 주세요.
                        </p>
                      )}

                      <div className="flex justify-between">
                        <button
                          onClick={() => setStep(2)}
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors"
                        >
                          <ArrowLeft size={15} /> 이전
                        </button>
                        <button
                          onClick={handleSubmit}
                          disabled={!canSubmit || loading}
                          className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-blue-700 text-white font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-800 transition-colors"
                        >
                          {loading ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              제출 중...
                            </>
                          ) : (
                            <>
                              신청 완료 <Send size={15} />
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

            {/* 신청 내용 요약 (스텝 2, 3에서 표시) */}
            {step > 1 && !submitted && (
              <div className="bg-white rounded-2xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900 text-sm mb-3">신청 내용 요약</h3>
                <div className="space-y-2">
                  {selectedService && (
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">서비스 유형</span>
                      <span className="text-slate-900 font-semibold">{selectedService.title}</span>
                    </div>
                  )}
                  {form.docType.length > 0 && (
                    <div className="flex justify-between items-start gap-2 text-xs">
                      <span className="text-slate-500 flex-shrink-0">자료 유형</span>
                      <span className="text-slate-900 font-medium text-right">{form.docType.join(", ")}</span>
                    </div>
                  )}
                  {form.volume && (
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">분량</span>
                      <span className="text-slate-900 font-semibold">{form.volume}</span>
                    </div>
                  )}
                  {form.deadline && (
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">납기</span>
                      <span className="text-slate-900 font-semibold">{form.deadline}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 신청 후 절차 */}
            <div
              className="rounded-2xl p-5 text-white"
              style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%)" }}
            >
              <h3 className="font-bold text-sm mb-4">신청 후 절차</h3>
              <ol className="space-y-3">
                {[
                  { n: 1, text: "담당 컨설턴트 배정" },
                  { n: 2, text: "샘플 자료 무료 처리·정확도 확인" },
                  { n: 3, text: "맞춤 견적서 발송" },
                  { n: 4, text: "계약 체결 및 프로젝트 시작" },
                ].map((item) => (
                  <li key={item.n} className="flex items-center gap-2.5 text-xs">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                      {item.n}
                    </div>
                    <span className="text-blue-100">{item.text}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* 직접 문의 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-2">직접 문의하기</h3>
              <p className="text-slate-500 text-xs mb-3 leading-relaxed">
                신청 전 궁금한 점이 있으시면 이메일로 연락 주세요. 빠르게 답변드립니다.
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
