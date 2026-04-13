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
      className="group h-full rounded-[14px] border border-[#D9E1EC] bg-white px-5 py-5 shadow-[0_10px_24px_rgba(13,40,74,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_30px_rgba(13,40,74,0.14)] sm:px-6"
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
      backgroundClassName="bg-gray-50"
      className={`mt-8 overflow-hidden [animation-delay:120ms] ${className}`}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        <div className="grid grid-cols-1 gap-8 px-1 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="order-1">
            {data.image ? (
              <figure className="m-0 overflow-hidden rounded-[14px] border border-[#D5DEE9] bg-white shadow-[0_14px_30px_rgba(13,40,74,0.12)]">
                <img
                  src={data.image}
                  alt={data.imageAlt || "About us image"}
                  className="block h-auto w-full max-w-full object-cover"
                />
              </figure>
            ) : null}
          </div>

          <div className="order-2 flex flex-col gap-6 sm:gap-7 lg:gap-8">
            <header className="mb-12 space-y-4">
              <p className="section-eyebrow text-[#B18428]">{data.eyebrow}</p>
              <h2 className="m-0 max-w-[22ch] text-[1.7rem] font-black leading-[1.15] tracking-[-0.02em] text-brand-navy900 sm:text-[2.15rem] lg:text-[2.65rem]">
                {data.title}
              </h2>
            </header>

            <p className="m-0 max-w-[64ch] text-[1rem] leading-[1.65] text-brand-gray500 sm:text-[1.05rem] lg:text-[1.1rem]">
              {data.description}
            </p>

            {data.approachTitle || data.approachDescription ? (
              <article className="rounded-[14px] bg-white px-6 py-6 shadow-[0_12px_28px_rgba(13,40,74,0.1)] sm:px-7 sm:py-7">
                {data.approachTitle ? (
                  <h3 className="m-0 text-[1.2rem] font-extrabold leading-tight text-brand-navy900 sm:text-[1.35rem] lg:text-[1.5rem]">
                    {data.approachTitle}
                  </h3>
                ) : null}

                {data.approachDescription ? (
                  <p className="m-0 mt-3 max-w-[62ch] text-[0.98rem] leading-[1.65] text-brand-gray500 sm:mt-4 sm:text-[1.04rem]">
                    {data.approachDescription}
                  </p>
                ) : null}
              </article>
            ) : null}

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <StatCounter value={10} suffix="+" label="Years Experience" delay={0} />
              <StatCounter value={50} suffix="+" label="Projects" delay={0.08} />
              <StatCounter value={100} suffix="%" label="Sustainability" delay={0.16} />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default AboutSection;
