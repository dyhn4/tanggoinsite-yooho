export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* 브랜드 */}
          <div>
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
            <p className="text-sm leading-relaxed">
              AI 기반 문서 데이터화 및 지식 프로세스 아웃소싱 전문 기업.
              <br />
              딥러닝 OCR 기술로 기업의 디지털 전환을 지원합니다.
            </p>
          </div>

          {/* 서비스 */}
          <div>
            <h4 className="text-white font-semibold mb-4">서비스</h4>
            <ul className="space-y-2 text-sm">
              {[
                "AI OCR 문서 인식",
                "워크플로우 문서 처리",
                "데이터 변환 및 가공",
                "지식 프로세스 아웃소싱",
                "문서 디지털 아카이빙",
              ].map((item) => (
                <li key={item}>
                  <span className="hover:text-white transition-colors cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 회사 정보 */}
          <div>
            <h4 className="text-white font-semibold mb-4">회사 정보</h4>
            <ul className="space-y-2 text-sm">
              <li>상호명: (주)탱고인사이트</li>
              <li>설립: 2022년 9월</li>
              <li>위치: 서울 구로구 디지털로26길 43</li>
              <li>이메일: contact@tangoinsight.ai</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p>© {currentYear} 탱고인사이트(Tango Insight). All rights reserved.</p>
          <p>AI 기반 문서 데이터화 전문 기업</p>
        </div>
      </div>
    </footer>
  );
}
