import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

function HeroSection({ data }) {
  const heroRef = useRef(null);
  const backgrounds = useMemo(() => {
    if (Array.isArray(data.backgroundImages) && data.backgroundImages.length > 0) {
      return data.backgroundImages;
    }

    return data.image ? [{ src: data.image, alt: data.imageAlt || "Hero background" }] : [];
  }, [data.backgroundImages, data.image, data.imageAlt]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileTouch, setIsMobileTouch] = useState(false);
  const [hasTouchStarted, setHasTouchStarted] = useState(false);
  const [hasTouchScrolled, setHasTouchScrolled] = useState(false);
  const headlineWords = useMemo(() => (data.headline ? data.headline.split(" ") : []), [data.headline]);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const blueprintFadeRaw = useTransform(scrollYProgress, [0, 0.32], [1, 0]);
  const blueprintFade = useSpring(blueprintFadeRaw, { stiffness: 95, damping: 22, mass: 0.35 });

  const headlineVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.11,
        delayChildren: 0.04,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 12 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const shouldRevealByTouch = isMobileTouch && hasTouchScrolled;

  useEffect(() => {
    if (backgrounds.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % backgrounds.length);
    }, 20000);

    return () => window.clearInterval(timer);
  }, [backgrounds.length]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px) and (pointer: coarse)");

    const apply = () => {
      setIsMobileTouch(media.matches);
      if (!media.matches) {
        setHasTouchStarted(false);
        setHasTouchScrolled(false);
      }
    };

    apply();
    media.addEventListener("change", apply);

    return () => {
      media.removeEventListener("change", apply);
    };
  }, []);

  useEffect(() => {
    if (!isMobileTouch || !hasTouchStarted || hasTouchScrolled) {
      return undefined;
    }

    const onScroll = () => {
      if (window.scrollY > 4) {
        setHasTouchScrolled(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isMobileTouch, hasTouchStarted, hasTouchScrolled]);

  return (
    <motion.section
      id="home"
      ref={heroRef}
      onTouchStart={() => {
        if (isMobileTouch) {
          setHasTouchStarted(true);
        }
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] }}
      viewport={{ once: true, amount: 0.2 }}
      className="hero-grid-paper animate-reveal relative -mx-3 overflow-hidden scroll-mt-28 sm:-mx-6 lg:-mx-10 2xl:-mx-14"
    >
      <div className="relative min-h-[100svh] lg:min-h-screen">
        {backgrounds.map((background, index) => (
          <motion.img
            key={`${background.src}-${index}`}
            src={background.src}
            alt={background.alt}
            className={[
              "absolute inset-0 h-full w-full object-cover will-change-[opacity,transform]",
              index === activeIndex ? "animate-ken-burns-slow" : "",
            ].join(" ")}
            initial={false}
            animate={index === activeIndex ? { opacity: 1 } : { opacity: 0 }}
            transition={{ opacity: { duration: 1.4, ease: "easeOut" } }}
          />
        ))}

        <motion.div
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{ opacity: isMobileTouch ? (shouldRevealByTouch ? blueprintFade : 1) : 0 }}
          aria-hidden="true"
        >
          {backgrounds.map((background, index) => (
            <motion.img
              key={`blueprint-${background.src}-${index}`}
              src={background.src}
              alt=""
              className={[
                "hero-blueprint absolute inset-0 h-full w-full object-cover will-change-[opacity,transform]",
                index === activeIndex ? "animate-ken-burns-slow" : "",
              ].join(" ")}
              initial={false}
              animate={index === activeIndex ? { opacity: 1 } : { opacity: 0 }}
              transition={{ opacity: { duration: 1.4, ease: "easeOut" } }}
            />
          ))}
        </motion.div>

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(213,178,35,0.14),transparent_34%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_34%)]" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1320px] flex-col-reverse px-6 py-8 text-white sm:px-10 sm:py-10 lg:grid lg:min-h-screen lg:grid-cols-[0.72fr_1.28fr] lg:px-14 lg:py-16">
          <motion.div
            className="flex min-h-[36svh] max-w-[620px] flex-col justify-end pb-3 text-left sm:min-h-[38svh] sm:pb-5 lg:min-h-0 lg:max-w-[540px] lg:justify-center lg:pb-0 xl:max-w-[560px]"
            initial={{ opacity: 0, y: 42 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="flex items-start gap-3.5 sm:items-start sm:gap-4">
              <div className="inline-grid h-12 w-12 place-items-center overflow-hidden rounded-xl border border-white/35 bg-white/15 p-1.5 text-white shadow-[0_10px_24px_rgba(6,19,36,0.28)] backdrop-blur-[12px] sm:h-[74px] sm:w-[74px] sm:rounded-2xl sm:p-1.5">
                <img src="/asset/hhlogo.jpeg" alt="HH Consulting logo" className="h-full w-full object-contain" />
              </div>
              <div className="min-w-0 rounded-2xl border border-white/30 bg-black/22 px-3.5 py-2.5 leading-tight shadow-[0_12px_24px_rgba(5,16,33,0.24)] backdrop-blur-[14px] sm:px-5 sm:py-4">
                <p className="m-0 text-[0.64rem] font-bold uppercase tracking-[0.22em] text-white/78 sm:text-[0.7rem]">
                  HH Consulting Logo
                </p>
                <p className="m-0 mt-1.5 text-[0.94rem] font-black leading-[1.28] tracking-[0.025em] text-white sm:text-[1.34rem] sm:leading-[1.26]">
                  {data.company}
                </p>
                {data.companyAmharic ? (
                  <p className="m-0 mt-2 text-[0.74rem] font-semibold leading-[1.35] tracking-[0.01em] text-white/90 sm:text-[0.96rem] sm:leading-[1.38]">
                    {data.companyAmharic}
                  </p>
                ) : null}
                <p className="m-0 mt-2.5 border-t border-white/22 pt-2 text-[0.72rem] font-extrabold uppercase tracking-[0.16em] text-[#D5B223] sm:text-[0.9rem] sm:tracking-[0.19em]">
                  {data.subtitle}
                </p>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 lg:mt-12">
              <motion.h1
                className="max-w-[620px] text-5xl leading-[0.98] tracking-[-0.02em] text-white lg:max-w-[560px] lg:text-8xl"
                variants={headlineVariants}
                initial={isMobileTouch ? "hidden" : "visible"}
                animate={isMobileTouch ? (shouldRevealByTouch ? "visible" : "hidden") : "visible"}
              >
                {headlineWords.map((word, index) => {
                  const normalizedWord = word.toLowerCase().replace(/[^a-z]/g, "");
                  const isExcellence = normalizedWord === "excellence";
                  const isEngineered = normalizedWord === "engineered";

                  return (
                    <motion.span
                      key={`${word}-${index}`}
                      variants={wordVariants}
                      className={[
                        "mr-[0.25em] inline-block",
                        isEngineered ? "font-black" : "",
                        isExcellence
                          ? "bg-gradient-to-r from-[#FFF7E5] via-[#F6EAD0] to-[#DFC7A0] bg-clip-text font-['Playfair_Display',serif] font-light italic text-transparent [filter:drop-shadow(0_1px_10px_rgba(255,236,196,0.22))]"
                          : "",
                      ].join(" ")}
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </motion.h1>
              <p className="mt-6 max-w-[600px] text-[1.05rem] leading-8 text-white/70 sm:text-[1.25rem] sm:leading-9">
                {data.description}
              </p>
              <a
                href={data.ctaHref}
                className="group relative mt-8 inline-flex items-center gap-2.5 overflow-visible px-8 py-3.5 text-[1rem] font-extrabold tracking-[0.02em] text-white transition-colors duration-500 sm:px-10 sm:py-4 sm:text-[1.12rem]"
              >
                <span className="pointer-events-none absolute inset-0 border border-white/75" aria-hidden="true" />
                <span className="pointer-events-none absolute -left-2 -top-2 h-3 w-5 border-l border-t border-white/75" aria-hidden="true" />
                <span className="pointer-events-none absolute -right-2 -top-2 h-3 w-5 border-r border-t border-white/75" aria-hidden="true" />
                <span className="pointer-events-none absolute -bottom-2 -left-2 h-3 w-5 border-b border-l border-white/75" aria-hidden="true" />
                <span className="pointer-events-none absolute -bottom-2 -right-2 h-3 w-5 border-b border-r border-white/75" aria-hidden="true" />

                <span
                  className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-[#F8FBFF]/24 transition-transform duration-700 ease-[cubic-bezier(0.2,0.9,0.24,1)] group-hover:scale-x-100"
                  aria-hidden="true"
                />

                <span className="relative z-10">{data.ctaLabel}</span>
                <span className="relative z-10 inline-grid w-0 -translate-x-1 opacity-0 transition-all duration-500 group-hover:w-5 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 text-[#E8EEF7]">
                    <path d="M4 20h16" />
                    <path d="M4 6h4v4H4z" />
                    <path d="M16 12h4v4h-4z" />
                    <path d="M8 8 16 12" />
                    <circle cx="8" cy="8" r="1" fill="currentColor" />
                    <circle cx="16" cy="12" r="1" fill="currentColor" />
                  </svg>
                </span>
              </a>
            </div>
          </motion.div>

          <div className="h-[58svh] lg:h-auto" aria-hidden="true" />
        </div>
      </div>
    </motion.section>
  );
}

export default HeroSection;
