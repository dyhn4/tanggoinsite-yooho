"use client";

import { ArrowRight, BookOpen, Cpu, Users } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1a0f06]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-amber-700/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-800/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/3 w-[350px] h-[350px] bg-indigo-800/25 rounded-full blur-3xl animate-bounce" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(201,168,76,0.8) 31px, rgba(201,168,76,0.8) 32px)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 pt-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-[fadeUp_0.9s_ease-out_both]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/15 border border-amber-400/25 text-amber-300 text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              AI-Powered Document Intelligence
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-[#fde8c0] leading-tight mb-6 font-serif-kr">
              고문헌부터 현대 문서까지,
              <br />
              <span className="text-gradient-warm">훈민정음까지</span>
              <br />
              가능한 AI OCR
            </h1>

            <p className="text-lg text-[#b89870] leading-relaxed mb-10">
              한자부터 현대 문서까지 정확하게 인식하고, 편집하고, 데이터를
              추출하세요. 탱고인사이트와 함께 역사적 자료를 디지털 지식 자산으로.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#3730a3] to-[#4338ca] hover:opacity-90 text-white font-semibold transition-all duration-200 shadow-lg shadow-indigo-950/60 hover:-translate-y-0.5"
              >
                도입 문의하기
                <ArrowRight size={18} />
              </button>

              <button
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-amber-900/20 hover:bg-amber-900/30 border border-amber-600/30 text-[#fde8c0] font-semibold transition-all duration-200"
              >
                서비스 자세히 보기
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative animate-[float_4s_ease-in-out_infinite]">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-amber-500/20 via-indigo-500/20 to-amber-500/20 blur-2xl animate-pulse" />

              <div className="relative bg-amber-950/30 backdrop-blur-sm border border-amber-700/20 rounded-3xl p-6 shadow-2xl shadow-amber-950/40">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-3 h-3 rounded-full bg-amber-600/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-indigo-400/80" />
                  <span className="text-[#7a5e42] text-xs ml-2 font-mono">
                    고문헌 AI 분석 중...
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
                          className={`${width} h-3 rounded-sm bg-amber-500/35 animate-pulse`}
                          style={{ animationDelay: `${index * 0.25 + i * 0.15}s` }}
                        />
                      ))}
                    </div>
                  ))}
                </div>

                <div className="relative h-52 rounded-2xl overflow-hidden border border-amber-600/20 bg-[#2a1608]">
                  <div className="absolute inset-0 p-5 font-serif-kr text-amber-200/70 leading-8 text-lg">
                    訓民正音 國之語音 異乎中國
                    <br />
                    與文字不相流通 故愚民有所欲言
                    <br />
                    而終不得伸其情者多矣
                    <br />
                    予爲此憫然 新制二十八字
                  </div>

                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-indigo-400/30 to-transparent animate-[scan_2.4s_ease-in-out_infinite]" />

                  <div className="absolute bottom-4 left-4 right-4 bg-amber-800/30 border border-amber-500/20 rounded-xl p-3">
                    <div className="text-amber-300 text-xs font-semibold">
                      AI OCR 변환 결과
                    </div>
                    <div className="text-[#fde8c0] text-sm mt-1">
                      훈민정음 · 정확도 98.7%
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#3730a3] to-[#4338ca] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                실시간 분석
              </div>
            </div>
          </div>
        </div>

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
              className="flex items-center gap-4 p-4 rounded-2xl bg-amber-950/25 border border-amber-700/20 backdrop-blur-sm"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-700/35 to-amber-500/25 flex items-center justify-center">
                <stat.icon size={22} className="text-amber-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#fde8c0] font-serif-kr">
                  {stat.value}
                </div>
                <div className="text-sm text-[#c9a070] font-medium">
                  {stat.label}
                </div>
                <div className="text-xs text-[#7a5e42]">{stat.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-18px);
          }
        }

        @keyframes scan {
          0% {
            transform: translateY(-70px);
          }
          50% {
            transform: translateY(220px);
          }
          100% {
            transform: translateY(-70px);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
