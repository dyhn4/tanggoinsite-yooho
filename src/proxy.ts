import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 알려진 스크레이퍼·AI 학습 봇·자동화 도구 User-Agent 패턴
const BLOCKED_UA_PATTERNS = [
  // 자동화 HTTP 라이브러리
  /python-requests/i,
  /python-urllib/i,
  /^curl\//i,
  /^wget\//i,
  /Scrapy/i,
  /Go-http-client/i,
  /libwww-perl/i,
  /^Java\//i,
  /Apache-HttpClient/i,
  /okhttp/i,
  /node-fetch/i,
  /axios\//i,

  // AI 학습 봇
  /GPTBot/i,
  /Claude-Web/i,
  /anthropic-ai/i,
  /CCBot/i,
  /Bytespider/i,
  /Applebot-Extended/i,
  /Google-Extended/i,
  /PerplexityBot/i,
  /cohere-ai/i,

  // 대량 크롤링 SEO 도구
  /AhrefsBot/i,
  /SemrushBot/i,
  /MJ12bot/i,
  /DotBot/i,
  /DataForSeoBot/i,
  /PetalBot/i,
  /BLEXBot/i,
];

export function proxy(request: NextRequest) {
  const ua = request.headers.get("user-agent") ?? "";

  // User-Agent 없음 = 자동화 도구로 간주
  if (!ua) {
    return new Response("Forbidden", { status: 403 });
  }

  // 차단 목록에 해당하면 403
  if (BLOCKED_UA_PATTERNS.some((pattern) => pattern.test(ua))) {
    return new Response("Forbidden", { status: 403 });
  }

  // 정상 요청 — X-Robots-Tag 헤더 추가 (AI 수집 거부 신호)
  const response = NextResponse.next();
  response.headers.set("X-Robots-Tag", "noai, noimageai");
  return response;
}

export const config = {
  matcher: [
    // 정적 파일·이미지 최적화·API는 제외, 페이지 요청에만 적용
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
