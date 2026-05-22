"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { Noto_Sans_KR } from "next/font/google";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const categories = ["전체", "서비스 문의", "기술 문의", "구매·계약", "기타"];

const faqs = [
  // ── 서비스 문의 ──
  {
    category: "서비스 문의",
    q: "어떤 종류의 문서를 처리할 수 있나요?",
    a: "고문헌, 근대자료, 현대 인쇄물, 연속간행물, 단행본 등 대부분의 문서 유형을 처리할 수 있습니다. 한자·훈민정음(→옛한글)·세로쓰기·필사체도 지원합니다.",
  },
  {
    category: "서비스 문의",
    q: "시각장애인용 대체자료 제작도 가능한가요?",
    a: "네, 가능합니다. 국립장애인도서관 등 관련 기관과의 협력 경험을 바탕으로, 점자·음성자료 등으로 활용 가능한 시각장애인용 대체자료 제작 서비스를 제공합니다.",
  },
  {
    category: "서비스 문의",
    q: "소량 의뢰도 가능한가요?",
    a: "네, 가능합니다. 소량 작업부터 대량 구축까지 모두 대응 가능하며, 정확한 견적은 문의하기 페이지를 통해 요청해 주세요.",
  },
  {
    category: "서비스 문의",
    q: "작업 전 샘플 테스트가 가능한가요?",
    a: "네, 가능합니다. 본 계약 전 샘플 문서를 제공해 주시면 시범 처리 결과를 통해 품질을 직접 확인하실 수 있습니다. 자세한 안내는 문의하기 페이지를 통해 요청해 주세요.",
  },
  {
    category: "서비스 문의",
    q: "원본 자료는 어떤 형태로 전달해야 하나요?",
    a: "스캔 이미지(TIFF, JPEG, PDF), 마이크로필름 스캔본 등 다양한 형태로 전달 가능합니다. 자료 상태에 따라 최적의 전달 방식을 안내해 드리니 사전 문의를 통해 협의해 주세요.",
  },
  {
    category: "서비스 문의",
    q: "작업 진행 절차는 어떻게 되나요?",
    a: "문의 접수 → 자료 분석 및 견적 안내 → 계약 체결 → AI OCR 처리 → 전문 검수 → 결과물 납품 순서로 진행됩니다. 프로젝트 특성에 따라 파일럿 테스트 단계가 추가될 수 있습니다.",
  },
  // ── 기술 문의 ──
  {
    category: "기술 문의",
    q: "MooN AI OCR의 인식 정확도는 어느 정도인가요?",
    a: "고문헌 기준 약 98.7%, 현대 인쇄물 기준 99.5% 이상의 인식 정확도를 제공합니다. 딥러닝 기반 Data-Adaptive 엔진으로 문서 특성에 맞게 최적화됩니다.",
  },
  {
    category: "기술 문의",
    q: "On-Premise(내부 설치형) 방식으로 구축이 가능한가요?",
    a: "네, 가능합니다. 보안성과 기밀성이 요구되는 고객 환경에 맞추어 On-Premise 방식의 구축을 지원합니다. 내부망 환경에서도 안정적으로 운영할 수 있도록 지원합니다.",
  },
  {
    category: "기술 문의",
    q: "처리 속도는 얼마나 되나요?",
    a: "문서 유형과 처리 환경에 따라 차이는 있으나, 평균 2초 이내의 고속 처리가 가능합니다. 수십만 페이지의 대량 프로젝트는 클라우드 분산 처리 방식으로 효율적으로 대응합니다.",
  },
  {
    category: "기술 문의",
    q: "표, 그림, 이미지 자료도 처리할 수 있나요?",
    a: "네, 표 구조 인식 및 이미지 내 텍스트 추출을 지원합니다. 복잡한 레이아웃의 문서도 구조를 유지한 채 디지털화할 수 있으며, 자세한 처리 범위는 문의를 통해 확인해 주세요.",
  },
  {
    category: "기술 문의",
    q: "비영어권 외국 자료도 처리할 수 있나요?",
    a: "한국어 외에도 한자(중문·일문) 등 다양한 언어 자료 처리가 가능합니다. 지원 언어 범위와 정확도는 자료 특성에 따라 다를 수 있으니 문의를 통해 확인해 주세요.",
  },
  // ── 구매·계약 ──
  {
    category: "구매·계약",
    q: "이용 요금은 어떻게 되나요?",
    a: "이용 요금은 처리 건수·면수·문서 유형, 작업 범위에 따라 맞춤형 견적을 제공합니다. 문의하기 페이지를 통해 프로젝트 규모를 알려주시면 맞춤형 견적을 신속히 안내해 드리겠습니다.",
  },
  {
    category: "구매·계약",
    q: "계약 후 납기는 얼마나 걸리나요?",
    a: "납기는 프로젝트 규모, 문서량, 작업 범위에 따라 달라집니다. 계약 후 착수 일정과 납품 일정을 협의하여 확정하며, 긴급 프로젝트의 경우 별도 협의가 가능합니다.",
  },
  // ── 기타 ──
  {
    category: "기타",
    q: "검수 인력이 별도로 있나요?",
    a: "네, 있습니다. AI 처리 결과에 대해 전문 검수 인력이 2차 품질 검증을 수행하며, 오인식·누락·형식 오류 등을 최소화하여 데이터 품질과 신뢰성을 보장합니다.",
  },
  {
    category: "기타",
    q: "결과물 형식은 어떻게 되나요?",
    a: "TXT, XML, JSON, Excel, CSV, PDF 등 고객의 운영 시스템에 맞는 형식으로 납품합니다. 별도의 납품 형식이 필요한 경우 문의 시 말씀해 주세요.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-4 py-5 text-left group"
      >
        {/* Q 뱃지 */}
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-black mt-0.5"
          style={{ background: "linear-gradient(135deg, #1d4ed8, #0ea5e9)", fontFamily: "'Noto Sans KR', sans-serif" }}
        >
          Q
        </span>
        <span className="flex-1 text-slate-800 font-semibold text-sm leading-relaxed group-hover:text-blue-700 transition-colors">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-slate-400 mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="flex gap-4 pb-5">
          {/* A 뱃지 */}
          <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-blue-700 text-xs font-black bg-blue-50 border border-blue-200 mt-0.5"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
            A
          </span>
          <p className="flex-1 text-slate-500 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("전체");

  const filtered =
    activeCategory === "전체"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  return (
    <div className={`min-h-screen ${notoSansKR.className}`} style={{ backgroundColor: "#f7f6f2" }}>

      {/* 상단 헤더 바 */}
      <div
        className="sticky top-0 z-30 border-b border-slate-200/80"
        style={{ background: "rgba(247,246,242,0.92)", backdropFilter: "blur(12px)" }}
      >
        <div className="max-w-3xl mx-auto px-6 sm:px-10 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-700 transition-colors text-sm font-medium group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
            홈으로
          </Link>
          <span
            className="text-base font-black tracking-tight"
            style={{ fontFamily: "'Sora', 'Pretendard', sans-serif" }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">Tango</span>
            {" "}
            <span className="text-slate-900">Insight</span>
          </span>
        </div>
      </div>

      {/* 히어로 배너 */}
      <div
        className="px-6 sm:px-10 py-14"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #0f172a 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-blue-400/60" />
            <span className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase">Support</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3" style={{ letterSpacing: "-0.01em" }}>FAQ</h1>
          <p className="text-slate-400 text-sm font-normal">자주 묻는 질문을 확인해 보세요.</p>
        </div>
      </div>

      {/* 카테고리 탭 */}
      <div className="sticky top-14 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat
                    ? "text-white shadow-md"
                    : "text-slate-500 hover:text-slate-700 bg-slate-100 hover:bg-slate-200"
                }`}
                style={
                  activeCategory === cat
                    ? { background: "linear-gradient(135deg, #1d4ed8, #0ea5e9)" }
                    : {}
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ 목록 */}
      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-8">
        <div className="bg-white rounded-2xl border border-slate-200 px-6 divide-y-0"
          style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
        >
          {filtered.length === 0 ? (
            <p className="py-12 text-center text-slate-400 text-sm">해당 카테고리에 등록된 FAQ가 없습니다.</p>
          ) : (
            filtered.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))
          )}
        </div>

        {/* 하단 문의 유도 */}
        <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-slate-700 font-semibold text-sm">찾으시는 답변이 없으신가요?</p>
            <p className="text-slate-500 text-xs mt-0.5">문의하기를 통해 직접 질문해 주세요.</p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #1d4ed8, #0ea5e9)" }}
          >
            문의하기 →
          </Link>
        </div>
      </div>

    </div>
  );
}
