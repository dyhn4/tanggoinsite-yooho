"use client";

import { ArrowRight, BookOpen, Cpu, Sparkles, Users } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* 배경 효과 - 1번 색감 유지 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-[680px] h-[680px] bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -left-32 w-[560px] h-[560px] bg-sky-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 left-1/2 w-[420px] h-[420px] bg-blue-800/10 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]" />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 pt-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 왼쪽 텍스트 - 2번 구조/문구, 1번 색감 */}
          <div className="animate-[fadeUp_0.9s_ease-out_both]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-semibold mb-6 backdrop-blur-sm">
              <Sparkles size={16} className="text-sky-400" />
              AI Heritage Document Intelligence
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
              고문헌을 읽는
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                차세대 AI OCR
              </span>
              <br />
              플랫폼
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-xl">
              한자, 고문헌, 현대 문서를 AI가 정밀하게 인식하고 구조화합니다.
              탱고인사이트는 역사적 자료를 검색 가능한 디지털 지식 자산으로
              전환합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 shadow-xl shadow-blue-900/40 hover:-translate-y-0.5"
              >
                도입 문의하기
                <ArrowRight size={18} />
              </button>

              <button
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold transition-all duration-200 backdrop-blur-md"
              >
                서비스 자세히 보기
              </button>
            </div>
          </div>

          {/* 오른쪽 카드 - 2번 구조, 1번 색감 */}
          <div className="hidden lg:block">
            <div className="relative animate-[float_4s_ease-in-out_infinite]">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-blue-500/25 via-sky-400/20 to-cyan-400/20 blur-2xl animate-pulse" />

              <div className="relative bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-6 shadow-2xl shadow-blue-950/40">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-3 h-3 rounded-full bg-blue-400" />
                  <div className="w-3 h-3 rounded-full bg-sky-400" />
                  <div className="w-3 h-3 rounded-full bg-cyan-400" />
                  <span className="text-slate-400 text-xs ml-2 font-mono">
                    heritage-ai.scan / live
                  </span>
                </div>

                <div className="space-y-3 mb-5">
                  {[
                    ["w-16", "w-32", "w-20"],
                    ["w-24", "w-28", "w-16"],
                    ["w-20", "w-36", "w-12"],
                    ["w-28", "w-20", "w-24"],
                  ].map((row, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      {row.map((width, i) => (
                        <div
                          key={i}
                          className={`${width} h-3 rounded-full bg-blue-300/25 animate-pulse`}
                          style={{
                            animationDelay: `${index * 0.25 + i * 0.15}s`,
                          }}
                        />
                      ))}
                    </div>
                  ))}
                </div>

                <div className="relative h-56 rounded-2xl overflow-hidden border border-white/10 bg-slate-950/45">
                  <div className="absolute inset-0 p-5 text-slate-300/80 leading-8 text-lg">
                    訓民正音 國之語音 異乎中國
                    <br />
                    與文字不相流通 故愚民有所欲言
                    <br />
                    而終不得伸其情者多矣
                    <br />
                    予爲此憫然 新制二十八字
                  </div>

                  <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-sky-400/25 to-transparent animate-[scan_2.4s_ease-in-out_infinite]" />

                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 border border-white rounded-2xl p-4 shadow-lg backdrop-blur-md">
                    <div className="text-blue-700 text-xs font-bold mb-1">
                      AI OCR 변환 결과
                    </div>
                    <div className="text-slate-900 text-sm font-semibold">
                      훈민정음 · 정확도 98.7% · 구조화 완료
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-blue-900/40">
                실시간 분석
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white/95 text-slate-800 text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                고문헌 특화 AI
              </div>
            </div>
          </div>
        </div>

        {/* 하단 통계 - 2번 구조, 1번 색감 */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: BookOpen,
              value: "5M+",
              label: "누적 처리 페이지",
              desc: "고문헌부터 현대 문서까지",
            },
            {
              icon: Users,
              value: "50+",
              label: "도입 기관",
              desc: "국립도서관·대학·연구원",
            },
            {
              icon: Cpu,
              value: "98.7%",
              label: "고문헌 인식 정확도",
              desc: "일반 OCR 대비 3배 향상",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <stat.icon size={22} className="text-sky-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-200 font-medium">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400">{stat.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        @keyframes scan {
          0% { transform: translateY(-80px); }
          50% { transform: translateY(240px); }
          100% { transform: translateY(-80px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
