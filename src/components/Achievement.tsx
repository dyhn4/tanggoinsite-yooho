"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const projects = [
  { year: 2025, items: [
    "고문헌(근대자료) 원문 텍스트 데이터베이스 구축사업",
    "디지털화 원문(현대자료) AI 텍스트 데이터 구축사업",
    "시각장애인용 대체자료 기본장서 제작사업",
    "문화예술자료 디지털화 구축사업",
    "국립도서관 원문DB 구축사업(DB III)",
    "단행자료 디지털화 구축사업",
  ]},
  { year: 2024, items: [
    "고문헌(근대자료) 원문 텍스트 데이터베이스 구축사업",
    "기본장서 텍스트 데이터베이스 구축 연구용역",
    "국립도서관 원문DB 구축사업(DB II)",
    "문화예술자료 디지털화 구축사업",
    "단행자료 디지털화 구축사업",
  ]},
  { year: 2023, items: [
    "고문헌(근대자료) 원문 텍스트 데이터베이스 구축사업",
    "고문헌문화예술 자료 디지털화 구축사업",
    "인공지능 기반 고문헌 필사본 텍스트구축 연구용역 사업",
    "연속간행물 자료 디지털화 구축사업",
    "현대간행물 자료 디지털화 구축사업",
  ]},
  { year: 2022, items: [
    "국립도서관 원문DB 구축사업(DB I, II)",
    "연속간행물 자료 디지털화 구축사업",
    "현대간행물 자료 디지털화 구축사업",
  ]},
  { year: 2021, items: [
    "국립도서관 원문DB 구축사업(DB I, II, III)",
    "현대간행물 자료 디지털화 구축사업",
  ]},
  { year: 2020, items: [
    "국립도서관 원문DB 구축사업(DB I, II, III)",
  ]},
];

const clients = [
  { name: "국회도서관",      eng: "National Assembly Library",        logo: "/logos/nanet.png" },
  { name: "국립중앙도서관",  eng: "National Library of Korea",         logo: "/logos/nl.png"    },
  { name: "국립장애인도서관", eng: "National Library for the Disabled", logo: "/logos/nld.png"   },
  { name: "행정안전부",      eng: "Ministry of the Interior and Safety", logo: "/logos/mois.png" },
];

const HANJA = "訓民正音國語文字不相流通愚民有所欲言終得伸情者多矣予爲此憫然新制二十八字覽者易習便於日用耳".split("");

function CountUp({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const steps = 60;
        let current = 0;
        const inc = target / steps;
        const timer = setInterval(() => {
          current += inc;
          if (current >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(current));
        }, 1600 / steps);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function Achievement() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeYear, setActiveYear] = useState(2025);
  const activeProject = projects.find((p) => p.year === activeYear)!;

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

    type Stream = { x: number; y: number; speed: number; chars: string[]; opacity: number; fontSize: number };

    const makeStream = (canvasW: number, canvasH: number, randomY = false): Stream => ({
      x: Math.random() * canvasW,
      y: randomY ? Math.random() * canvasH : -Math.random() * canvasH * 0.5,
      speed: 0.35 + Math.random() * 0.55,
      chars: Array.from({ length: 10 }, () => HANJA[Math.floor(Math.random() * HANJA.length)]),
      opacity: 0.05 + Math.random() * 0.08,
      fontSize: 13 + Math.floor(Math.random() * 7),
    });

    const streams: Stream[] = Array.from({ length: 20 }, () => makeStream(canvas.width, canvas.height, true));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 수평선 (책장 느낌)
      for (let i = 1; i <= 4; i++) {
        const y = (canvas.height / 5) * i;
        ctx.beginPath();
        ctx.strokeStyle = "rgba(148,163,184,0.035)";
        ctx.lineWidth = 1;
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      ctx.textAlign = "center";
      for (const s of streams) {
        for (let ci = 0; ci < s.chars.length; ci++) {
          const charY = s.y + ci * (s.fontSize + 5);
          if (charY < -20 || charY > canvas.height + 20) continue;
          const fade = 1 - ci / s.chars.length;
          const bright = ci === 0 ? s.opacity * 4 : s.opacity * fade;
          ctx.font = `${s.fontSize}px serif`;
          ctx.fillStyle = `rgba(186,230,255,${bright})`;
          ctx.fillText(s.chars[ci], s.x, charY);
        }
        s.y += s.speed;
        if (s.y > canvas.height + 80) {
          const ns = makeStream(canvas.width, canvas.height, false);
          Object.assign(s, ns);
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section
      id="achievement"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 py-16 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0f172a 0%, #0c1a35 45%, #0e1f45 75%, #0f172a 100%)" }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* 글로우 & 엣지 페이드 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#0f172a] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#0f172a] to-transparent" />
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-indigo-900/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-900/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        {/* 헤더 */}
        <div className="mb-8">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/25 text-blue-300 font-semibold text-sm mb-3">
            실적
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
            MooN AI OCR 기반 디지털 원문 구축 수행 실적
          </h2>
          <p className="text-slate-400 text-sm">
            다양한 기록물 형태에 대한 구축 경험을 기반으로 자료 특성에 최적화된 AI OCR 구축 수행
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* 왼쪽 */}
          <div className="flex flex-col gap-4">
            {/* 숫자 카드 - 세로 배치 */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm p-6">
              {/* 책/건 */}
              <div className="mb-5 pb-5 border-b border-white/10">
                <div className="text-slate-400 text-xs tracking-widest uppercase mb-2">누적 처리 건수</div>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-slate-400 text-base">약</span>
                  <span className="text-4xl sm:text-5xl font-black text-white tabular-nums tracking-tight">
                    <CountUp target={1032912} />
                  </span>
                  <span className="text-xl font-bold text-sky-400">책/건</span>
                </div>
              </div>
              {/* 면 */}
              <div>
                <div className="text-slate-400 text-xs tracking-widest uppercase mb-2">누적 처리 면수</div>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-slate-400 text-base">약</span>
                  <span className="text-4xl sm:text-5xl font-black text-white tabular-nums tracking-tight">
                    <CountUp target={168050125} />
                  </span>
                  <span className="text-xl font-bold text-sky-400">면</span>
                </div>
              </div>
              <p className="text-slate-600 text-xs mt-4">※ 발행연도 1934~2025년까지 연도별 다양한 자료 구축</p>
            </div>

            {/* 주요 고객사 */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm p-5">
              <div className="text-slate-400 text-xs font-semibold mb-3 tracking-widest uppercase">주요 고객사</div>
              <div className="grid grid-cols-2 gap-2">
                {clients.map((client) => (
                  <div
                    key={client.name}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-blue-400/40 hover:bg-blue-500/10 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={36}
                        height={36}
                        className="object-contain"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-slate-200 text-xs font-semibold leading-tight truncate">{client.name}</div>
                      <div className="text-slate-500 text-[10px] leading-tight truncate">{client.eng}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 오른쪽: 연도별 사업 */}
          <div className="rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm p-5 flex flex-col">
            <div className="flex gap-2 flex-wrap mb-4">
              {projects.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setActiveYear(p.year)}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeYear === p.year
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                      : "bg-white/[0.05] border border-white/15 text-slate-400 hover:border-blue-400/40 hover:text-blue-300"
                  }`}
                >
                  {p.year}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-2 flex-1">
              {activeProject.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-blue-400/30 hover:bg-blue-500/10 transition-all duration-200"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
