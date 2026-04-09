import { animate, motion, useInView, useMotionValue, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function StatCounter({ value, suffix, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useMotionValueEvent(count, "change", (latest) => {
    setDisplayValue(Math.round(latest));
  });

  useEffect(() => {
    if (!isInView) {
      return undefined;
    }

    const controls = animate(count, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [count, isInView, value]);

  return (
    <article ref={ref} className="rounded-[16px] border border-[#CCD5E1] bg-white/70 px-5 py-5 shadow-[0_8px_20px_rgba(13,40,74,0.06)] sm:px-6">
      <p className="m-0 text-[2.65rem] font-light leading-none tracking-[-0.02em] text-brand-navy900 sm:text-[3.1rem]">
        {displayValue}
        {suffix}
      </p>
      <p className="m-0 mt-2 whitespace-normal break-words text-[0.9rem] font-extrabold uppercase leading-[1.25] tracking-[0.04em] text-brand-navy900 sm:text-[0.96rem]">
        {label}
      </p>
    </article>
  );
}

function AboutSection({ data, className = "" }) {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const mobileParallaxY = useTransform(scrollYProgress, [0, 1], [34, -38]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");
    const apply = () => setIsMobile(media.matches);

    apply();
    media.addEventListener("change", apply);

    return () => {
      media.removeEventListener("change", apply);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`animate-reveal relative mt-8 -mx-3 scroll-mt-28 overflow-hidden bg-[#F3F5F8] px-3 py-14 [animation-delay:120ms] sm:-mx-6 sm:px-6 sm:py-16 lg:-mx-10 lg:px-10 lg:py-20 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[38%] z-0 -translate-y-1/2 select-none text-center sm:top-[42%]"
        style={{ y: isMobile ? mobileParallaxY : 0 }}
      >
        <p
          className="m-0 whitespace-nowrap text-[92px] font-semibold uppercase leading-none tracking-[0.08em] text-transparent sm:text-[132px] lg:text-[170px]"
          style={{
            WebkitTextStroke: "1.2px rgba(8,25,45,0.62)",
            opacity: 0.085,
          }}
        >
          ARCHITECTS
        </p>
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1320px]">
        <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-8 px-1 sm:px-2 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-4">
          <div className="text-left lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-14 bg-[#D5B223]" />
              <p className="m-0 text-[0.88rem] font-extrabold uppercase tracking-[0.14em] text-[#B18428]">{data.eyebrow}</p>
            </div>

            <h2 className="m-0 mt-4 text-balance text-[1.85rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-brand-navy900 sm:text-[2.35rem] lg:max-w-[420px] lg:text-[2.8rem]">
              {data.title}
            </h2>
          </div>

          <div className="relative border-l border-[#C9D3E0] pl-5 sm:pl-7 lg:pl-10">
            <p className="m-0 text-left text-[1.02rem] leading-8 text-brand-gray500 sm:text-[1.08rem] sm:leading-9">
              {data.description}
            </p>

            {data.approachTitle || data.approachDescription ? (
              <div className="ml-auto mt-10 w-full max-w-[780px] rounded-[20px] bg-[#EAEFF5] p-4 text-right shadow-[0_10px_22px_rgba(13,40,74,0.05)] sm:p-6 lg:ml-0 lg:text-left">
                {data.approachTitle ? (
                  <h3 className="m-0 text-[1.35rem] font-extrabold uppercase tracking-[0.06em] text-brand-navy900 sm:text-[1.6rem]">
                    {data.approachTitle}
                  </h3>
                ) : null}

                {data.approachDescription ? (
                  <p className="m-0 mt-3 text-[1rem] leading-8 text-brand-gray500 sm:mt-4 sm:text-[1.08rem] sm:leading-9">
                    {data.approachDescription}
                  </p>
                ) : null}
              </div>
            ) : null}

            <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-3">
              <StatCounter value={10} suffix="+" label="Years Experience" />
              <StatCounter value={50} suffix="+" label="Projects" />
              <StatCounter value={100} suffix="%" label="Sustainability" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
