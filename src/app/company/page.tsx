"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft, ArrowRight, Target,
  BookOpen, Shield, Zap, Users, Award, Calendar,
  Building2, ChevronRight, Sparkles, Globe, Lock,
  Phone, MapPin, Star, FileCheck, CheckCircle2, Trophy,
  Cpu, Database, FileText, Layers,
} from "lucide-react";
import { Noto_Sans_KR } from "next/font/google";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

/* ─── 카운터 애니메이션 ─── */
function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const steps = 60;
        let cur = 0;
        const inc = target / steps;
        const timer = setInterval(() => {
          cur += inc;
          if (cur >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(cur));
        }, 1400 / steps);
      }
    }, { threshold: 0.4 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* ─── 데이터 ─── */
const values = [
  {
    icon: Target,
    title: "정밀성 (Precision)",
    desc: "평균 F1 Score 0.964. 한 글자의 오인식도 연구 결과를 바꿀 수 있습니다. 타협 없는 품질을 추구합니다.",
    gradient: "from-blue-600 to-sky-500",
  },
  {
    icon: Shield,
    title: "신뢰성 (Reliability)",
    desc: "전문 검수 인력의 2차 검증과 체계적인 품질 관리 프로세스로 납품 데이터의 신뢰성을 보장합니다.",
    gradient: "from-indigo-600 to-blue-500",
  },
  {
    icon: Sparkles,
    title: "혁신성 (Innovation)",
    desc: "자기학습 AI 엔진이 처리할수록 더 정확해집니다. 3차 재학습으로 1차 대비 인식률 11%p 향상 달성.",
    gradient: "from-sky-600 to-cyan-500",
  },
];

const technologies = [
  {
    icon: BookOpen,
    tag: "CORE ENGINE",
    title: "Data-Adaptive OCR",
    subtitle: "MooN AI OCR 엔진",
    points: [
      "딥러닝 기반 자기학습 인식 엔진",
      "한자·옛한글·필사체·세로쓰기 지원",
      "고문헌 기준 F1 Score 0.964 평균 정확도",
      "처리할수록 진화하는 문서 특화 AI",
    ],
    accent: "#38bdf8",
  },
  {
    icon: Globe,
    tag: "PLATFORM",
    title: "웹 기반 편집 플랫폼",
    subtitle: "MooN Editor",
    points: [
      "별도 설치 없는 브라우저 기반 검수",
      "원본 레이아웃 보존 PDF 저장",
      "군집 검수·낱자 정정·이미지 연동",
      "다중 작업자 협업 환경 지원",
    ],
    accent: "#818cf8",
  },
  {
    icon: Lock,
    tag: "DEPLOYMENT",
    title: "유연한 배포 환경",
    subtitle: "Cloud & On-Premise",
    points: [
      "기관 내부망 On-Premise 구축 지원",
      "클라우드 분산 처리로 대량 고속 처리",
      "보안·기밀 요구 환경 완벽 대응",
      "TXT·XML·JSON·Excel·PDF 납품 형식",
    ],
    accent: "#34d399",
  },
];

const businessDomains = [
  {
    icon: Database,
    title: "차세대 DB 구축",
    color: "#38bdf8",
    items: ["원문DB 구축", "관계형 DB 구축", "AI 학습용 데이터 구축", "중요기록물 정리·DB 구축"],
  },
  {
    icon: Cpu,
    title: "빅데이터·인공지능",
    color: "#818cf8",
    items: ["빅데이터 수집·분석", "자연어 처리·이동 패턴", "인공지능 기반 분석모델 개발", "데이터분석 시각화"],
  },
  {
    icon: Layers,
    title: "지능형 통합시스템 구축",
    color: "#34d399",
    items: ["지능형 서비스 구축", "최신의 시각화 기술", "Cloud", "Mobile·IoT"],
  },
  {
    icon: FileText,
    title: "시스템 운영",
    color: "#fb923c",
    items: ["시스템 개선", "유지 관리·품질 관리", "솔루션·장비 도입", "Help-Desk 운영"],
  },
];

const services = [
  { icon: BookOpen, title: "고문헌·근대자료 디지털화", desc: "고전적(1600~1910년), 근대잡지(1910~1945년), 근대자료(1900~1960년) 문서 유형별 최적화 처리" },
  { icon: Users,    title: "시각장애인 대체자료 제작", desc: "국립장애인도서관 협력 기반 총 14,624면·10,261,035자 처리. 순수과학·기술·예술·언어 분야 대체자료 제작" },
  { icon: Zap,      title: "대량 DB 구축 & 아카이빙", desc: "국회도서관 원문DB 총 64,555,500면, 단행자료 총 65,055,227면 처리. 수십만 페이지 규모 고속 납품" },
  { icon: Award,    title: "AI 기반 지식 추출", desc: "인식된 문서에서 표·수치 데이터 자동 추출, JSON·XML 구조화 납품. 총 364,500면 JSON 단독 공급 실적" },
];

const clients = [
  {
    name: "국립중앙도서관",
    eng: "National Library of Korea",
    abbr: "국중도",
    stat: "108,594,914면",
    times: 15,
    desc: "AI OCR 및 디지털화",
    highlight: true,
  },
  {
    name: "국회도서관",
    eng: "National Assembly Library",
    abbr: "국회도",
    stat: "78,141,238면",
    times: 11,
    desc: "AI OCR 및 디지털화",
    highlight: false,
  },
  {
    name: "행정안전부 대통령기록관",
    eng: "Ministry of Interior and Safety",
    abbr: "행안부",
    stat: "1,468,278면",
    times: null,
    desc: "AI OCR 및 디지털화",
    highlight: false,
  },
  {
    name: "국립장애인도서관",
    eng: "National Library for the Disabled",
    abbr: "장도관",
    stat: "14,624면",
    times: 2,
    desc: "AI OCR 및 디지털화",
    highlight: false,
  },
];

const stats = [
  { value: 36230147,  suffix: "",   label: "고문헌 AI OCR 누적", unit: "자",  numSize: "text-2xl xl:text-3xl" },
  { value: 260245890, suffix: "",   label: "현대자료 AI OCR 누적", unit: "자", numSize: "text-2xl xl:text-3xl" },
  { value: 50,        suffix: "+",  label: "도입 기관",      unit: "곳",  numSize: "text-5xl xl:text-6xl" },
  { value: 6,         suffix: "년", label: "운영 연수",      unit: "",    numSize: "text-5xl xl:text-6xl" },
];

const certifications = [
  {
    icon: Globe,
    label: "미국 특허",
    value: "US-9483694",
    sub: "IMAGE TEXT SEARCH AND RETRIEVAL SYSTEM",
    color: "#38bdf8",
  },
  {
    icon: FileCheck,
    label: "프로그램 저작권",
    value: "6건",
    sub: "MooN AI OCR·TangoWorkflow 등 자체 IP 보유",
    color: "#818cf8",
  },
  {
    icon: Star,
    label: "기업신용평가등급",
    value: "BB−",
    sub: "나이스디앤비 (유효기간 2026.04.08)",
    color: "#fb923c",
  },
  {
    icon: Trophy,
    label: "국립중앙도서관 표창장",
    value: "2회",
    sub: "2020년 문화체육관광부장관 표창 / 2024년 관장 표창",
    color: "#34d399",
  },
  {
    icon: CheckCircle2,
    label: "중소기업 확인서",
    value: "소상공인",
    sub: "중소벤처기업부 (2025.04 발급)",
    color: "#60a5fa",
  },
  {
    icon: CheckCircle2,
    label: "조달청 경쟁입찰참가자격",
    value: "등록",
    sub: "소프트웨어·데이터베이스서비스 (2022.09~)",
    color: "#a78bfa",
  },
];

const ipAssets = [
  { name: "MooN AI OCR", type: "저작권 등록증", no: "C-2021-011338", color: "#38bdf8" },
  { name: "TangoWorkflow", type: "저작권 등록증", no: "C-2021-011391", color: "#818cf8" },
  { name: "TangoX Batch", type: "프로그램 등록증", no: "C-2014-005875", color: "#34d399" },
  { name: "TangoXML", type: "프로그램 등록증", no: "C-2014-004462", color: "#fb923c" },
  { name: "TangoX Text", type: "프로그램 등록증", no: "C-2013-017520", color: "#f472b6" },
  { name: "ImageRepairBatch", type: "프로그램 등록증", no: "C-2014-004463", color: "#a3e635" },
];

const majorProjects = [
  {
    title: "고문헌(근대자료) 원문 텍스트 DB 구축",
    client: "국립중앙도서관",
    badge: "선행사업 3년 연속",
    badgeColor: "#ef4444",
    rows: [
      { year: "2025", books: "65책", pages: "15,404면", chars: "14,467,147자", f1: "0.958" },
      { year: "2024", books: "55책", pages: "11,799면", chars: "11,682,856자", f1: "0.951" },
      { year: "2023", books: "217책", pages: "13,898면", chars: "10,080,144자", f1: "0.930" },
    ],
  },
  {
    title: "디지털화 원문(현대자료) AI 텍스트 구축",
    client: "국립중앙도서관",
    badge: "선행사업(추경)",
    badgeColor: "#0ea5e9",
    rows: [
      { year: "2025", books: "1,649책", pages: "326,909면", chars: "260,245,890자", f1: "0.946" },
    ],
  },
];

/* ─── 메인 페이지 ─── */
export default function CompanyPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 80;
    type P = { x:number; y:number; vx:number; vy:number; r:number; o:number };
    const pts: P[] = Array.from({ length: COUNT }, () => ({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r:  Math.random() * 1.8 + 0.8,
      o:  Math.random() * 0.5 + 0.15,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99,179,237,${(1 - d / 110) * 0.25})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147,210,250,${p.o})`;
        ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <div className={`min-h-screen bg-white ${notoSansKR.className}`}>

      {/* ── 상단 네비 ── */}
      <nav
        className="sticky top-0 z-30 border-b border-white/10"
        style={{ background: "rgba(15,23,42,0.92)", backdropFilter: "blur(14px)" }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-10 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
            홈으로
          </Link>
          <span className="text-base font-black tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">Tango</span><span className="text-white">Insight</span>
          </span>
          <Link
            href="/contact"
            className="text-sm font-semibold text-white px-4 py-1.5 rounded-full transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #1d4ed8, #0ea5e9)" }}
          >
            문의하기
          </Link>
        </div>
      </nav>

      {/* ── 1. 히어로 ── */}
      <section
        className="relative min-h-[88vh] flex flex-col justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #0c1a35 50%, #0e1f45 80%, #0f172a 100%)" }}
      >
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-900/20 rounded-full blur-3xl pointer-events-none" />
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 sm:px-10 py-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/12 border border-blue-400/25 text-blue-300 text-xs font-bold tracking-[0.2em] uppercase mb-6">
              <Building2 size={13} />
              Company Overview
            </div>

            <h1 className="text-5xl sm:text-7xl font-black text-white mb-4 leading-none tracking-tight"
              style={{ fontFamily: "'Sora', sans-serif" }}>
              <span className="bg-gradient-to-r from-white via-sky-100 to-blue-300 bg-clip-text text-transparent">
                탱고인사이트
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-sky-300 font-semibold mb-6 tracking-tight">
              Tangoinsight Co., Ltd.
            </p>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
              2022년 설립된 <strong className="text-white">AI 기반 문서 데이터화 및 지식 프로세스 아웃소싱(KPO) 전문 기업</strong>입니다.
              딥러닝 기반 Data-Adaptive OCR 기술로 고문헌·현대자료의 전자화를 이끌며,
              국내 최다 실적 AI OCR 사례를 보유하고 있습니다.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-xl shadow-violet-900/50"
                style={{ background: "linear-gradient(135deg, #1d4ed8, #0ea5e9)" }}>
                도입 문의 <ArrowRight size={16} />
              </Link>
              <Link href="/solutions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm border border-white/20 bg-white/[0.08] hover:bg-white/[0.14] transition-all backdrop-blur-sm">
                솔루션 보기 <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          {/* 핵심 수치 바 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
            {[
              { icon: Calendar,  value: "2022",  unit: "년 설립",     label: "설립연도"        },
              { icon: Award,     value: "0.964", unit: "avg F1",     label: "AI OCR 인식 정확도" },
              { icon: Users,     value: "50+",   unit: "개 기관",    label: "도입 기관"       },
              { icon: FileCheck, value: "6",     unit: "건 IP",      label: "프로그램 저작권"   },
            ].map((s) => (
              <div key={s.label}
                className="flex flex-col gap-1 p-5 rounded-2xl bg-white/[0.05] border border-blue-400/15 hover:border-blue-400/35 hover:bg-blue-500/10 transition-all duration-300">
                <s.icon size={16} className="text-sky-400 mb-1" />
                <div className="text-2xl font-black text-white leading-none">
                  {s.value}<span className="text-sky-400 text-sm ml-1">{s.unit}</span>
                </div>
                <div className="text-slate-400 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. 미션 · 비전 · 핵심 가치 ── */}
      <section className="py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
            <div className="p-8 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-blue-500 mb-3">MISSION</div>
              <h2 className="text-2xl font-black text-slate-900 mb-4 leading-snug">
                "모든 역사적 기록이<br />디지털 지식 자산으로"
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                아날로그에 잠들어 있는 인류의 기록을 깨워, 누구나 검색하고 활용할 수 있는
                디지털 지식 자산으로 전환합니다. 탱고인사이트는 그 전환의 가장 신뢰할 수 있는
                파트너가 됩니다.
              </p>
            </div>
            <div className="p-8 rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-indigo-500 mb-3">VISION</div>
              <h2 className="text-2xl font-black text-slate-900 mb-4 leading-snug">
                "AI 기술로 지식의 장벽을<br />허무는 세상"
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                언어·시대·형식의 차이를 AI가 극복하여, 모든 문서 정보가 자유롭게 유통되는
                지식 인프라를 구축합니다. 기관과 연구자가 원본 자료에 담긴 가치를 최대한
                활용할 수 있도록 지원합니다.
              </p>
            </div>
          </div>

          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest bg-slate-100 text-slate-600 mb-3">CORE VALUES</span>
            <h2 className="text-3xl font-black text-slate-900">핵심 가치</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title}
                className="group p-7 rounded-3xl border border-slate-100 bg-slate-50 hover:border-blue-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${v.gradient} flex items-center justify-center mb-5 shadow-md`}>
                  <v.icon size={22} className="text-white" />
                </div>
                <h3 className="font-black text-slate-900 text-base mb-3 group-hover:text-blue-700 transition-colors">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. 기술 역량 (다크) ── */}
      <section className="py-20 px-6 sm:px-10 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #0c1a35 60%, #0f172a 100%)" }}>
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest border border-blue-400/25 bg-blue-500/10 text-blue-400 mb-3">TECHNOLOGY</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">핵심 기술 역량</h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              탱고인사이트의 경쟁력은 기술에서 시작됩니다. 엔진부터 플랫폼, 배포까지 완결된 기술 스택을 보유합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {technologies.map((tech) => (
              <div key={tech.title}
                className="group p-7 rounded-3xl border transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: `linear-gradient(135deg, ${tech.accent}08 0%, transparent 60%)`,
                  borderColor: `${tech.accent}25`,
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = `${tech.accent}50`)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = `${tech.accent}25`)}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: `${tech.accent}20`, border: `1px solid ${tech.accent}30` }}>
                    <tech.icon size={22} style={{ color: tech.accent }} />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.2em] px-2.5 py-1 rounded-full"
                    style={{ color: tech.accent, background: `${tech.accent}15`, border: `1px solid ${tech.accent}20` }}>
                    {tech.tag}
                  </span>
                </div>

                <h3 className="text-white font-black text-lg mb-1">{tech.title}</h3>
                <p className="text-sm font-semibold mb-5" style={{ color: tech.accent }}>{tech.subtitle}</p>

                <ul className="space-y-2.5">
                  {tech.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-slate-400 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: tech.accent }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. 주요 사업 분야 ── */}
      <section className="py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest bg-blue-100 text-blue-700 border border-blue-200 mb-3">BUSINESS DOMAIN</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">주요 사업 분야</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              IT 분야의 전문성을 보유한 빅데이터·인공지능 기반 최신기술 보유 기업
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {businessDomains.map((domain) => (
              <div key={domain.title}
                className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-blue-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${domain.color}20`, border: `1px solid ${domain.color}30` }}>
                  <domain.icon size={20} style={{ color: domain.color }} />
                </div>
                <h3 className="font-black text-slate-900 text-sm mb-4">{domain.title}</h3>
                <ul className="space-y-1.5">
                  {domain.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-500 text-xs">
                      <span className="w-1 h-1 rounded-full shrink-0" style={{ background: domain.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. 사업 영역 ── */}
      <section className="py-20 px-6 sm:px-10 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest bg-blue-100 text-blue-700 border border-blue-200 mb-3">SERVICES</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">서비스 영역</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              고문헌부터 현대 인쇄물까지, 다양한 문서 유형에 걸쳐 폭넓은 디지털화 서비스를 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((svc) => (
              <div key={svc.title}
                className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 to-sky-500 flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                  <svc.icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1.5">{svc.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/solutions"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm hover:gap-3 transition-all">
              솔루션 전체 보기 <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. 대외 인증 & 지적재산권 (다크) ── */}
      <section className="py-20 px-6 sm:px-10 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #0c1a35 60%, #0f172a 100%)" }}>
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest border border-blue-400/25 bg-blue-500/10 text-blue-400 mb-3">CERTIFICATIONS</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">대외 인증 및 신임도</h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              수년간의 사업 경험을 토대로 6건의 프로그램 지적재산권과 국내외 인증을 보유합니다.
            </p>
          </div>

          {/* 인증 카드 그리드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {certifications.map((cert) => (
              <div key={cert.label}
                className="p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: `${cert.color}08`,
                  borderColor: `${cert.color}25`,
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = `${cert.color}50`)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = `${cert.color}25`)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${cert.color}20` }}>
                    <cert.icon size={18} style={{ color: cert.color }} />
                  </div>
                  <span className="text-xs font-bold tracking-wide text-slate-400">{cert.label}</span>
                </div>
                <div className="text-2xl font-black text-white mb-1">{cert.value}</div>
                <div className="text-slate-500 text-xs leading-relaxed">{cert.sub}</div>
              </div>
            ))}
          </div>

          {/* 프로그램 지적재산권 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-white font-black text-lg">프로그램 지적재산권 보유 현황</h3>
              <span className="px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/25">6건</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {ipAssets.map((ip) => (
                <div key={ip.name}
                  className="p-4 rounded-xl border text-center transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: `${ip.color}08`, borderColor: `${ip.color}25` }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = `${ip.color}50`)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = `${ip.color}25`)}
                >
                  <div className="w-8 h-8 rounded-lg mx-auto mb-2 flex items-center justify-center"
                    style={{ background: `${ip.color}20` }}>
                    <FileCheck size={14} style={{ color: ip.color }} />
                  </div>
                  <div className="text-white font-bold text-xs mb-1 leading-tight">{ip.name}</div>
                  <div className="text-slate-500 text-[10px]">{ip.type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. 주요 수행 실적 ── */}
      <section className="py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest bg-blue-100 text-blue-700 border border-blue-200 mb-3">TRACK RECORD</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">주요 사업 수행 실적</h2>
            <p className="text-slate-500 text-sm">국내 최고·최다 AI OCR 사례를 보유하고 있습니다</p>
          </div>

          <div className="space-y-6 mb-12">
            {majorProjects.map((proj) => (
              <div key={proj.title}
                className="rounded-2xl border border-slate-100 bg-slate-50 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 flex flex-wrap items-center gap-3">
                  <h3 className="font-black text-slate-900 text-base">{proj.title}</h3>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full text-white"
                    style={{ background: proj.badgeColor }}>
                    {proj.badge}
                  </span>
                  <span className="text-xs text-slate-500">발주기관: {proj.client}</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-100/70">
                        <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 tracking-wide">연도</th>
                        <th className="px-4 py-3 text-right text-xs font-bold text-slate-500 tracking-wide">책</th>
                        <th className="px-4 py-3 text-right text-xs font-bold text-slate-500 tracking-wide">면</th>
                        <th className="px-4 py-3 text-right text-xs font-bold text-slate-500 tracking-wide">자수</th>
                        <th className="px-6 py-3 text-center text-xs font-bold text-slate-500 tracking-wide">F1 Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {proj.rows.map((row) => (
                        <tr key={row.year} className="border-t border-slate-100">
                          <td className="px-6 py-3 font-bold text-slate-900">{row.year}</td>
                          <td className="px-4 py-3 text-right text-slate-600">{row.books}</td>
                          <td className="px-4 py-3 text-right text-slate-600">{row.pages}</td>
                          <td className="px-4 py-3 text-right text-slate-600">{row.chars}</td>
                          <td className="px-6 py-3 text-center">
                            <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 font-bold text-xs">
                              {row.f1}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. 누적 수행 실적 (다크) ── */}
      <section className="py-20 px-6 sm:px-10 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f172a, #1e3a8a 60%, #0f172a)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest border border-blue-400/25 bg-blue-500/10 text-blue-400 mb-3">STATISTICS</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">누적 수행 실적</h2>
            <p className="text-slate-400 text-sm">2020년부터 현재까지 꾸준히 쌓아온 성과입니다</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label}
                className="p-6 xl:p-8 rounded-2xl bg-white/[0.04] border border-white/10 text-center hover:border-blue-400/30 hover:bg-blue-500/[0.08] transition-all duration-300 flex flex-col items-center justify-center min-h-[9rem]">
                <div className={`${s.numSize} font-black text-white tabular-nums leading-none mb-1`}>
                  <CountUp target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sky-400 text-sm font-bold mb-2">{s.unit}</div>
                <div className="text-slate-400 text-xs tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-600 text-xs mt-8">
            ※ 2024년부터 AI OCR 기반 JSON 공식 납품 · 총 364,500면 JSON 단독 공급 실적 보유
          </p>
        </div>
      </section>

      {/* ── 9. 주요 고객사 ── */}
      <section className="py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest bg-slate-100 text-slate-600 mb-3">CLIENTS</span>
            <h2 className="text-3xl font-black text-slate-900 mb-3">주요 고객사</h2>
            <p className="text-slate-500 text-sm">국가 대표 기관들이 신뢰하는 탱고인사이트입니다</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {clients.map((c) => (
              <div key={c.name}
                className="group flex flex-col gap-3 p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-blue-200 hover:bg-blue-50/60 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-sm shadow-md shrink-0"
                    style={{ background: "linear-gradient(135deg, #1d4ed8, #0ea5e9)" }}>
                    {c.abbr}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm group-hover:text-blue-700 transition-colors leading-snug">{c.name}</p>
                    <p className="text-slate-400 text-[11px] mt-0.5">{c.desc}</p>
                  </div>
                </div>
                <div className="border-t border-slate-200 pt-3 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 text-xs">OCR 데이터셋 구축</span>
                    <span className="text-blue-700 font-bold text-xs">{c.stat}</span>
                  </div>
                  {c.times !== null && (
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 text-xs">기술 적용</span>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-white px-2 py-0.5 rounded-full"
                        style={{ background: "linear-gradient(135deg, #1d4ed8, #0ea5e9)" }}>
                        {c.times}회
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* 연혁 유도 */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-slate-800 text-sm mb-1">더 많은 수행 사업 실적이 궁금하신가요?</p>
              <p className="text-slate-500 text-xs">2020년부터 현재까지 연도별 사업 수행 내역을 확인하실 수 있습니다.</p>
            </div>
            <Link href="/history"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #1d4ed8, #0ea5e9)" }}>
              연혁 보기 <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 10. 회사 정보 ── */}
      <section className="py-16 px-6 sm:px-10 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest bg-slate-200 text-slate-600 mb-3">COMPANY INFO</span>
            <h2 className="text-2xl font-black text-slate-900">기업 정보</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "상호명",     icon: Building2, value: "(주)탱고인사이트 / Tangoinsight Co., Ltd." },
              { label: "대표자",     icon: Users,     value: "이동준" },
              { label: "설립일",     icon: Calendar,  value: "2022년 9월" },
              { label: "핵심 사업",  icon: Zap,       value: "AI OCR / 문서 데이터화 / 지식 프로세스 아웃소싱(KPO)" },
              { label: "소재지",     icon: MapPin,    value: "서울 구로구 디지털로 26길 43 L-1211호" },
              { label: "대표 전화",  icon: Phone,     value: "TEL: 070-4112-5180 / FAX: 02-6442-5180" },
            ].map((item) => (
              <div key={item.label}
                className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                  <item.icon size={15} className="text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 tracking-wide block mb-0.5">{item.label}</span>
                  <span className="text-slate-800 text-sm font-medium">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. CTA 배너 ── */}
      <section className="py-20 px-6 sm:px-10 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #0284c7 50%, #0ea5e9 100%)" }}>
        <div className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1.5px, transparent 1.5px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white text-xs font-bold tracking-widest mb-6">
            <Sparkles size={13} />
            FREE CONSULTATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
            문서 디지털화를 고민하고 계신가요?
          </h2>
          <p className="text-blue-100 text-base mb-10 max-w-xl mx-auto leading-relaxed">
            파일럿 프로젝트를 통해 실제 효과를 직접 확인하신 후 도입을 결정하실 수 있습니다.
            전문 컨설턴트가 24시간 내 연락드립니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-blue-700 font-black text-base transition-all hover:-translate-y-0.5 shadow-2xl hover:shadow-white/30">
              무료 상담 신청하기 <ArrowRight size={18} />
            </Link>
            <Link href="/faq"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold text-base hover:bg-white/10 transition-all">
              자주 묻는 질문 보기
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
