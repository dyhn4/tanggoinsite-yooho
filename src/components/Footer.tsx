import Link from "next/link";
import { MapPin, Mail, ExternalLink } from "lucide-react";

const solutions = [
  { label: "Tango Workflow",  href: "/solutions#tango-workflow" },
  { label: "MooN Editor",     href: "/solutions#moon-editor"   },
  { label: "MooN AI OCR",     href: "/solutions#moon-ai-ocr"   },
  { label: "Tango XML(JSON)", href: "/solutions#tango-xml"     },
  { label: "Tango Batch",     href: "/solutions#tango-batch"   },
  { label: "Tango Articlo",   href: "/solutions#tango-articlo" },
  { label: "MooN AI Explorer",href: "/solutions#moon-ai-explorer" },
];

const pages = [
  { label: "홈",       href: "/"         },
  { label: "회사개요", href: "/company"  },
  { label: "회사 연혁",href: "/history"  },
  { label: "서비스 안내", href: "/services" },
  { label: "서비스 신청", href: "/apply"    },
  { label: "솔루션",   href: "/solutions" },
  { label: "문의하기", href: "/contact"  },
  { label: "FAQ",      href: "/faq"      },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-8">

        {/* 상단 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">

          {/* 브랜드 */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%)" }}
              >
                <div className="absolute inset-0 top-0 h-1/2 bg-white/[0.12] rounded-t-lg" />
                <span className="relative text-white font-black text-sm">T</span>
              </div>
              <span className="text-white font-bold text-lg">탱고인사이트</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              AI 기반 문서 데이터화 및<br />
              지식 프로세스 아웃소싱 전문 기업
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-slate-500" />
                서울 구로구 디지털로 26길 43 L-1211
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="shrink-0 text-slate-500" />
                <a
                  href="mailto:contact@tangoinsight.ai"
                  className="text-sky-400 hover:text-sky-300 transition-colors"
                >
                  contact@tangoinsight.ai
                </a>
              </li>
            </ul>
          </div>

          {/* 솔루션 */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">솔루션</h4>
            <ul className="space-y-2 text-sm">
              {solutions.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="hover:text-white transition-colors hover:translate-x-0.5 inline-block"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 바로가기 */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">바로가기</h4>
            <ul className="space-y-2 text-sm">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 회사 정보 */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">회사 정보</h4>
            <ul className="space-y-2 text-sm">
              <li>상호: <span className="text-slate-300">(주)탱고인사이트</span></li>
              <li>설립: <span className="text-slate-300">2022년 9월</span></li>
              <li className="leading-snug">
                사업자등록번호:
                <span className="text-slate-300 block mt-0.5">
                  603-87-02754
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 구분선 + 하단 바 */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p>© {currentYear} 탱고인사이트(Tangoinsight). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>AI 기반 문서 데이터화 전문 기업</span>
            <a
              href="https://github.com/dyhn4/tanggoinsite-yooho"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              GitHub <ExternalLink size={10} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
