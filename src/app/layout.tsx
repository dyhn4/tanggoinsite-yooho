import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "탱고인사이트 | AI 기반 문서 데이터화 전문 기업",
  description:
    "딥러닝 기반 Data-Adaptive OCR 기술과 KPO 서비스로 기업의 문서 디지털화를 지원합니다. 탱고인사이트는 AI 기반 문서 데이터화 및 지식 프로세스 아웃소싱 전문 기업입니다.",
  keywords: [
    "탱고인사이트",
    "Tango Insight",
    "OCR",
    "AI OCR",
    "문서 디지털화",
    "KPO",
    "지식 프로세스 아웃소싱",
    "데이터 가공",
    "딥러닝",
  ],
  openGraph: {
    title: "탱고인사이트 | AI 기반 문서 데이터화 전문 기업",
    description:
      "딥러닝 기반 Data-Adaptive OCR 기술과 KPO 서비스로 기업의 문서 디지털화를 지원합니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`h-full ${sora.variable}`}>
      <body className={`min-h-full flex flex-col antialiased ${sora.className}`}>
        {children}
      </body>
    </html>
  );
}
