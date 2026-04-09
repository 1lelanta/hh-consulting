import { useEffect, useMemo, useState } from "react";

function HeroSection({ data }) {
  const backgrounds = useMemo(() => {
    if (Array.isArray(data.backgroundImages) && data.backgroundImages.length > 0) {
      return data.backgroundImages;
    }

    return data.image ? [{ src: data.image, alt: data.imageAlt || "Hero background" }] : [];
  }, [data.backgroundImages, data.image, data.imageAlt]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (backgrounds.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % backgrounds.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [backgrounds.length]);

  return (
    <section id="home" className="animate-reveal -mx-3 overflow-hidden scroll-mt-28 sm:-mx-6 lg:-mx-10 2xl:-mx-14">
      <div className="relative min-h-[90vh] sm:min-h-screen">
        {backgrounds.map((background, index) => (
          <img
            key={`${background.src}-${index}`}
            src={background.src}
            alt={background.alt}
            className={[
              "absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-in-out",
              index === activeIndex ? "scale-105 opacity-100" : "scale-110 opacity-0",
            ].join(" ")}
          />
        ))}
        <div className="absolute inset-0 bg-[#0E2A55]/72" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A234A]/70 via-[#0A234A]/50 to-[#0A234A]/34" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(213,178,35,0.14),transparent_34%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_34%)]" />

        <div className="relative z-10 mx-auto flex min-h-[90vh] w-full max-w-[1320px] flex-col px-6 py-10 text-white sm:min-h-screen sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="flex items-center gap-4">
            <div className="inline-grid h-16 w-16 place-items-center overflow-hidden rounded-2xl bg-white/95 p-1 text-white shadow-[0_10px_24px_rgba(6,19,36,0.18)]">
              <img src="/asset/hhlogo.jpeg" alt="HH Consulting logo" className="h-full w-full object-cover" />
            </div>
            <div className="leading-tight">
              <p className="m-0 text-[2rem] font-extrabold tracking-[0.01em] text-white">{data.company}</p>
              <p className="m-0 mt-1 text-[1.05rem] font-bold uppercase tracking-[0.12em] text-[#D5B223]">
                {data.subtitle}
              </p>
            </div>
          </div>

          <div className="mt-20 sm:mt-24 lg:mt-28">
            <h1 className="max-w-[700px] text-[3.5rem] font-extrabold leading-[1.02] tracking-[-0.02em] text-white sm:text-[4.2rem] lg:text-[6.2rem]">
              {data.headline}
            </h1>
            <p className="mt-6 max-w-[720px] text-[1.25rem] leading-9 text-white/75 sm:text-[1.4rem]">
              {data.description}
            </p>
            <a
              href={data.ctaHref}
              className="mt-8 inline-block rounded-2xl bg-[#D5B223] px-10 py-5 text-[1.2rem] font-bold text-white shadow-[0_10px_24px_rgba(190,154,90,0.35)]"
            >
              {data.ctaLabel}
            </a>
          </div>

          <div className="mt-auto flex justify-center pb-2">
            <div className="flex h-14 w-9 items-start justify-center rounded-full border-2 border-white/35 p-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
