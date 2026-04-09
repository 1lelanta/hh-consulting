function ClientBadge({ name }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="flex h-[80px] w-[132px] shrink-0 flex-col items-center justify-center rounded-[16px] border border-brand-gray200 bg-white px-3 text-center shadow-[0_10px_22px_rgba(13,40,74,0.07)]">
      <div className="grid h-11 w-11 place-items-center rounded-full bg-brand-navy900 text-[0.9rem] font-extrabold tracking-[0.08em] text-white">
        {initials}
      </div>
      <p className="mt-2 line-clamp-2 text-[0.76rem] font-semibold leading-4 text-brand-navy900">{name}</p>
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

        <div className="mt-6 space-y-6">
          {data.clientGroups.map((group) => (
            <div key={group.title}>
              <p className="m-0 mb-3 text-[0.9rem] font-bold uppercase tracking-[0.14em] text-brand-gray500">
                {group.title}
              </p>
              <div className="-mx-3 flex gap-4 overflow-x-auto px-3 pb-2 no-scrollbar">
                {group.clients.map((client) => (
                  <ClientBadge key={client} name={client} />
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