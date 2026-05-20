"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft, GitBranch, PenLine, ScanSearch, Braces,
  Layers, Newspaper, BrainCircuit, ChevronRight, Check,
  Briefcase, ShieldCheck, BookOpen, ClipboardCheck, Package, Settings,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ─────────────────────────────────────────────
   타입 정의
───────────────────────────────────────────── */
type SolBase = {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  bg: string;
  orbs: [string, string, string];
  accent: string;
  tag: string;
};

type ProcessItem = {
  icon: LucideIcon;
  label: string;
  items: string[];
};

type EditorFeature = {
  icon: string;
  name: string;
  desc: string;
  stage?: string;
};

type OcrStep = {
  label: string;
  value: string;
  width: string;
  highlight?: boolean;
};

type SimpleFeature = {
  icon: string;
  name: string;
  desc: string;
};

type BatchOutput = {
  icon: string;
  name: string;
  desc: string;
};

type Capability = {
  icon: string;
  name: string;
  desc: string;
};

type WorkflowSol  = SolBase & { kind: "workflow";  processes: ProcessItem[]; automation: string[] };
type EditorSol    = SolBase & { kind: "editor";    features: EditorFeature[] };
type OcrSol       = SolBase & { kind: "ocr";       f1Score: string; features: string[]; accuracySteps: OcrStep[] };
type XmlSol       = SolBase & { kind: "xml";       features: SimpleFeature[] };
type BatchSol     = SolBase & { kind: "batch";     outputs: BatchOutput[] };
type ArticloSol   = SolBase & { kind: "articlo";   features: SimpleFeature[] };
type ExplorerSol  = SolBase & { kind: "explorer";  capabilities: Capability[] };

type AnySolution =
  | WorkflowSol | EditorSol | OcrSol | XmlSol
  | BatchSol | ArticloSol | ExplorerSol;

/* ─────────────────────────────────────────────
   솔루션 데이터
───────────────────────────────────────────── */
const solutions: AnySolution[] = [
  {
    kind: "workflow",
    id: "tango-workflow", icon: GitBranch,
    title: "Tango Workflow", subtitle: "통합 공정 워크플로우 관리",
    badge: "Plug in Program",
    description: "MooN Editor, AI OCR, Tango Batch를 자동 연계하는 통합 워크플로우 시스템. 사업관리부터 납품까지 전 공정을 일원화하여 품질과 효율을 동시에 잡습니다.",
    bg: "linear-gradient(135deg, #0a1628 0%, #0f2d6b 35%, #1a56c4 65%, #0ea5e9 100%)",
    orbs: ["rgba(29,78,216,0.55)", "rgba(14,165,233,0.40)", "rgba(99,102,241,0.30)"],
    accent: "#38bdf8", tag: "blue",
    processes: [
      { icon: Briefcase,      label: "사업관리",  items: ["사업 등록/관리 및 장서 등록/관리", "일정·작업실적 모니터링", "공정별 작업배분 및 권한 관리", "작업자/점검자 ID/PASS 로그인"] },
      { icon: ShieldCheck,    label: "품질관리",  items: ["전체 공정 통합 계획 수립", "검증된 노하우 기반 품질 관리", "공정별 품질 지표 실시간 집계"] },
      { icon: BookOpen,       label: "목록관리",  items: ["대상자료 자동 등록/관리", "반출·반납·반출일 관리", "중복/단권본 자동 검출", "일괄반입/엑셀출력/인쇄출력"] },
      { icon: ClipboardCheck, label: "점검관리",  items: ["점검 차수 관리", "점검상세항목 등록(기울기·판독·여백 등)", "오류유형 체크 및 자동 반려", "점검내역 엑셀출력/인쇄"] },
      { icon: Package,        label: "납품관리",  items: ["차수별 워크시트 제공(대시보드)", "최종인과 기반 검수용 검증", "납품목록 및 통계제공"] },
      { icon: Settings,       label: "구축관리",  items: ["작업확정 목록 등록", "각 공정별 작업 상세 내역 등록", "작업이력 조회·점검이관·공정별 트래킹"] },
    ],
    automation: [
      "대상자료 자동 등록/관리", "중복·불필요 업무 최소화", "대용량 파일 업로더 기능 적용",
      "자동 작업분배", "저작권 조사 확인", "검수용 검증 기능",
      "작업이력 조회 기능", "통계 모니터링을 통한 리스크 최소화", "협업관리를 위한 커뮤니티 기능",
    ],
  },
  {
    kind: "editor",
    id: "moon-editor", icon: PenLine,
    title: "MooN Editor", subtitle: "AI OCR 기반 원문 교정·편집 시스템",
    badge: "Plug in Program",
    description: "MooN AI OCR로 인식된 원문 데이터를 정밀 편집하는 전문 에디터. 군집검수·날자정정·문단정제로 최고 수준의 텍스트 품질을 실현합니다.",
    bg: "linear-gradient(135deg, #1a0533 0%, #4c1d95 35%, #7c3aed 65%, #a855f7 100%)",
    orbs: ["rgba(124,58,237,0.55)", "rgba(168,85,247,0.40)", "rgba(196,181,253,0.20)"],
    accent: "#c084fc", tag: "violet",
    features: [
      { icon: "🔍", name: "AI OCR",    stage: "AI OCR 입력",          desc: "학습 데이터를 토대로 이미지상의 글자를 자동으로 인식하여 입력" },
      { icon: "🎯", name: "군집검수",  stage: "Full Text 교정/교열",   desc: "같은 모양으로 인식한 글자들을 모아 한번에 수정. 에디터 상에서 '딜일이미지'로 표현" },
      { icon: "✏️", name: "날자정정",  stage: "Full Text 교정/교열",   desc: "개별 글자의 텍스트를 선택·수정. 날자별 교정으로 학습된 인식 오류를 정밀 처리" },
      { icon: "📝", name: "문단정제",  stage: "문단 정제",              desc: "가로쓰기·세로쓰기 혼용 및 1~4단 고문헌에 최적화된 문단 구축·정제" },
    ],
  },
  {
    kind: "ocr",
    id: "moon-ai-ocr", icon: ScanSearch,
    title: "MooN AI OCR", subtitle: "딥러닝 기반 고정밀 AI 문자 인식",
    badge: "Plug in Program",
    description: "탱고인사이트가 자체 개발한 Data-Adaptive OCR 엔진. 국·漢文 혼용, 필기체, 고문헌 등 어떠한 문서도 스스로 학습하며 인식률을 높입니다.",
    bg: "linear-gradient(135deg, #061b2e 0%, #0c4a6e 35%, #0284c7 65%, #06b6d4 100%)",
    orbs: ["rgba(3,105,161,0.55)", "rgba(6,182,212,0.40)", "rgba(56,189,248,0.30)"],
    accent: "#38bdf8", tag: "sky",
    f1Score: "0.964",
    features: [
      "탱고인사이트 개발 MooN AI OCR 엔진 직접 적용",
      "폴더 단위 배치 — Text PDF·XML 파일 일괄 생성",
      "유형별 OCR 자동 인식 및 오류 패턴 자동 확인",
      "오류문자 이미지 자동추출 + 머신러닝·딥러닝 기법으로 교정",
      "데이터 자기학습으로 엔진 성능 지속 자동 업데이트",
      "국·漢文 혼용·필기체·고문헌 등 학습 — 인식률 90% 이상",
    ],
    accuracySteps: [
      { label: "1차 학습", value: "85.14%", width: "85" },
      { label: "2차 학습", value: "92.71%", width: "92" },
      { label: "3차 학습", value: "95.83%", width: "95", highlight: true },
    ],
  },
  {
    kind: "xml",
    id: "tango-xml", icon: Braces,
    title: "Tango XML(JSON)", subtitle: "지능형 구조화 데이터 변환 엔진",
    badge: "Plug in Program",
    description: "문서를 표준 XML 구조화 파일로 변환하고 의미 기반 JSON으로 자동 출력합니다. 자동 XML Tagging으로 수작업 태깅 시간을 획기적으로 절감합니다.",
    bg: "linear-gradient(135deg, #022c22 0%, #065f46 35%, #059669 65%, #34d399 100%)",
    orbs: ["rgba(5,150,105,0.55)", "rgba(52,211,153,0.40)", "rgba(110,231,183,0.25)"],
    accent: "#34d399", tag: "emerald",
    features: [
      { icon: "📄", name: "XML 구조화 파일 변환", desc: "원본 문서를 DTD/XSD 기반 XML 구조로 자동 변환하여 표준화된 데이터 형식 제공" },
      { icon: "🏷️", name: "자동 XML Tagging",    desc: "문서 내 요소를 AI로 자동 분류하고 XML 태그를 지정 — 수작업 태깅 시간 90% 절감" },
      { icon: "⚡", name: "의미기반 JSON 변환",    desc: "문서의 의미 구조를 분석하여 JSON으로 변환, API 연계 및 DB 적재 즉시 가능" },
    ],
  },
  {
    kind: "batch",
    id: "tango-batch", icon: Layers,
    title: "Tango Batch", subtitle: "대용량 문서 일괄 처리 엔진",
    badge: "Plug in Program",
    description: "수십만 페이지를 한번에 처리하는 고성능 배치 엔진. XML·JSON·TXT 생성부터 이미지 추출, Hidden Text PDF까지 원스톱으로 완성합니다.",
    bg: "linear-gradient(135deg, #2d0f00 0%, #7c2d12 35%, #c2410c 65%, #fb923c 100%)",
    orbs: ["rgba(194,65,12,0.55)", "rgba(251,146,60,0.40)", "rgba(253,186,116,0.25)"],
    accent: "#fb923c", tag: "orange",
    outputs: [
      { icon: "📊", name: "결과물 XML/JSON/TXT 생성",   desc: "OCR·편집 완료 데이터를 XML, JSON, TXT 3가지 형식으로 일괄 출력" },
      { icon: "🖼️", name: "표·이미지, 글자 Image 추출", desc: "문서 내 표·그림·글자 이미지를 페이지별로 분리하여 독립 파일 저장" },
      { icon: "📑", name: "Hidden Text PDF 생성",       desc: "원본 이미지 위에 텍스트 레이어를 삽입한 검색 가능한 PDF 자동 생성" },
      { icon: "📚", name: "서지 정보 목록 추출",         desc: "제목·저자·발행년도 등 서지 메타데이터를 자동 추출하여 목록 파일 생성" },
      { icon: "📈", name: "통계 산출",                  desc: "처리 건수·인식률·오류율 등 배치 처리 전체 통계를 자동 리포트로 생성" },
    ],
  },
  {
    kind: "articlo",
    id: "tango-articlo", icon: Newspaper,
    title: "Tango Articlo", subtitle: "지능형 기사 단위 데이터 분리",
    badge: "Plug in Program",
    description: "신문·잡지·연속간행물을 기사 단위로 자동 분리합니다. 면 단위 저작권 상태별 분리까지 지원하여 디지털 아카이브 구축을 완성합니다.",
    bg: "linear-gradient(135deg, #2d0010 0%, #881337 35%, #be123c 65%, #fb7185 100%)",
    orbs: ["rgba(190,18,60,0.55)", "rgba(251,113,133,0.40)", "rgba(253,164,175,0.25)"],
    accent: "#fb7185", tag: "rose",
    features: [
      { icon: "📰", name: "기사 단위 데이터 분리",       desc: "면 단위 원본 이미지에서 AI로 개별 기사를 감지하여 자동 분리·추출" },
      { icon: "🖼️", name: "글자 Image·표·이미지 추출",  desc: "(기사단위) 글자Image, 표, 이미지를 각각 분리하여 개별 파일로 저장" },
      { icon: "📂", name: "JPG/TXT/JSON/XML/PDF 분리",  desc: "필요한 형식으로 즉시 변환, 멀티포맷 동시 출력 지원" },
      { icon: "⚖️", name: "면 단위 저작권 상태별 분리",  desc: "저작권 상태(보호기간·공공영역 등)에 따라 면 단위 자동 분류 처리" },
    ],
  },
  {
    kind: "explorer",
    id: "moon-ai-explorer", icon: BrainCircuit,
    title: "Moon AI Explorer", subtitle: "AI 기반 지식 탐색·번역 플랫폼",
    badge: "Plug in Program",
    description: "구축된 디지털 아카이브 데이터를 AI로 탐색하고 번역합니다. 한국어·영어 번역부터 특정 주제 질의응답까지, 데이터의 가치를 극대화합니다.",
    bg: "linear-gradient(135deg, #0f0a2e 0%, #312e81 35%, #4338ca 65%, #818cf8 100%)",
    orbs: ["rgba(67,56,202,0.55)", "rgba(129,140,248,0.40)", "rgba(196,181,253,0.25)"],
    accent: "#818cf8", tag: "indigo",
    capabilities: [
      { icon: "🇰🇷", name: "현대 한국어 번역",   desc: "고문헌·근대문서의 내용을 현대 한국어로 자동 번역하여 접근성 극대화" },
      { icon: "🌐",  name: "영어 번역",           desc: "구축 데이터를 영어로 번역하여 국제 연구 및 글로벌 서비스 지원" },
      { icon: "⚡",  name: "데이터 구조화(JSON)", desc: "번역·분석 결과를 JSON으로 구조화하여 즉시 API 활용 가능" },
      { icon: "🗄️", name: "아카이브 관리·탐색",  desc: "대용량 구축 데이터를 체계적으로 관리하고 키워드·분류 기반 검색" },
      { icon: "🤖",  name: "특정 주제 질의응답",  desc: "RAG 기반 AI로 방대한 문서에서 원하는 정보를 자연어로 즉시 답변" },
    ],
  },
];

/* ─────────────────────────────────────────────
   섹션 콘텐츠 렌더러
───────────────────────────────────────────── */
function SectionContent({ sol }: { sol: AnySolution }) {
  const accent = sol.accent;

  if (sol.kind === "workflow") {
    return (
      <div className="flex flex-col gap-12">
        <div>
          <SectionLabel accent={accent}>6대 공정 관리</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {sol.processes.map((p) => {
              const PIcon = p.icon;
              return (
                <div key={p.label} className="rounded-2xl p-5 border border-white/6 hover:border-white/12 transition-colors"
                  style={{ background: "rgba(255,255,255,0.03)" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: `${accent}20` }}>
                      <PIcon size={15} style={{ color: accent }} />
                    </div>
                    <h3 className="font-bold text-white text-sm">{p.label}</h3>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-white/50">
                        <ChevronRight size={12} className="mt-0.5 flex-shrink-0" style={{ color: accent }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <SectionLabel accent={accent}>구축 자동화 시스템을 통한 스마트 공정 구현</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
            {sol.automation.map((item) => (
              <div key={item} className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/6 text-sm text-white/70"
                style={{ background: "rgba(255,255,255,0.03)" }}>
                <Check size={14} className="flex-shrink-0" style={{ color: accent }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (sol.kind === "editor") {
    return (
      <div>
        <SectionLabel accent={accent}>주요 기능</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
          {sol.features.map((f) => (
            <div key={f.name} className="rounded-2xl p-6 border border-white/6 hover:border-white/12 hover:-translate-y-0.5 transition-all group"
              style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{f.icon}</span>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-white text-base">{f.name}</h3>
                    {f.stage && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                        style={{ background: `${accent}20`, color: accent }}>
                        {f.stage}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-white/55 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (sol.kind === "ocr") {
    return (
      <div className="flex flex-col gap-12">
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          <div className="flex-shrink-0 flex flex-col items-center justify-center w-44 h-44 rounded-full border-4"
            style={{ borderColor: `${accent}50`, background: `${accent}10`, boxShadow: `0 0 60px ${accent}30` }}>
            <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">평균 F1 Score</p>
            <p className="text-4xl font-black" style={{ color: accent }}>{sol.f1Score}</p>
          </div>
          <div className="flex-1">
            <SectionLabel accent={accent}>주요 기능</SectionLabel>
            <ul className="mt-4 flex flex-col gap-2.5">
              {sol.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-white/60">
                  <Check size={14} className="mt-0.5 flex-shrink-0" style={{ color: accent }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <SectionLabel accent={accent}>3차 재학습을 통한 인식률 상승 (고문헌 기준)</SectionLabel>
          <div className="mt-6 flex flex-col gap-4">
            {sol.accuracySteps.map((step) => (
              <div key={step.label} className="flex items-center gap-4">
                <span className="text-sm text-white/50 w-20 flex-shrink-0">{step.label}</span>
                <div className="flex-1 h-9 rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <div className="h-full rounded-xl flex items-center px-4"
                    style={{ width: `${step.width}%`, background: step.highlight ? `linear-gradient(90deg,${accent}80,${accent})` : `${accent}40` }}>
                    <span className={`text-sm font-black ${step.highlight ? "text-white" : "text-white/60"}`}>{step.value}</span>
                  </div>
                </div>
                {step.highlight && (
                  <span className="text-xs font-bold text-white bg-sky-500/20 px-2 py-1 rounded-lg border border-sky-400/30">
                    최고 인식률
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-white/30">* 2025년 고문헌(근대자료) 원문 텍스트 데이터 베이스 구축 사업 기준 (동일 데이터 셋, 동일 평가 기준)</p>
        </div>
      </div>
    );
  }

  if (sol.kind === "xml") {
    return (
      <div>
        <SectionLabel accent={accent}>핵심 기능</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          {sol.features.map((f) => (
            <div key={f.name} className="rounded-2xl p-6 border border-white/6 hover:border-white/15 hover:-translate-y-1 transition-all group"
              style={{ background: "rgba(255,255,255,0.03)" }}>
              <span className="text-4xl block mb-4">{f.icon}</span>
              <h3 className="font-bold text-white mb-2">{f.name}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (sol.kind === "batch") {
    return (
      <div>
        <SectionLabel accent={accent}>출력물 유형</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {sol.outputs.map((o, i) => (
            <div key={o.name} className="relative rounded-2xl p-6 border border-white/6 hover:border-white/15 hover:-translate-y-1 transition-all group overflow-hidden"
              style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="absolute top-3 right-4 text-5xl opacity-10 group-hover:opacity-20 transition-opacity font-black text-white">
                {String(i + 1).padStart(2, "0")}
              </div>
              <span className="text-3xl block mb-3">{o.icon}</span>
              <h3 className="font-bold text-white text-sm mb-2">{o.name}</h3>
              <p className="text-xs text-white/50 leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (sol.kind === "articlo") {
    return (
      <div>
        <SectionLabel accent={accent}>주요 기능</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
          {sol.features.map((f) => (
            <div key={f.name} className="flex gap-4 rounded-2xl p-6 border border-white/6 hover:border-white/12 hover:-translate-y-0.5 transition-all"
              style={{ background: "rgba(255,255,255,0.03)" }}>
              <span className="text-3xl flex-shrink-0">{f.icon}</span>
              <div>
                <h3 className="font-bold text-white mb-1.5">{f.name}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (sol.kind === "explorer") {
    return (
      <div>
        <SectionLabel accent={accent}>AI 핵심 역량</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {sol.capabilities.map((c) => (
            <div key={c.name} className="rounded-2xl p-6 border border-white/6 hover:border-white/15 hover:-translate-y-1 transition-all group"
              style={{ background: "rgba(255,255,255,0.03)" }}>
              <span className="text-4xl block mb-4">{c.icon}</span>
              <h3 className="font-bold text-white mb-2">{c.name}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

function SectionLabel({ accent, children }: { accent: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px w-6 rounded-full" style={{ background: accent }} />
      <h2 className="text-sm font-bold uppercase tracking-widest" style={{ color: accent }}>{children}</h2>
    </div>
  );
}

/* ─────────────────────────────────────────────
   메인 컴포넌트
───────────────────────────────────────────── */
export default function SolutionsPage() {
  const [activeId, setActiveId] = useState("tango-workflow");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveId(e.target.id); });
      },
      { threshold: 0.4 }
    );
    solutions.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen">

      {/* 상단 헤더 */}
      <div className="sticky top-0 z-50 border-b border-white/8"
        style={{ background: "rgba(10,12,26,0.92)", backdropFilter: "blur(16px)" }}>
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-sky-300 transition-colors text-sm font-medium group">
            <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
            홈으로
          </Link>

          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide flex-1 justify-center">
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" })}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    activeId === s.id ? "text-white" : "text-white/40 hover:text-white/70"
                  }`}
                  style={activeId === s.id ? { background: "rgba(255,255,255,0.1)" } : {}}
                >
                  <Icon size={12} />
                  {s.title}
                </button>
              );
            })}
          </div>

          <span className="text-sm font-black tracking-tight whitespace-nowrap" style={{ fontFamily: "'Sora', sans-serif" }}>
            <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">Tango</span>
            {" "}
            <span className="text-white/70">Insight</span>
          </span>
        </div>
      </div>

      {/* 솔루션 섹션 */}
      {solutions.map((sol, idx) => {
        const Icon = sol.icon;
        return (
          <section key={sol.id} id={sol.id} className="relative overflow-hidden">

            {/* 히어로 */}
            <div className="relative min-h-[520px] flex items-center" style={{ background: sol.bg }}>
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="animate-orb-1 absolute w-[500px] h-[500px] rounded-full blur-[120px] -top-32 -left-32"
                  style={{ background: sol.orbs[0] }} />
                <div className="animate-orb-2 absolute w-[400px] h-[400px] rounded-full blur-[100px] -bottom-20 -right-20"
                  style={{ background: sol.orbs[1] }} />
                <div className="animate-orb-3 absolute w-[300px] h-[300px] rounded-full blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ background: sol.orbs[2] }} />
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
              </div>

              <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-20 w-full">
                <div className="flex flex-col md:flex-row md:items-center gap-10">
                  <div className="flex-1 animate-fade-up">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-full border"
                        style={{ borderColor: `${sol.accent}40`, color: sol.accent, background: `${sol.accent}15` }}>
                        {sol.badge}
                      </span>
                      <span className="text-white/30 text-xs">#{String(idx + 1).padStart(2, "0")}</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-black text-white mb-3 leading-tight">{sol.title}</h1>
                    <p className="text-lg font-semibold mb-5" style={{ color: sol.accent }}>{sol.subtitle}</p>
                    <p className="text-white/60 text-base leading-relaxed max-w-xl">{sol.description}</p>
                  </div>

                  <div className="flex-shrink-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-40 h-40 rounded-3xl flex items-center justify-center animate-glow"
                        style={{ background: `linear-gradient(135deg,${sol.accent}30 0%,${sol.accent}15 100%)`, border: `1px solid ${sol.accent}30`, boxShadow: `0 0 60px ${sol.accent}30` }}>
                        <Icon size={72} style={{ color: sol.accent }} strokeWidth={1.2} />
                      </div>
                      <div className="absolute inset-0 -m-4 rounded-[2.5rem] border opacity-20 animate-pulse"
                        style={{ borderColor: sol.accent }} />
                      <div className="absolute inset-0 -m-8 rounded-[3rem] border opacity-10"
                        style={{ borderColor: sol.accent }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 콘텐츠 */}
            <div className="bg-slate-950" style={{ borderTop: `1px solid ${sol.accent}20` }}>
              <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
                <SectionContent sol={sol} />

                {/* CTA */}
                <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl px-8 py-6 border border-white/8"
                  style={{ background: `linear-gradient(135deg,${sol.accent}10 0%,transparent 60%)` }}>
                  <div>
                    <p className="font-bold text-white text-base">{sol.title} 도입을 검토하시나요?</p>
                    <p className="text-sm text-white/40 mt-0.5">전문 컨설턴트가 맞춤 솔루션을 제안해 드립니다.</p>
                  </div>
                  <Link href="/contact"
                    className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:scale-105"
                    style={{ background: `linear-gradient(135deg,${sol.accent}60,${sol.accent})` }}>
                    무료 상담 문의 <ArrowLeft size={14} className="rotate-180" />
                  </Link>
                </div>
              </div>
            </div>

            {idx < solutions.length - 1 && (
              <div className="h-px" style={{ background: `linear-gradient(90deg,transparent,${sol.accent}30,transparent)` }} />
            )}
          </section>
        );
      })}
    </div>
  );
}
