"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft, ArrowRight, Target, BarChart3,
  BookOpen, Shield, Zap, Users, Award, Calendar,
  Building2, ChevronRight, Sparkles, Globe, Lock,
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
    desc: "98.7%의 인식 정확도. 한 글자의 오인식도 연구 결과를 바꿀 수 있습니다. 타협 없는 품질을 추구합니다.",
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
    desc: "자기학습 AI 엔진이 처리할수록 더 정확해집니다. 기술의 한계를 지속적으로 확장합니다.",
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
      "한자·훈민정음·필사체·세로쓰기 지원",
      "고문헌 기준 98.7% / 현대자료 99.5% 정확도",
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
      "군집검수·날자정정·이미지 연동",
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

const services = [
  { icon: BookOpen, title: "고문헌·근대자료 디지털화",  desc: "조선시대 고문헌부터 근대 신문, 단행본까지 문서 유형별 최적화 처리" },
  { icon: Users,    title: "시각장애인 대체자료 제작",   desc: "국립장애인도서관 협력 경험 기반 점자·음성자료 변환 서비스" },
  { icon: Zap,      title: "대량 DB 구축 & 아카이빙",  desc: "수십만 페이지 규모 프로젝트도 클라우드 분산 처리로 고속 납품" },
  { icon: Award,    title: "AI 기반 지식 추출",         desc: "인식된 문서에서 표·수치 데이터 자동 추출, XML/JSON 구조화 납품" },
];

const clients = [
  { name: "국립중앙도서관",  eng: "National Library of Korea",         abbr: "국중도" },
  { name: "국회도서관",      eng: "National Assembly Library",         abbr: "국회도" },
  { name: "국립장애인도서관",eng: "National Library for the Disabled",  abbr: "장도관" },
  { name: "행정안전부",      eng: "Ministry of Interior and Safety",   abbr: "행안부" },
];

const stats = [
  { value: 1032912,   suffix: "",   label: "누적 처리 건수", unit: "건", numSize: "text-4xl xl:text-5xl" },
  { value: 168050125, suffix: "",   label: "누적 처리 면수", unit: "면", numSize: "text-3xl xl:text-4xl" },
  { value: 50,        suffix: "+",  label: "도입 기관",      unit: "곳", numSize: "text-5xl xl:text-6xl" },
  { value: 6,         suffix: "년", label: "운영 연수",      unit: "",   numSize: "text-5xl xl:text-6xl" },
];

/* ─── 메인 페이지 ─── */
export default function CompanyPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* ── 코스모스 파티클 ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // 신비로운 컬러 팔레트
    const COLORS = [
      [167, 139, 250],   // violet
      [103, 232, 249],   // cyan
      [240, 171, 252],   // fuchsia/pink
      [196, 181, 253],   // lavender
      [255, 255, 255],   // white star
      [94, 234, 212],    // teal
    ];

    const COUNT = 75;
    type P = {
      x: number; y: number;
      vx: number; vy: number;
      r: number;
      baseO: number;
      ci: number;   // color index
      phase: number;
      freq: number;
    };

    const pts: P[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 2.2 + 0.5,
      baseO: Math.random() * 0.55 + 0.2,
      ci: Math.floor(Math.random() * COLORS.length),
      phase: Math.random() * Math.PI * 2,
      freq: Math.random() * 0.035 + 0.012,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 연결선 — 보라/라벤더 톤
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            const a = (1 - d / 120) * 0.28;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(167,139,250,${a})`;
            ctx.lineWidth = 0.55;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      // 파티클
      for (const p of pts) {
        p.phase += p.freq;
        const o = p.baseO + Math.sin(p.phase) * 0.28;
        const r = p.r + Math.sin(p.phase * 0.8) * 0.6;
        const [R, G, B] = COLORS[p.ci];

        // 큰 파티클엔 글로우 후광
        if (p.r > 1.5) {
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 5);
          grad.addColorStop(0, `rgba(${R},${G},${B},${o * 0.6})`);
          grad.addColorStop(1, `rgba(${R},${G},${B},0)`);
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 5, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }

        // 파티클 본체
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(r, 0.3), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${R},${G},${B},${o})`;
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
            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">Tango</span>
            {" "}<span className="text-white">Insight</span>
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
        style={{ background: "linear-gradient(135deg, #06000f 0%, #0d0520 50%, #060011 100%)" }}
      >
        {/* 배경 성운 글로우 (정적) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[55%] h-[70%] rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, #4c1d95 0%, transparent 65%)", filter: "blur(90px)" }} />
          <div className="absolute bottom-[-15%] right-[-5%] w-[50%] h-[65%] rounded-full opacity-25"
            style={{ background: "radial-gradient(circle, #0e7490 0%, transparent 65%)", filter: "blur(90px)" }} />
          <div className="absolute top-[30%] right-[25%] w-[35%] h-[50%] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 65%)", filter: "blur(80px)" }} />
        </div>

        {/* 코스모스 캔버스 */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 sm:px-10 py-20 w-full">
          <div className="max-w-3xl">
            {/* 배지 */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/15 border border-violet-400/25 text-violet-300 text-xs font-bold tracking-[0.2em] uppercase mb-6">
              <Building2 size={13} />
              Company Overview
            </div>

            {/* 타이틀 */}
            <h1 className="text-5xl sm:text-7xl font-black text-white mb-4 leading-none tracking-tight"
              style={{ fontFamily: "'Sora', sans-serif" }}>
              <span className="bg-gradient-to-r from-violet-200 via-white to-cyan-300 bg-clip-text text-transparent">
                탱고인사이트
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-violet-300 font-semibold mb-6 tracking-tight">
              Tango Insight Co., Ltd.
            </p>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
              2022년 설립된 <strong className="text-white">AI 기반 문서 데이터화 및 지식 프로세스 아웃소싱(KPO) 전문 기업</strong>입니다.
              딥러닝 기반 Data-Adaptive OCR 기술로 한자·고문헌·필사체 등 기존 OCR이
              해결하지 못한 영역을 정복합니다.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-xl shadow-violet-900/50"
                style={{ background: "linear-gradient(135deg, #6d28d9, #0891b2)" }}>
                도입 문의 <ArrowRight size={16} />
              </Link>
              <Link href="/solutions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm border border-white/20 bg-white/8 hover:bg-white/14 transition-all backdrop-blur-sm">
                솔루션 보기 <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          {/* 핵심 수치 바 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
            {[
              { icon: Calendar,  value: "2022",    unit: "년 설립",    label: "설립연도"     },
              { icon: Award,     value: "98.7",    unit: "%",         label: "OCR 인식 정확도" },
              { icon: Users,     value: "50+",     unit: "개 기관",   label: "도입 기관"    },
              { icon: BarChart3, value: "1,000+",  unit: "만 건",     label: "누적 처리 실적" },
            ].map((s) => (
              <div key={s.label}
                className="flex flex-col gap-1 p-5 rounded-2xl bg-white/[0.05] border border-violet-400/15 hover:border-violet-400/40 hover:bg-violet-500/10 transition-all duration-300">
                <s.icon size={16} className="text-violet-300 mb-1" />
                <div className="text-2xl font-black text-white leading-none">
                  {s.value}<span className="text-cyan-300 text-sm ml-1">{s.unit}</span>
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
          {/* 미션 & 비전 */}
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

          {/* 핵심 가치 */}
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
        {/* 배경 그리드 */}
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
                {/* 상단 */}
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

      {/* ── 4. 사업 영역 ── */}
      <section className="py-20 px-6 sm:px-10 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest bg-blue-100 text-blue-700 border border-blue-200 mb-3">SERVICES</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">사업 영역</h2>
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

      {/* ── 5. 수행 실적 (다크) ── */}
      <section className="py-20 px-6 sm:px-10 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f172a, #1e3a8a 60%, #0f172a)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest border border-blue-400/25 bg-blue-500/10 text-blue-400 mb-3">TRACK RECORD</span>
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
            ※ 발행연도 1934~2025년까지 연도별 다양한 자료 구축 · 국가 기관 주요 프로젝트 다수 수행
          </p>
        </div>
      </section>

      {/* ── 6. 주요 고객사 ── */}
      <section className="py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest bg-slate-100 text-slate-600 mb-3">CLIENTS</span>
            <h2 className="text-3xl font-black text-slate-900 mb-3">주요 고객사</h2>
            <p className="text-slate-500 text-sm">국가 대표 기관들이 신뢰하는 탱고인사이트입니다</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {clients.map((c) => (
              <div key={c.name}
                className="group flex flex-col items-center justify-center gap-3 p-7 rounded-2xl border border-slate-100 bg-slate-50 hover:border-blue-200 hover:bg-blue-50/60 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                {/* 이니셜 원 */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-base shadow-md"
                  style={{ background: "linear-gradient(135deg, #1d4ed8, #0ea5e9)" }}>
                  {c.abbr}
                </div>
                <div className="text-center">
                  <p className="font-bold text-slate-900 text-sm group-hover:text-blue-700 transition-colors">{c.name}</p>
                  <p className="text-slate-400 text-[11px] mt-0.5 leading-snug">{c.eng}</p>
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

      {/* ── 7. 회사 정보 ── */}
      <section className="py-16 px-6 sm:px-10 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest bg-slate-200 text-slate-600 mb-3">COMPANY INFO</span>
            <h2 className="text-2xl font-black text-slate-900">기업 정보</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "상호명",       value: "(주)탱고인사이트 / Tango Insight Co., Ltd." },
              { label: "설립일",       value: "2022년 9월" },
              { label: "기업 유형",    value: "비상장 중소기업" },
              { label: "핵심 사업",    value: "AI OCR / 문서 데이터화 / KPO 아웃소싱" },
              { label: "소재지",       value: "서울특별시 구로구 디지털로26길 43" },
              { label: "이메일",       value: "contact@tangoinsight.ai" },
            ].map((item) => (
              <div key={item.label}
                className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-100">
                <span className="text-xs font-bold text-slate-400 w-20 shrink-0 pt-0.5 tracking-wide">{item.label}</span>
                <span className="text-slate-800 text-sm font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CTA 배너 ── */}
      <section className="py-20 px-6 sm:px-10 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #0284c7 50%, #0ea5e9 100%)" }}>
        {/* 배경 패턴 */}
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
