import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function formatGhostNumber(index) {
  return String(index + 1).padStart(2, "0");
}

function getShortDefinition(service) {
  const shortByIcon = {
    "architectural-design": "Designing clear, functional, and elegant buildings.",
    "structural-engineering": "Engineering safe and durable structural systems.",
    "urban-planning": "Planning organized and future-ready urban spaces.",
    "infrastructure-design": "Creating efficient systems for daily operations.",
    "water-engineering": "Delivering reliable and sustainable water solutions.",
    "feasibility-study": "Testing project viability before execution.",
  };

  return shortByIcon[service.icon] || service.description;
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
        "relative flex min-h-[108px] w-full items-start gap-4 border-b border-[#D9E1EC] py-4 text-left",
        staggerClass,
      ].join(" ")}
    >
      <motion.span
        className="pointer-events-none absolute left-[-8px] top-[-16px] z-0 text-[84px] font-black leading-none text-transparent opacity-55 sm:text-[100px]"
        style={{ WebkitTextStroke: "1px #e2e8f0", y: parallaxEnabled ? ghostY : 0 }}
        aria-hidden="true"
      >
        {formatGhostNumber(index)}
      </motion.span>

      <div className="relative z-10 mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center sm:h-12 sm:w-12">
        <ServiceIcon type={service.icon} />
      </div>

      <div className="relative z-10 flex min-w-0 flex-1 flex-col">
        <span className="mt-1 block h-[1px] w-[42px] bg-[#D5B223]" aria-hidden="true" />

        <h3 className="m-0 mt-3 text-[0.88rem] font-extrabold uppercase leading-[1.35] tracking-[0.18em] text-brand-navy900 sm:text-[0.94rem]">
          {service.title}
        </h3>

        <p className="m-0 mt-1.5 max-w-[420px] text-[0.8rem] leading-6 text-brand-gray500 sm:text-[0.9rem]">
          {getShortDefinition(service)}
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
  const imageY = useTransform(scrollYProgress, [0, 0.5, 1], [56, 0, -48]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 1.06]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2.5, 0, 2.5]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.88]);

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
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-12">
          <div className="max-w-[760px] lg:-ml-3">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-14 bg-[#D5B223]" />
              <p className="section-eyebrow text-[#D5B223]">{data.eyebrow}</p>
            </div>

            {data.title ? (
              <h2 className="m-0 mt-4 text-[1.75rem] font-extrabold leading-[1.14] tracking-[-0.02em] text-brand-navy900 sm:mt-5 sm:text-[2.45rem] lg:text-[3.3rem]">
                {data.title}
              </h2>
            ) : null}

            <p
              className={`m-0 ${data.title ? "mt-4" : "mt-2"}`}
              style={{
                fontSize: "1rem",
                lineHeight: "1.8",
                letterSpacing: "0.3px",
                color: "#b8b8b8",
                maxWidth: "420px",
              }}
            >
              {data.subtitle || "Crafting thoughtful architecture and engineering solutions that stand the test of time."}
            </p>

            <motion.div
              className="relative z-10 mt-8 grid grid-cols-1 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {data.items.map((service, index) => (
                <ExpertiseItem
                  key={service.title}
                  service={service}
                  index={index}
                  staggerClass=""
                  scrollYProgress={scrollYProgress}
                  isDesktop={isDesktop}
                  reduceMotion={reduceMotion}
                />
              ))}
            </motion.div>
          </div>

          {data.image ? (
            <motion.figure
              className="relative m-0 overflow-hidden rounded-[22px] border border-white/60 bg-white shadow-[0_18px_44px_rgba(13,40,74,0.16)] lg:sticky lg:top-24"
              style={reduceMotion ? undefined : { y: imageY, scale: imageScale, rotate: imageRotate, opacity: imageOpacity }}
            >
              <motion.img
                src={data.image}
                alt={data.imageAlt || "Architecture image"}
                className="block h-[320px] w-full object-cover sm:h-[380px] lg:h-[760px]"
                initial={{ opacity: 0.88, scale: 1.03 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, amount: 0.25 }}
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(9,17,30,0.08)_0%,rgba(9,17,30,0.18)_100%)]" aria-hidden="true" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,rgba(9,17,30,0)_0%,rgba(9,17,30,0.42)_100%)]" aria-hidden="true" />
            </motion.figure>
          ) : null}
        </div>
      </div>
    </motion.section>
  );
}

export default ServicesSection;
