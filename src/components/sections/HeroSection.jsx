import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

function HeroSection({ data }) {
  const backgrounds = useMemo(() => {
    if (Array.isArray(data.backgroundImages) && data.backgroundImages.length > 0) {
      return data.backgroundImages;
    }

    return data.image ? [{ src: data.image, alt: data.imageAlt || "Hero background" }] : [];
  }, [data.backgroundImages, data.image, data.imageAlt]);

  const [activeIndex, setActiveIndex] = useState(0);
  const headlineWords = useMemo(() => (data.headline ? data.headline.split(" ") : []), [data.headline]);

  useEffect(() => {
    if (backgrounds.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % backgrounds.length);
    }, 7600);

    return () => window.clearInterval(timer);
  }, [backgrounds.length]);

  return (
    <section id="home" className="animate-reveal -mx-3 overflow-hidden scroll-mt-28 sm:-mx-6 lg:-mx-10 2xl:-mx-14">
      <div className="relative min-h-[90vh] sm:min-h-screen">
        {backgrounds.map((background, index) => (
          <motion.img
            key={`${background.src}-${index}`}
            src={background.src}
            alt={background.alt}
            className="absolute inset-0 h-full w-full object-cover will-change-[opacity,transform]"
            initial={false}
            animate={
              index === activeIndex
                ? { opacity: 1, scale: 1.08 }
                : { opacity: 0, scale: 1 }
            }
            transition={{ opacity: { duration: 1.4, ease: "easeOut" }, scale: { duration: 8.2, ease: "linear" } }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A35]/65 via-[#071A35]/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(213,178,35,0.14),transparent_34%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_34%)]" />
        <svg aria-hidden="true" className="absolute inset-0 h-full w-full opacity-[0.05]" preserveAspectRatio="none">
          <defs>
            <pattern id="engineering-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M10 0H0V10" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#engineering-grid)" />
        </svg>

        <div className="relative z-10 mx-auto grid min-h-[90vh] w-full max-w-[1320px] grid-cols-1 px-6 py-10 text-white sm:min-h-screen sm:px-10 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-14 lg:py-16">
          <div className="flex h-full flex-col">
            <div className="flex items-start gap-3 sm:items-center sm:gap-4">
              <div className="inline-grid h-11 w-11 place-items-center overflow-hidden rounded-xl border border-white/20 bg-white/10 p-1.5 text-white shadow-[0_10px_24px_rgba(6,19,36,0.2)] backdrop-blur-[12px] sm:h-16 sm:w-16 sm:rounded-2xl sm:p-1">
                <img src="/asset/hhlogo.jpeg" alt="HH Consulting logo" className="h-full w-full object-contain" />
              </div>
              <div className="min-w-0 rounded-2xl border border-white/20 bg-white/10 px-3 py-2 leading-tight backdrop-blur-[12px] sm:px-4 sm:py-3">
                <p className="m-0 text-[1.08rem] font-extrabold leading-[1.2] tracking-[0.01em] text-white sm:text-[2rem] sm:leading-tight">
                  {data.company}
                </p>
                {data.companyAmharic ? (
                  <p className="m-0 mt-1 text-[0.86rem] font-black leading-[1.25] tracking-[0.01em] text-white sm:text-[1.06rem] sm:tracking-[0.02em]">
                    {data.companyAmharic}
                  </p>
                ) : null}
                <p className="m-0 mt-1 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[#D5B223] sm:text-[1.05rem] sm:tracking-[0.12em]">
                  {data.subtitle}
                </p>
              </div>
            </div>

            <motion.div
              className="mt-16 text-left sm:mt-20 lg:mt-24"
              initial={{ opacity: 0, y: 42 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <h1
                className="max-w-[680px] text-[3rem] font-extrabold leading-[1.02] tracking-[-0.02em] text-white sm:text-[4.1rem] lg:text-[5.7rem]"
              >
                {headlineWords.map((word, index) => {
                  const isExcellence = word.toLowerCase().replace(/[^a-z]/g, "") === "excellence";

                  return (
                    <span
                      key={`${word}-${index}`}
                      className={[
                        "mr-[0.25em] inline-block",
                        isExcellence ? "font-['Playfair_Display',serif] font-semibold italic tracking-[-0.01em] text-[#F6EAD0]" : "",
                      ].join(" ")}
                    >
                      {word}
                    </span>
                  );
                })}
              </h1>
              <p className="mt-6 max-w-[620px] text-[1.05rem] leading-8 text-white/80 sm:text-[1.25rem] sm:leading-9">
                {data.description}
              </p>
              <a
                href={data.ctaHref}
                className="mt-8 inline-flex items-center justify-center rounded-full border-2 border-white/80 bg-transparent px-8 py-3.5 text-[1rem] font-extrabold tracking-[0.02em] text-white shadow-[0_10px_24px_rgba(8,25,45,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D5B223] hover:bg-[#D5B223] hover:text-[#08192D] hover:shadow-[0_18px_32px_rgba(213,178,35,0.45)] sm:px-10 sm:py-4 sm:text-[1.12rem]"
              >
                {data.ctaLabel}
              </a>
            </motion.div>

            <div className="mt-auto flex justify-center pb-2 lg:justify-start">
              <div className="flex h-14 w-9 items-start justify-center rounded-full border-2 border-white/35 p-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
              </div>
            </div>
          </div>

          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
