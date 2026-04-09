function AboutStatIcon({ type }) {
  const common = "h-6 w-6 text-[#D5B223]";

  if (type === "users") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1" />
        <circle cx="9.5" cy="7" r="3" />
        <path d="M22 19v-1a4 4 0 0 0-3-3.86" />
        <path d="M15 4.2a3 3 0 0 1 0 5.6" />
      </svg>
    );
  }

  if (type === "award") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <circle cx="12" cy="8" r="5" />
        <path d="M8.2 14.7 7 21l5-2.4L17 21l-1.2-6.3" />
      </svg>
    );
  }

  if (type === "trend") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="m4 15 6-6 4 4 6-6" />
        <path d="M14 7h6v6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </svg>
  );
}

function AboutSection({ data, className = "" }) {
  return (
    <section
      id="about"
      className={`animate-reveal mt-8 -mx-3 scroll-mt-28 bg-[#F3F5F8] px-3 py-14 [animation-delay:120ms] sm:-mx-6 sm:px-6 sm:py-16 lg:-mx-10 lg:px-10 lg:py-20 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="max-w-[760px]">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-14 bg-[#D5B223]" />
            <p className="m-0 text-[0.95rem] font-extrabold uppercase tracking-[0.14em] text-[#D5B223]">
              {data.eyebrow}
            </p>
          </div>

          <h2 className="m-0 mt-5 max-w-[640px] text-balance text-[2rem] font-extrabold leading-[1.14] tracking-[-0.02em] text-brand-navy900 sm:text-[2.45rem] lg:text-[3.45rem]">
            {data.title}
          </h2>

          <p className="m-0 mt-5 max-w-[780px] text-[1.05rem] leading-8 text-brand-gray500">
            {data.description}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {data.stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-2xl border border-brand-gray200 bg-white px-7 py-6 shadow-[0_2px_8px_rgba(13,40,74,0.06)]"
            >
              <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-2xl bg-[#F4EED8]">
                <AboutStatIcon type={stat.icon} />
              </div>
              <p className="m-0 text-[2.15rem] font-extrabold leading-none text-brand-navy900">{stat.value}</p>
              <p className="m-0 mt-2 text-[1.02rem] font-medium text-brand-gray500">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
