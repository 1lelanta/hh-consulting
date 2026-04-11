import { motion } from "framer-motion";

function ClientLogoTile({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1], delay: index * 0.04 }}
      className="group flex min-h-[126px] items-center justify-center rounded-2xl border border-[#E5E7EB] bg-white px-5 py-5 shadow-[0_12px_28px_rgba(15,23,42,0.08)] transition duration-300 hover:scale-[1.05] hover:border-[#D5B223]/40 hover:shadow-[0_20px_36px_rgba(15,23,42,0.14)]"
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
  const logos = (data.logoRows || []).flatMap((row) => row.items || []);

  return (
    <motion.section
      id="clients"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      className={`animate-reveal relative mt-8 -mx-3 scroll-mt-28 overflow-hidden px-3 py-20 [animation-delay:520ms] sm:-mx-6 sm:px-6 sm:py-24 lg:-mx-10 lg:px-10 lg:py-28 2xl:-mx-14 2xl:px-14 ${className}`}
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

          <p className="m-0 mt-2 max-w-[820px] text-[0.97rem] leading-7 text-[#6B7280] sm:text-[1rem]">
            {data.subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 md:grid-cols-4 lg:mt-12 lg:grid-cols-5 lg:gap-10 xl:grid-cols-6">
          {logos.map((item, index) => (
            <ClientLogoTile key={`${item.name}-${index}`} item={item} index={index} />
          ))}
        </div>

      </div>
    </motion.section>
  );
}

export default ClientsSection;