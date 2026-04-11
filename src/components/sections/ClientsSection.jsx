import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ClientLogoTile({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1], delay: (index % 10) * 0.03 }}
      className="group flex h-[122px] w-[176px] shrink-0 items-center justify-center rounded-2xl border border-[#E5E7EB] bg-white px-5 py-5 shadow-[0_12px_28px_rgba(15,23,42,0.08)] transition duration-300 hover:scale-[1.05] hover:border-[#D5B223]/40 hover:shadow-[0_20px_36px_rgba(15,23,42,0.14)] sm:h-[128px] sm:w-[190px]"
    >
      <img
        src={item.logoSrc}
        alt={item.name}
        className="h-[56px] w-auto max-w-full object-contain transition duration-300 group-hover:saturate-110"
      />
      <span className="sr-only">{item.name}</span>
    </motion.article>
  );
}

function ClientsSection({ data, className = "" }) {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const logos = (data.logoRows || []).flatMap((row) => row.items || []);
  const marqueeLogos = [...logos, ...logos];
  const sectionY = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -30]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.88, 1, 1, 0.94]);
  const trackY = useTransform(scrollYProgress, [0, 0.5, 1], [12, 0, -12]);

  return (
    <motion.section
      ref={sectionRef}
      id="clients"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      className={`animate-reveal relative mt-8 -mx-3 scroll-mt-28 overflow-hidden px-3 py-20 [animation-delay:520ms] sm:-mx-6 sm:px-6 sm:py-24 lg:-mx-10 lg:px-10 lg:py-28 2xl:-mx-14 2xl:px-14 ${className}`}
      style={reduceMotion ? undefined : { opacity: sectionOpacity, y: sectionY }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#F8FAFC_0%,#F2F5F9_100%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_85%_at_14%_0%,rgba(213,178,35,0.09)_0%,rgba(213,178,35,0)_70%)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-[1240px]">
        <div className="max-w-[900px]">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-14 bg-[#D5B223]" />
            <p className="section-eyebrow text-[#D5B223]">
              {data.eyebrow}
            </p>
          </div>

          <h2 className="m-0 mt-5 font-['Poppins','Inter',sans-serif] text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] text-brand-navy900 sm:text-[2.45rem] lg:text-[3.3rem]">
            {data.title}
          </h2>

          <p className="m-0 mt-4 text-[1rem] font-medium leading-7 text-[#4B5563] sm:text-[1.05rem]">
            We collaborate with government, private, and industrial leaders.
          </p>

        </div>

        <div className="relative mt-10 overflow-hidden py-2 lg:mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[#F6F9FC] to-transparent sm:w-24" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[#F2F5F9] to-transparent sm:w-24" aria-hidden="true" />

          <motion.div
            className="animate-marquee flex w-max gap-7 [animation-duration:30s] [animation-timing-function:linear] [animation-iteration-count:infinite] sm:gap-8 lg:gap-10"
            style={reduceMotion ? undefined : { y: trackY }}
          >
            {marqueeLogos.map((item, index) => (
              <ClientLogoTile key={`${item.name}-${index}`} item={item} index={index} />
            ))}
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
}

export default ClientsSection;