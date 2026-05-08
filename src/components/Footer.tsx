export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a0f06] text-[#7a5e42]">
      {/* 상단 앰버 강조선 */}
      <div className="h-0.5 bg-gradient-to-r from-amber-600 via-amber-400 to-indigo-500" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#3730a3] to-[#4338ca] flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-[#fde8c0] font-bold text-lg font-serif-kr">탱고인사이트</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              고문헌부터 현대 문서까지, 인식에서 편집, 데이터 활용까지
              <br />
              하나의 플랫폼에서 — AI 기반 문서 지능화 전문 기업.
            </p>
            <div className="flex flex-col gap-1 text-xs">
              <span>📧 contact@tangoinsight.ai</span>
              <span>📍 서울 성동구 왕십리</span>
            </div>
          </div>

          <div>
            <h4 className="text-[#fde8c0] font-semibold mb-4 text-sm font-serif-kr">핵심 기능</h4>
            <ul className="space-y-2 text-sm">
              {[
                "고문헌 특화 OCR",
                "인터랙티브 웹 편집",
                "스마트 데이터 추출",
                "AI 문서 대화",
                "보안 배포 (On-Premise)",
              ].map((item) => (
                <li key={item}>
                  <span className="hover:text-amber-400 transition-colors cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#fde8c0] font-semibold mb-4 text-sm font-serif-kr">회사 정보</h4>
            <ul className="space-y-2 text-sm">
              <li>상호명: (주)탱고인사이트</li>
              <li>설립: 2022년 9월</li>
              <li>위치: 서울 성동구 왕십리</li>
              <li className="pt-2">
                <a href="#contact" className="text-amber-400 hover:text-amber-300 transition-colors">
                  도입 문의 →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-900/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p>© {currentYear} 탱고인사이트(Tango Insight). All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-[#fde8c0] transition-colors cursor-default">개인정보처리방침</span>
            <span className="hover:text-[#fde8c0] transition-colors cursor-default">이용약관</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
