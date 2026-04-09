function TeamSection({ data, className = "" }) {
  const linkedInIcon = (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <path d="M8 11v5" />
      <circle cx="8" cy="8" r="1" fill="currentColor" />
      <path d="M12 16v-5" />
      <path d="M12 13.2c0-1.4 1-2.2 2.1-2.2 1.4 0 1.9.9 1.9 2.4V16" />
    </svg>
  );

  const mailIcon = (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="m5 8 7 5 7-5" />
    </svg>
  );

  return (
    <section
      id="team"
      className={`animate-reveal mt-8 -mx-3 scroll-mt-28 bg-[#F3F5F8] px-3 py-14 [animation-delay:360ms] sm:-mx-6 sm:px-6 sm:py-16 lg:-mx-10 lg:px-10 lg:py-20 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="max-w-[760px]">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-14 bg-[#D5B223]" />
            <p className="m-0 text-[0.95rem] font-extrabold uppercase tracking-[0.14em] text-[#D5B223]">
              {data.eyebrow}
            </p>
          </div>

          <h2 className="m-0 mt-5 text-[2rem] font-extrabold leading-[1.14] tracking-[-0.02em] text-brand-navy900 sm:text-[2.45rem] lg:text-[3.3rem]">
            {data.title}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {data.members.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-2xl border border-brand-gray200 bg-white shadow-[0_2px_8px_rgba(13,40,74,0.06)]"
            >
              <img src={member.image} alt={member.imageAlt} className="h-[260px] w-full object-cover" />
              <div className="p-5">
                <h3 className="m-0 text-[1.95rem] font-extrabold leading-tight text-brand-navy900">{member.name}</h3>
                <p className="m-0 mt-1 text-[1.2rem] font-semibold text-[#D5B223]">{member.role}</p>
                <p className="m-0 mt-1 text-[1.04rem] text-brand-gray500">{member.specialty}</p>

                <div className="mt-4 flex items-center gap-2 text-brand-navy900">
                  <a
                    href={member.linkedinHref}
                    aria-label={`${member.name} LinkedIn`}
                    className="inline-grid h-8 w-8 place-items-center rounded-lg bg-[#EEF1F6]"
                  >
                    {linkedInIcon}
                  </a>
                  <a
                    href={member.emailHref}
                    aria-label={`${member.name} email`}
                    className="inline-grid h-8 w-8 place-items-center rounded-lg bg-[#EEF1F6]"
                  >
                    {mailIcon}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
