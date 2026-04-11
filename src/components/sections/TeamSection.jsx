import { motion } from "framer-motion";

function TeamSection({ data, className = "" }) {
  const members = [...(data.leadership || []), ...(data.departmentLeads || []), ...(data.supportTeam || [])];

  function TeamCard({ member, index }) {
    const mailTo = `mailto:hhconsultingarchitectengineers@gmail.com?subject=${encodeURIComponent(`Connect with ${member.name}`)}`;
    const linkedIn = member.linkedin || "https://www.linkedin.com";

    return (
      <motion.article
        className="group overflow-hidden rounded-[18px] border border-[#E5E7EB] bg-white shadow-[0_14px_32px_rgba(15,23,42,0.1)] transition duration-300 hover:-translate-y-1 hover:border-[#D5B223]/45 hover:shadow-[0_24px_42px_rgba(15,23,42,0.16)]"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1], delay: index * 0.07 }}
      >
        <div className="relative aspect-[4/4.6] overflow-hidden">
          <img
            src={member.image}
            alt={member.imageAlt}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1220]/72 via-[#0B1220]/28 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            {member.description ? (
              <p className="m-0 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-[0.78rem] leading-5 text-[#F3F4F6] backdrop-blur-sm">
                {member.description}
              </p>
            ) : null}

            <div className="mt-3 flex items-center gap-2">
              <a
                href={linkedIn}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${member.name} LinkedIn profile`}
                className="inline-grid h-9 w-9 place-items-center rounded-full border border-[#D5B223]/55 bg-[#D5B223]/22 text-[#F8D66A] backdrop-blur-sm transition duration-300 hover:bg-[#D5B223]/35"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M6.94 8.5v8.56H4.08V8.5h2.86ZM5.51 7.3a1.66 1.66 0 1 1 0-3.33 1.66 1.66 0 0 1 0 3.32ZM19.94 12.2v4.86h-2.85v-4.53c0-1.14-.4-1.92-1.44-1.92-.79 0-1.26.53-1.47 1.04-.08.18-.1.44-.1.7v4.7h-2.86s.04-7.62 0-8.56h2.86v1.2c.37-.58 1.02-1.4 2.5-1.4 1.82 0 3.19 1.2 3.19 3.9Z" />
                </svg>
              </a>
              <a
                href={mailTo}
                aria-label={`Email ${member.name}`}
                className="inline-grid h-9 w-9 place-items-center rounded-full border border-[#D5B223]/55 bg-[#D5B223]/22 text-[#F8D66A] backdrop-blur-sm transition duration-300 hover:bg-[#D5B223]/35"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3.5" y="6" width="17" height="12" rx="2.2" />
                  <path d="m5.5 8.1 6.5 4.7 6.5-4.7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="px-5 pb-5 pt-4 text-left sm:px-6">
          <h3 className="m-0 font-['Poppins','Inter',sans-serif] text-[1.14rem] font-bold leading-tight tracking-[-0.01em] text-[#111827] sm:text-[1.2rem]">
            {member.name}
          </h3>
          <p className="m-0 mt-2 text-[0.92rem] font-medium leading-6 text-[#6B7280]">
            {member.role}
          </p>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.section
      id="team"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] }}
      viewport={{ once: true, amount: 0.2 }}
      className={`animate-reveal mt-8 -mx-3 scroll-mt-28 bg-transparent px-3 py-16 [animation-delay:360ms] sm:-mx-6 sm:px-6 sm:py-20 lg:-mx-10 lg:px-10 lg:py-24 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="max-w-[880px]">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-14 bg-[#D5B223]" />
            <p className="section-eyebrow text-[#D5B223]">
              {data.eyebrow}
            </p>
          </div>

          <h2 className="m-0 mt-5 font-['Poppins','Inter',sans-serif] text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] text-brand-navy900 sm:text-[2.5rem] lg:text-[3.25rem]">
            {data.title}
          </h2>

          <p className="m-0 mt-5 max-w-[760px] text-[1.03rem] leading-8 text-brand-gray500 sm:text-[1.1rem]">
            {data.subtitle}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {members.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default TeamSection;
