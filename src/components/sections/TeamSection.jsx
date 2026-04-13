import { motion } from "framer-motion";
import teamImage from "../../assets/team.png";

function TeamSection({ data, className = "", showList = true, backgroundClassName = "bg-white" }) {
  const members = [...(data.leadership || []), ...(data.departmentLeads || []), ...(data.supportTeam || [])];

  const avatarItems = members.slice(0, 3);
  const extraCount = Math.max(0, members.length - avatarItems.length);
  const heroImage = teamImage;
  const heroImageAlt = data.imageAlt || "Our people and workspace";

  function TeamAvatar({ member, index }) {
    return (
      <motion.div
        whileHover={{ y: -4, scale: 1.08 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
        className={`group flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-[#0F172A] shadow-[0_10px_20px_rgba(15,23,42,0.14)] transition-all duration-300 hover:border-[#D5B223]/70 hover:shadow-[0_16px_28px_rgba(15,23,42,0.2)] ${index > 0 ? "-ml-3" : ""}`}
      >
        <img
          src={member.image}
          alt={member.imageAlt}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </motion.div>
    );
  }

  function TeamCard({ member, index }) {
    const mailTo = `mailto:hhconsultingarchitectengineers@gmail.com?subject=${encodeURIComponent(`Connect with ${member.name}`)}`;
    const linkedIn = member.linkedin || "https://www.linkedin.com";

    return (
      <motion.article
        className="group overflow-hidden rounded-[18px] border border-[#E5E7EB] bg-white shadow-[0_14px_32px_rgba(15,23,42,0.1)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D5B223]/45 hover:shadow-[0_24px_42px_rgba(15,23,42,0.16)]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1], delay: index * 0.07 }}
      >
        <div className="relative aspect-[4/4.6] overflow-hidden">
          <img
            src={member.image}
            alt={member.imageAlt}
            className="h-full w-full object-cover transition-all duration-300 ease-out group-hover:scale-105"
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
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      className={`animate-reveal -mx-3 scroll-mt-28 px-3 py-16 [animation-delay:360ms] sm:-mx-6 sm:px-6 sm:py-20 lg:-mx-10 lg:px-10 lg:py-24 2xl:-mx-14 2xl:px-14 ${backgroundClassName} ${className}`}
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="max-w-[640px] justify-self-start text-left lg:pt-10">
            <h2 className="m-0 mb-12 text-[2.7rem] font-black leading-[1.02] tracking-[-0.04em] text-[#F4F7FB] sm:text-[3.6rem] lg:text-[4.4rem]">
              Our People
            </h2>

            <p className="m-0 mt-6 max-w-[34rem] text-[1rem] leading-8 text-[#8EA0C2] sm:text-[1.08rem]">
              Behind every successful project is a team of dedicated professionals. We bring together diverse expertise to solve complex challenges.
            </p>

            <div className="mt-10 flex items-center">
              {avatarItems.map((member, index) => (
                <TeamAvatar key={member.name} member={member} index={index} />
              ))}

              {extraCount > 0 ? (
                <div className="-ml-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#F4F7FB] text-[0.72rem] font-bold text-[#D4DEE9] shadow-[0_10px_20px_rgba(15,23,42,0.08)]">
                  +{extraCount}
                </div>
              ) : null}
            </div>

            <a
              href="#team-list"
              className="mt-10 inline-flex items-center justify-center bg-[#121A33] px-8 py-3.5 text-[0.88rem] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-[#0B1220] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#121A33] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Meet The Team
            </a>
          </div>

          <div className="justify-self-end lg:pr-2">
            <figure className="m-0 overflow-hidden bg-white shadow-[0_18px_50px_rgba(15,23,42,0.14)] lg:w-[640px]">
              <img
                src={heroImage}
                alt={heroImageAlt}
                className="aspect-[0.92/1] w-full object-cover object-center sm:aspect-[0.98/1] lg:aspect-[1/1.02]"
              />
            </figure>
          </div>
        </div>

        {showList ? (
          <div id="team-list" className="mt-14 scroll-mt-28">
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

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {members.map((member, index) => (
                <TeamCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </motion.section>
  );
}

export default TeamSection;
