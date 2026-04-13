import { motion, useReducedMotion } from "framer-motion";
import { certificates } from "./CertificationsSection";

function TrustedCertifiedSection({ className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="trusted-certified"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      className={`animate-reveal -mx-3 scroll-mt-28 bg-[#050816] px-5 py-[60px] text-white sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="max-w-[820px]">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-14 bg-[#FACC15]" />
            <p className="section-eyebrow text-[#FACC15]">Trusted &amp; Certified</p>
          </div>

          <h2 className="m-0 mt-5 text-[clamp(2rem,4vw,3.35rem)] font-black leading-[1.04] tracking-[-0.05em] text-white">
            Trusted &amp; Certified
          </h2>

          <p className="m-0 mt-4 max-w-[760px] text-[0.98rem] leading-[1.75] text-white/72 sm:text-[1.04rem]">
            We meet industry standards and deliver trusted engineering solutions.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {certificates.map((certificate, index) => (
            <motion.article
              key={certificate.title}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1], delay: index * 0.05 }}
              whileHover={reduceMotion ? undefined : { y: -5, scale: 1.01 }}
              whileTap={reduceMotion ? undefined : { scale: 0.99 }}
              className="group overflow-hidden rounded-[16px] border border-white/10 bg-[rgba(255,255,255,0.05)] shadow-[0_16px_34px_rgba(0,0,0,0.22)] transition-all duration-300 hover:border-[#FACC15]/25 hover:shadow-[0_22px_44px_rgba(0,0,0,0.3)]"
            >
              <div className="relative overflow-hidden bg-[#09111f]">
                <img
                  src={certificate.image}
                  alt={certificate.alt}
                  className="h-40 w-full object-cover object-center transition duration-500 group-hover:scale-[1.03] sm:h-44"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.02)_0%,rgba(5,8,22,0.22)_100%)]" aria-hidden="true" />
              </div>

              <div className="flex h-full flex-col p-4 sm:p-5">
                <p className="m-0 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#FACC15]">
                  {certificate.organization}
                </p>
                <h3 className="m-0 mt-3 text-[0.98rem] font-extrabold leading-snug text-white sm:text-[1.05rem]">
                  {certificate.title}
                </h3>
                <p className="m-0 mt-3 text-[0.88rem] leading-6 text-white/70 sm:text-[0.94rem]">
                  {certificate.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default TrustedCertifiedSection;