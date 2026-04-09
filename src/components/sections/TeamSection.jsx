function TeamSection({ data, className = "" }) {
  const members = [...(data.leadership || []), ...(data.departmentLeads || []), ...(data.supportTeam || [])];

  function TeamCard({ member }) {
    return (
      <article className="group">
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
      </article>
    );
  }

  return (
    <section
      id="team"
      className={`animate-reveal mt-8 -mx-3 scroll-mt-28 bg-[#F3F5F8] px-3 py-14 [animation-delay:360ms] sm:-mx-6 sm:px-6 sm:py-16 lg:-mx-10 lg:px-10 lg:py-20 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="max-w-[860px]">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-14 bg-[#D5B223]" />
            <p className="m-0 text-[0.95rem] font-extrabold uppercase tracking-[0.14em] text-[#D5B223]">
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
          {members.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
