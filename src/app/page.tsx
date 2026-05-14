"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Technology from "@/components/Technology";
import Process from "@/components/Process";
import Achievement from "@/components/Achievement";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;

    let isScrolling = false;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling) return;

      isScrolling = true;

      const sections = Array.from(el.querySelectorAll("section"));
      const currentScroll = el.scrollTop;
      const windowH = el.clientHeight;

      // 현재 보이는 섹션 인덱스 계산
      const currentIndex = Math.round(currentScroll / windowH);
      const nextIndex =
        e.deltaY > 0
          ? Math.min(currentIndex + 1, sections.length - 1)
          : Math.max(currentIndex - 1, 0);

      el.scrollTo({
        top: nextIndex * windowH,
        behavior: "smooth",
      });

      // 스크롤 쿨다운 (애니메이션 완료 후 해제)
      setTimeout(() => {
        isScrolling = false;
      }, 800);
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <>
      <Header />

      <main
        ref={mainRef}
        className="h-screen overflow-y-auto scroll-smooth"
        style={{ scrollSnapType: "none" }}
      >
        <section className="min-h-screen">
          <Hero />
        </section>

        <section className="min-h-screen">
          <About />
        </section>

        <section className="min-h-screen">
          <Services />
        </section>

        <section className="min-h-screen">
          <Technology />
        </section>

        <section className="min-h-screen">
          <Process />
        </section>

        <section className="min-h-screen">
          <Achievement />
        </section>

        <section className="min-h-screen">
          <Contact />
        </section>

        <section>
          <Footer />
        </section>
      </main>
    </>
  );
}
