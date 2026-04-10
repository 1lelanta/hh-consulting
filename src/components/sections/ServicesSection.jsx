import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function formatGhostNumber(index) {
  return String(index + 1).padStart(2, "0");
}

function ServiceIcon({ type }) {
  const common = "h-7 w-7 text-[#D5B223] sm:h-8 sm:w-8";

  if (type === "architectural-design") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={common}>
        <path d="M4 20h16" />
        <path d="M7 20V8l5-4 5 4v12" />
        <path d="M10 20v-6h4v6" />
      </svg>
    );
  }

  if (type === "structural-engineering") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={common}>
        <path d="M5 19h14" />
        <path d="M7 19V8l5-4 5 4v11" />
        <path d="M9 12h6" />
        <path d="M9 15h6" />
      </svg>
    );
  }

  if (type === "urban-planning") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={common}>
        <path d="M4 5h16v14H4z" />
        <path d="M8 5v14" />
        <path d="M4 10h16" />
        <path d="M13 19v-5" />
      </svg>
    );
  }

  if (type === "infrastructure-design") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={common}>
        <path d="M4 12h16" />
        <path d="M6 8h4l2 4 2-4h4" />
        <path d="M6 16h12" />
      </svg>
    );
  }

  if (type === "water-engineering") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={common}>
        <path d="M12 3s-5 5-5 9a5 5 0 0 0 10 0c0-4-5-9-5-9Z" />
        <path d="M8 17c1.2.8 2.6 1.2 4 1.2s2.8-.4 4-1.2" />
      </svg>
    );
  }

  if (type === "feasibility-study") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={common}>
        <path d="M5 4h9l5 5v11H5z" />
        <path d="M14 4v5h5" />
        <path d="M8 14h8" />
        <path d="M8 17h6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={common}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 7h6" />
      <path d="M9 11h6" />
      <path d="M9 15h3" />
    </svg>
  );
}

function ExpertiseItem({ service, index, staggerClass, scrollYProgress, isDesktop, reduceMotion }) {
  const parallaxEnabled = isDesktop && !reduceMotion;
  const ghostY = useTransform(scrollYProgress, [0, 1], [-28, 28]);
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.55, ease: [0.17, 0.67, 0.83, 0.67] },
    },
  };

  return (
    <motion.article
      variants={itemVariants}
      className={[
        "relative flex min-h-[152px] w-full flex-col items-center text-center lg:min-h-[220px]",
        "lg:max-w-[240px]",
        staggerClass,
      ].join(" ")}
    >
      <motion.span
        className="pointer-events-none absolute left-1/2 top-[-22px] z-0 -translate-x-1/2 text-[108px] font-black leading-none text-transparent sm:text-[132px] lg:text-[144px]"
        style={{ WebkitTextStroke: "1px #e2e8f0", y: parallaxEnabled ? ghostY : 0 }}
        aria-hidden="true"
      >
        {formatGhostNumber(index)}
      </motion.span>

      <div className="relative z-10 flex w-full flex-col items-center">
        <div className="inline-flex h-11 w-11 items-center justify-center sm:h-14 sm:w-14">
          <ServiceIcon type={service.icon} />
        </div>

        <span className="mt-3 block h-[1px] w-[50px] bg-[#D5B223]" aria-hidden="true" />

        <h3 className="m-0 mt-3 text-[0.84rem] font-extrabold uppercase leading-[1.35] tracking-[0.18em] text-brand-navy900 sm:text-[0.92rem]">
          {service.title}
        </h3>

        <p className="m-0 mt-2 max-w-[230px] text-[0.74rem] leading-5 text-brand-gray500 sm:max-w-[250px] sm:text-[0.84rem] sm:leading-6">
          {service.description}
        </p>
      </div>
    </motion.article>
  );
}

function ServicesSection({ data, className = "" }) {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");

    const apply = () => {
      setIsDesktop(media.matches);
    };

    apply();
    media.addEventListener("change", apply);

    return () => {
      media.removeEventListener("change", apply);
    };
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      id="services"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] }}
      viewport={{ once: true, amount: 0.2 }}
      className={`animate-reveal mt-8 -mx-3 scroll-mt-28 bg-transparent px-3 py-12 [animation-delay:200ms] sm:-mx-6 sm:px-6 sm:py-16 lg:-mx-10 lg:px-10 lg:py-20 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div className="relative mx-auto w-full max-w-[1320px]">
        <div className="max-w-[700px]">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-14 bg-[#D5B223]" />
            <p className="section-eyebrow text-[#D5B223]">
              {data.eyebrow}
            </p>
          </div>

          <h2 className="m-0 mt-4 text-[1.75rem] font-extrabold leading-[1.14] tracking-[-0.02em] text-brand-navy900 sm:mt-5 sm:text-[2.45rem] lg:text-[3.3rem]">
            {data.title}
          </h2>
        </div>

        <motion.div
          className="relative z-10 mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:items-stretch lg:gap-x-12 lg:gap-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data.items.map((service, index) => {
            return (
              <ExpertiseItem
                key={service.title}
                service={service}
                index={index}
                staggerClass=""
                scrollYProgress={scrollYProgress}
                isDesktop={isDesktop}
                reduceMotion={reduceMotion}
              />
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ServicesSection;
