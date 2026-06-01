import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import FloatingChat from "@/components/FloatingChat";
import { LanguageProvider } from "@/context/LanguageContext";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tangoinsight-ai.vercel.app"),
  title: {
    default: "탱고인사이트 | AI 기반 문서 데이터화 전문 기업",
    template: "%s | 탱고인사이트",
  },
  description:
    "AI 학습 기반 Data-Adaptive OCR 기술과 KPO 서비스로 기업의 문서 디지털화를 지원합니다. 한자·고문헌·필사체 98.7% 인식 정확도, 50개 이상 기관 도입.",
  keywords: [
    "탱고인사이트", "Tangoinsight",
    "AI OCR", "고문헌 OCR", "한자 OCR", "문서 디지털화",
    "KPO", "지식 프로세스 아웃소싱",
    "MooN AI OCR", "AI 학습 OCR", "데이터 가공", "문서 데이터베이스 구축",
  ],
  authors: [{ name: "탱고인사이트", url: "https://tangoinsight-ai.vercel.app" }],
  creator: "탱고인사이트",
  openGraph: {
    title: "탱고인사이트 | AI 기반 문서 데이터화 전문 기업",
    description:
      "고문헌부터 현대 문서까지, 인식에서 활용까지 하나의 플랫폼. MooN AI OCR 98.7% 인식 정확도.",
    type: "website",
    locale: "ko_KR",
    url: "https://tangoinsight-ai.vercel.app",
    siteName: "탱고인사이트",
  },
  twitter: {
    card: "summary_large_image",
    title: "탱고인사이트 | AI 기반 문서 데이터화 전문 기업",
    description:
      "고문헌부터 현대 문서까지, 인식에서 활용까지 하나의 플랫폼. MooN AI OCR 98.7% 인식 정확도.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
        <LanguageProvider>
          {children}
          <FloatingChat />
        </LanguageProvider>
      </body>
    </html>
  );
}
