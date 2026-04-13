import { animate, motion, useInView, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AnimatedSection, { staggerItemVariants } from "../ui/AnimatedSection";

function StatCounter({ value, suffix, label, delay = 0 }) {
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
    <motion.article
      ref={ref}
      initial="hidden"
      whileInView="visible"
      variants={staggerItemVariants}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1], delay }}
      className="group h-full rounded-[16px] border border-white/10 bg-white/[0.06] px-5 py-5 shadow-[0_12px_28px_rgba(2,6,23,0.22)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D5B223]/30 hover:shadow-[0_18px_36px_rgba(2,6,23,0.28)] sm:px-6"
    >
      <p className="m-0 font-['JetBrains_Mono',monospace] text-[2.3rem] font-semibold leading-none tracking-[-0.02em] text-brand-navy900 sm:text-[2.8rem]">
        <span>{displayValue}</span>
        <span className="ml-0.5 inline-block align-top text-[0.48em] leading-none">{suffix}</span>
      </p>
      <p className="m-0 mt-2 whitespace-normal break-words text-[0.84rem] font-extrabold uppercase leading-[1.35] tracking-[0.06em] text-brand-gray500 sm:text-[0.9rem]">
        {label}
      </p>
    </motion.article>
  );
}

function AboutSection({ data, className = "" }) {
  return (
    <AnimatedSection
      id="about"
      backgroundClassName="bg-[#0A1020]"
      className={`mt-8 overflow-hidden [animation-delay:120ms] ${className}`}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1240px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div className="max-w-[660px]">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-14 bg-[#D5B223]" />
              <p className="section-eyebrow text-[#D5B223]">{data.eyebrow}</p>
            </div>

            <h2 className="m-0 mt-5 max-w-[16ch] text-[2.5rem] font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-[3.35rem] lg:text-[4.2rem]">
              {data.title}
            </h2>

            <p className="m-0 mt-7 max-w-[36rem] text-[1rem] leading-8 text-white/72 sm:text-[1.08rem]">
              {data.description}
            </p>

            {data.approachTitle || data.approachDescription ? (
              <article className="mt-8 rounded-[20px] border border-white/10 bg-white/[0.05] px-6 py-6 shadow-[0_18px_38px_rgba(2,6,23,0.24)] sm:px-7 sm:py-7">
                {data.approachTitle ? (
                  <h3 className="m-0 text-[1.2rem] font-extrabold leading-tight text-white sm:text-[1.35rem] lg:text-[1.5rem]">
                    {data.approachTitle}
                  </h3>
                ) : null}

                {data.approachDescription ? (
                  <p className="m-0 mt-3 max-w-[62ch] text-[0.98rem] leading-[1.7] text-white/70 sm:mt-4 sm:text-[1.04rem]">
                    {data.approachDescription}
                  </p>
                ) : null}
              </article>
            ) : null}

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <StatCounter value={10} suffix="+" label="Years Experience" delay={0} />
              <StatCounter value={50} suffix="+" label="Projects" delay={0.08} />
              <StatCounter value={100} suffix="%" label="Sustainability" delay={0.16} />
            </div>
          </div>

          <div className="justify-self-end lg:pr-2">
            {data.image ? (
              <figure className="m-0 overflow-hidden rounded-[24px] border border-white/10 bg-white/5 shadow-[0_26px_60px_rgba(2,6,23,0.38)] lg:w-[640px]">
                <img
                  src={data.image}
                  alt={data.imageAlt || "About us image"}
                  className="block h-auto w-full max-w-full object-cover"
                />
              </figure>
            ) : null}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default AboutSection;
