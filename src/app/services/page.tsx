"use client";

import Link from "next/link";
import {
  ArrowLeft, ArrowRight, CheckCircle, Database, Cpu,
  FileText, Zap, Shield, Clock, Users, Award,
  Globe, Code2, BookOpen, Building2, ChevronRight,
} from "lucide-react";

const kpoServices = [
  {
    name: "고문헌 텍스트 DB 구축",
    desc: "한자·옛한글·필사체 포함 전 고문헌 자료의 AI OCR + 전문가 검수 + 최종 납품",
  },
  {
    name: "현대자료 디지털화",
    desc: "기관 소장 행정문서·단행본·신문·잡지의 대량 텍스트 추출 및 메타데이터 생성",
  },
  {
    name: "데이터 가공·변환",
    desc: "XML·JSON·Excel·CSV 등 요구 포맷으로 구조화 변환 및 품질 검수",
  },
  {
    name: "디지털 아카이브 구축",
    desc: "기관 특성에 맞는 검색 가능한 아카이브 시스템 설계 및 구축 대행",
  },
];

const ocrServices = [
  {
    name: "고문헌 특화 OCR",
    desc: "한문·옛한글·세로쓰기·필사체 전용 딥러닝 모델, F1 Score 0.96+",
  },
  {
    name: "현대문서 OCR",
    desc: "행정서류·단행본·잡지·신문 등 대용량 고속 처리",
  },
  {
    name: "OCR API 연동",
    desc: "REST API로 기존 시스템에 즉시 통합 가능한 맞춤형 파이프라인",
  },
  {
    name: "On-Premise 구축",
    desc: "내부망 보안 환경에서 운영 가능한 독립형 솔루션 설치",
  },
];

const processSteps = [
  {
    step: "01",
    title: "서비스 상담",
    desc: "자료 유형, 분량, 요구사항을 파악하고 최적 솔루션을 제안합니다",
    icon: Users,
  },
  {
    step: "02",
    title: "샘플 분석",
    desc: "실제 자료 샘플로 OCR 정확도를 사전 검증하고 견적을 산출합니다",
    icon: Cpu,
  },
  {
    step: "03",
    title: "처리 및 검수",
    desc: "AI OCR 처리 후 전문가 검수를 통해 최고 품질을 보장합니다",
    icon: CheckCircle,
  },
  {
    step: "04",
    title: "서비스 제공",
    desc: "요청 포맷으로 데이터를 가공하여 납품하고 사후 지원을 제공합니다",
    icon: Award,
  },
];

const features = [
  {
    icon: Award,
    title: "F1 Score 0.964",
    desc: "3년 연속 국립중앙도서관 선행사업 평균 인식 정확도",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: Zap,
    title: "고속 대량 처리",
    desc: "페이지당 평균 2초, 클라우드 병렬 처리로 수십만 페이지 처리 가능",
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    icon: Shield,
    title: "보안 배포",
    desc: "On-Premise·Cloud 모두 지원, 기밀 자료의 내부망 처리 가능",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
  },
  {
    icon: Code2,
    title: "API 연동",
    desc: "REST API로 기존 DMS·아카이브 시스템에 즉시 통합 가능",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    icon: Database,
    title: "다양한 출력 포맷",
    desc: "TEI-XML·JSON·Excel·CSV·검색 가능 PDF 등 요구 포맷 맞춤 지원",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
  },
  {
    icon: Clock,
    title: "24시간 내 답변",
    desc: "평일 기준 견적 요청 24시간 내 전담 컨설턴트가 연락드립니다",
    color: "text-pink-600",
    bg: "bg-pink-50",
    border: "border-pink-100",
  },
];

const industries = [
  { icon: BookOpen, label: "국가 도서관·문화원", desc: "고문헌 디지털 아카이빙" },
  { icon: Building2, label: "대학·연구기관", desc: "학술 자료 데이터화" },
  { icon: FileText, label: "출판사·미디어", desc: "콘텐츠 디지털화·활용" },
  { icon: Globe, label: "공공기관·지자체", desc: "행정문서 관리 시스템" },
];

const stats = [
  { value: "5M+", label: "처리 페이지" },
  { value: "50+", label: "도입 기관" },
  { value: "0.964", label: "평균 F1 Score" },
  { value: "3년", label: "국립중앙도서관 연속 수주" },
];

export default function ServicesPage() {
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
            홈으로
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
            서비스 신청 <ArrowRight size={14} />
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
        {/* 배경 오브 */}
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
          {/* 격자 패턴 */}
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
            <span className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase">Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-[1.15]">
            문서 디지털화의
            <br />
            <span className="bg-gradient-to-r from-sky-400 to-blue-300 bg-clip-text text-transparent">
              모든 것을 해결합니다
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-12">
            스캔 입력부터 AI OCR, 전문가 검수, 최종 납품까지 —<br className="hidden sm:block" />
            탱고인사이트의 엔드투엔드 서비스로 복잡한 문서 디지털화를 단번에 해결하세요.
          </p>

          {/* 핵심 수치 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((s) => (
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
              서비스 구성
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">두 가지 핵심 서비스</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
              KPO 아웃소싱 서비스와 AI OCR 솔루션으로 고객의 모든 문서 디지털화 수요를 충족합니다.
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
                  KPO 서비스
                </span>
                <h3 className="text-2xl font-black text-white mb-3">지식 프로세스 아웃소싱</h3>
                <p className="text-blue-100/80 text-sm leading-relaxed">
                  스캔부터 최종 납품까지 전 과정을 탱고인사이트가 대행합니다.
                  기관은 핵심 업무에 집중하세요.
                </p>
              </div>
              <div className="p-6 bg-slate-50">
                <ul className="space-y-3.5">
                  {kpoServices.map((s) => (
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
                  AI OCR 솔루션
                </span>
                <h3 className="text-2xl font-black text-white mb-3">Data-Adaptive OCR</h3>
                <p className="text-violet-100/80 text-sm leading-relaxed">
                  딥러닝이 자료 특성에 스스로 적응하는 AI OCR.
                  API 또는 독립 솔루션으로 제공됩니다.
                </p>
              </div>
              <div className="p-6 bg-slate-50">
                <ul className="space-y-3.5">
                  {ocrServices.map((s) => (
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
              서비스 절차
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">4단계 프로세스</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">
              신청 후 전담 컨설턴트가 배정되어 전 과정을 안내합니다.
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
              서비스 특장점
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">
              왜 탱고인사이트인가
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">
              10년 이상의 고문헌 디지털화 경험과 최신 AI 기술이 결합된 차별화된 서비스
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
              적용 분야
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">
              다양한 기관에서 활용 중
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">
              50개 이상의 기관이 탱고인사이트의 서비스로 디지털 전환을 완료했습니다.
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
            지금 바로 시작하세요
          </h2>
          <p className="text-slate-300 mb-10 leading-relaxed text-sm sm:text-base">
            자료 특성과 요구사항을 알려주시면 맞춤 견적과 샘플 처리 결과를 무료로 제공합니다.
            <br className="hidden sm:block" />
            평일 기준 24시간 내 전담 컨설턴트가 연락드립니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base transition-colors shadow-lg shadow-blue-900/40"
            >
              서비스 신청하기 <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base transition-colors border border-white/20"
            >
              먼저 문의하기
            </Link>
          </div>
        </div>
      </section>

      {/* ── 푸터 ── */}
      <footer className="bg-slate-900 text-slate-500 py-8 px-6 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs">© 2025 탱고인사이트(Tangoinsight). All rights reserved.</p>
          <div className="flex gap-5 text-xs">
            <Link href="/" className="hover:text-white transition-colors">홈</Link>
            <Link href="/company" className="hover:text-white transition-colors">회사소개</Link>
            <Link href="/solutions" className="hover:text-white transition-colors">솔루션</Link>
            <Link href="/apply" className="hover:text-white transition-colors">서비스 신청</Link>
            <Link href="/contact" className="hover:text-white transition-colors">문의하기</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
