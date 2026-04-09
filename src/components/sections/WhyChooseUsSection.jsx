function WhyChooseIcon({ type }) {
  const common = "h-7 w-7 text-[#D5B223]";

  if (type === "leaf") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M19 5c-7 0-12 4-12 10 0 2.8 2.2 5 5 5 6 0 10-5 10-12 0-1.7-1.3-3-3-3Z" />
        <path d="M8 16c2-3 5-5 10-7" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M12 3 19 6v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" />
        <path d="m9.5 12 1.8 1.8 3.8-4" />
      </svg>
    );
  }

  if (type === "clock") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18" />
      <path d="M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

function WhyChooseUsSection({ data, className = "" }) {
  return (
    <section
      id="why-choose-us"
      className={`animate-reveal mt-8 -mx-3 scroll-mt-28 bg-[#F3F5F8] px-3 py-12 [animation-delay:240ms] sm:-mx-6 sm:px-6 sm:py-20 lg:-mx-10 lg:px-10 lg:py-24 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="max-w-[860px]">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-14 bg-[#D5B223]" />
            <p className="m-0 text-[0.95rem] font-extrabold uppercase tracking-[0.14em] text-[#D5B223]">
              {data.eyebrow}
            </p>
          </div>

          <h2 className="m-0 mt-4 text-[1.75rem] font-extrabold leading-[1.12] tracking-[-0.02em] text-brand-navy900 sm:mt-5 sm:text-[2.55rem] lg:text-[3.6rem]">
            {data.title}
          </h2>

          <p className="m-0 mt-3 max-w-[820px] text-[0.98rem] leading-7 text-brand-gray500 sm:mt-4 sm:text-[1.1rem] sm:leading-8">
            {data.subtitle}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {data.items.map((item) => (
            <article
              key={item.title}
              className="flex h-full min-h-[190px] flex-col rounded-[16px] border border-brand-gray200 bg-white p-4 text-center shadow-[0_10px_24px_rgba(13,40,74,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(13,40,74,0.12)] sm:min-h-[220px] sm:rounded-[18px] sm:p-5"
            >
              <div className="mx-auto inline-grid h-12 w-12 place-items-center rounded-full bg-[#F4EED8] sm:h-14 sm:w-14">
                <WhyChooseIcon type={item.icon} />
              </div>

              <h3 className="m-0 mt-3 text-[1rem] font-extrabold leading-tight tracking-[-0.02em] text-brand-navy900 sm:mt-4 sm:text-[1.2rem]">
                {item.title}
              </h3>

              <p className="m-0 mt-2.5 text-[0.9rem] leading-6 text-brand-gray500 sm:mt-3 sm:text-[0.98rem] sm:leading-7">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;