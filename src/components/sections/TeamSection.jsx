import { motion } from "framer-motion";

function TeamSection({ data, className = "" }) {
  const members = [...(data.leadership || []), ...(data.departmentLeads || []), ...(data.supportTeam || [])];

  function TeamCard({ member, index }) {
    return (
      <motion.article
        className="group"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: [0.17, 0.67, 0.83, 0.67], delay: index * 0.12 }}
      >
        <div className="relative w-full overflow-hidden rounded-sm bg-[#EEF2F7]">
          <img
            src={member.image}
            alt={member.imageAlt}
            className="aspect-square w-full object-cover grayscale transition-[filter,transform] duration-500 group-hover:scale-105 group-hover:grayscale-0"
          />
        </div>

        <div className="mt-3 text-left">
          <h3 className="m-0 text-[1rem] font-bold leading-tight tracking-[-0.01em] text-brand-navy900 sm:text-[1.04rem]">
            {member.name}
          </h3>
          <p className="m-0 mt-1 text-sm font-medium text-brand-gray500">
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
      className={`animate-reveal mt-8 -mx-3 scroll-mt-28 bg-transparent px-3 py-14 [animation-delay:360ms] sm:-mx-6 sm:px-6 sm:py-16 lg:-mx-10 lg:px-10 lg:py-20 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="max-w-[860px]">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-14 bg-[#D5B223]" />
            <p className="section-eyebrow text-[#D5B223]">
              {data.eyebrow}
            </p>
          </div>

          <h2 className="m-0 mt-5 text-[2rem] font-extrabold leading-[1.14] tracking-[-0.02em] text-brand-navy900 sm:text-[2.45rem] lg:text-[3.3rem]">
            {data.title}
          </h2>

          <p className="m-0 mt-4 max-w-[760px] text-[1.05rem] leading-8 text-brand-gray500 sm:text-[1.1rem]">
            {data.subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-14">
          {members.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default TeamSection;
