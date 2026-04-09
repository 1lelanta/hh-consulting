function ClientLogoTile({ item }) {
  return (
    <div className="group flex h-[80px] w-[132px] shrink-0 items-center justify-center rounded-[16px] border border-brand-gray200 bg-white px-3 shadow-[0_10px_22px_rgba(13,40,74,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(13,40,74,0.12)]">
      {item.logoSrc ? (
        <img
          src={item.logoSrc}
          alt={item.name}
          className="max-h-[48px] max-w-[108px] object-contain transition duration-300 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="grid h-12 w-12 place-items-center rounded-full bg-[#0D284A] text-white transition duration-300 group-hover:scale-[1.03]">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <rect x="5" y="5" width="14" height="14" rx="3" />
            <path d="M8 16V9l4-2 4 2v7" />
            <path d="M8 12h8" />
          </svg>
        </div>
      )}
      <span className="sr-only">{item.name}</span>
    </div>
  );
}

function SectionIcon({ type }) {
  const common = "h-5 w-5 text-[#D5B223]";

  if (type === "document") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M6 3h9l3 3v15H6z" />
        <path d="M15 3v3h3" />
        <path d="M8 11h8" />
        <path d="M8 15h6" />
      </svg>
    );
  }

  if (type === "global") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18" />
        <path d="M12 3a15 15 0 0 0 0 18" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" />
    </svg>
  );
}

function ClientsSection({ data, className = "" }) {
  const duplicateRow = (row) => [...row.items, ...row.items];

  return (
    <section
      id="clients"
      className={`animate-reveal mt-8 -mx-3 scroll-mt-28 bg-[#F3F5F8] px-3 py-16 [animation-delay:520ms] sm:-mx-6 sm:px-6 sm:py-20 lg:-mx-10 lg:px-10 lg:py-24 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="max-w-[860px]">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-14 bg-[#D5B223]" />
            <p className="m-0 text-[0.95rem] font-extrabold uppercase tracking-[0.14em] text-[#D5B223]">
              {data.eyebrow}
            </p>
          </div>

          <h2 className="m-0 mt-5 text-[2rem] font-extrabold leading-[1.12] tracking-[-0.02em] text-brand-navy900 sm:text-[2.5rem] lg:text-[3.6rem]">
            {data.title}
          </h2>

          <p className="m-0 mt-4 max-w-[820px] text-[1.05rem] leading-8 text-brand-gray500 sm:text-[1.1rem]">
            {data.subtitle}
          </p>
        </div>

        <div className="mt-6 space-y-4">
          {data.logoRows.map((row, index) => (
            <div key={index} className="overflow-x-auto no-scrollbar lg:overflow-hidden">
              <div
                className={[
                  "flex w-max gap-4 px-1 pb-2",
                  index % 2 === 0 ? "lg:animate-marquee" : "lg:animate-marquee-reverse",
                  "hover:[animation-play-state:paused]",
                ].join(" ")}
              >
                {duplicateRow(row).map((item, itemIndex) => (
                  <ClientLogoTile key={`${item.name}-${itemIndex}`} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {data.certifications.map((card) => (
            <article
              key={card.title}
              className="rounded-[18px] border border-brand-gray200 bg-white p-5 shadow-[0_10px_24px_rgba(13,40,74,0.07)]"
            >
              <div className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-[#F4EED8]">
                <SectionIcon type={card.icon} />
              </div>
              <h3 className="m-0 mt-4 text-[1.2rem] font-extrabold leading-tight text-brand-navy900">
                {card.title}
              </h3>
              <p className="m-0 mt-3 text-[0.98rem] leading-7 text-brand-gray500">
                {card.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {data.metrics.map((metric) => (
            <article
              key={metric.label}
              className="rounded-[18px] border border-brand-gray200 bg-white px-5 py-4 text-center shadow-[0_10px_24px_rgba(13,40,74,0.06)]"
            >
              <p className="m-0 text-[1.7rem] font-extrabold leading-none tracking-[-0.02em] text-brand-navy900">
                {metric.value}
              </p>
              <p className="m-0 mt-2 text-[0.92rem] font-semibold text-brand-gray500">{metric.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;