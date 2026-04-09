function ContactSection({ data, className = "" }) {
  const phoneIcon = (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M5 4h4l2 5-2.5 1.8a16 16 0 0 0 4.2 4.2L14.5 13l5 2v4a2 2 0 0 1-2 2C10.6 21 3 13.4 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );

  const mailIcon = (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.9">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="m5 8 7 5 7-5" />
    </svg>
  );

  const pinIcon = (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );

  return (
    <section
      id="contact"
      className={`animate-reveal mt-8 -mx-3 scroll-mt-28 bg-[#F3F5F8] px-3 py-14 [animation-delay:430ms] sm:-mx-6 sm:px-6 sm:py-16 lg:-mx-10 lg:px-10 lg:py-20 2xl:-mx-14 2xl:px-14 ${className}`}
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

          <p className="m-0 mt-5 text-[1.1rem] leading-8 text-brand-gray500">{data.description}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 xl:grid-cols-[1fr_0.95fr] xl:items-start">
          <div className="space-y-4">
            {data.contacts.map((item) => {
              const icon = item.type === "phone" ? phoneIcon : item.type === "email" ? mailIcon : pinIcon;

              return (
                <article
                  key={item.label}
                  className="flex items-center gap-4 rounded-2xl border border-brand-gray200 bg-white px-5 py-5 shadow-[0_2px_8px_rgba(13,40,74,0.06)]"
                >
                  <div className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-[#F4EED8] text-[#D5B223]">
                    {icon}
                  </div>

                  <div>
                    <p className="m-0 text-[0.95rem] font-bold uppercase tracking-[0.08em] text-brand-gray500">
                      {item.label}
                    </p>
                    <p className="m-0 mt-1 text-[1.8rem] font-extrabold leading-tight text-brand-navy900">
                      {item.value}
                    </p>
                    {item.subValue ? (
                      <p className="m-0 mt-1 text-[1.05rem] leading-7 text-brand-gray500">{item.subValue}</p>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>

          <article className="rounded-2xl bg-gradient-to-br from-[#112B56] to-[#1F3E65] px-6 py-6 text-white shadow-[0_8px_18px_rgba(13,40,74,0.2)]">
            <h3 className="m-0 text-[2rem] font-extrabold leading-tight">Operating Hours</h3>

            <div className="mt-6 space-y-3.5 text-[1.06rem]">
              {data.hours.map((hour) => (
                <div key={hour.day} className="flex items-center justify-between gap-4">
                  <p className="m-0 text-white/85">{hour.day}</p>
                  <p className="m-0 font-bold">{hour.time}</p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-12 border-t border-brand-gray200 pt-8 text-center">
          <p className="m-0 text-[1.05rem] text-brand-gray500">{data.footer.copyright}</p>
          <div className="mt-3 flex items-center justify-center gap-4 text-[1.05rem] text-brand-gray500">
            <a href={data.footer.privacyHref} className="hover:text-brand-navy900">
              {data.footer.privacyLabel}
            </a>
            <span aria-hidden="true">•</span>
            <a href={data.footer.termsHref} className="hover:text-brand-navy900">
              {data.footer.termsLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
