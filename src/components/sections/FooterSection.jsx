function FooterSocialIcon({ type }) {
  const common = "h-5 w-5 text-white";

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <path d="M8 10v6" />
        <circle cx="8" cy="7.8" r="1" fill="currentColor" />
        <path d="M12 16v-6" />
        <path d="M12 13.2c0-1.4 1-2.2 2.1-2.2 1.4 0 1.9.9 1.9 2.4V16" />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M13.5 8.2h1.5V6.2h-1.6c-2 0-3.4 1.3-3.4 3.3V11H8v2h2v5h2.2v-5H14l.3-2h-2.1V9.7c0-.9.3-1.5 1.3-1.5Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <path d="M8 15.5c3.5 0 5.5-2.8 5.5-5.5 0-.1 0-.3 0-.4A4 4 0 0 0 16 7.5c-.6.3-1.2.5-1.9.5.7-.4 1.2-1 1.5-1.8-.7.4-1.4.7-2.2.9a3.2 3.2 0 0 0-5.5 2.2c0 .3 0 .6.1.8-2.7-.1-5-1.4-6.5-3.4-.3.5-.4 1.1-.4 1.7 0 1.3.7 2.4 1.7 3-.6 0-1.2-.2-1.7-.5 0 1.9 1.3 3.4 3 3.8-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 1.5 2 2.5 3.8 2.5" />
    </svg>
  );
}

function FooterSection({ data, className = "" }) {
  return (
    <footer className={`-mx-3 bg-[#08192D] px-3 py-16 text-white sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10 lg:py-20 2xl:-mx-14 2xl:px-14 ${className}`}>
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <span className="inline-grid h-14 w-14 place-items-center overflow-hidden rounded-2xl bg-white/95 ring-1 ring-white/10">
                <img src="/asset/hhlogo.jpeg" alt="HH Consulting logo" className="h-full w-full object-cover" />
              </span>
              <div>
                <p className="m-0 text-[0.85rem] font-bold uppercase tracking-[0.14em] text-[#D5B223]">
                  {data.companyName}
                </p>
                <p className="m-0 mt-1 max-w-[280px] text-[1.05rem] leading-7 text-white/80">
                  Architectural and engineering excellence for public and private institutions.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {data.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/8 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D5B223]"
                >
                  <FooterSocialIcon type={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="m-0 text-[0.9rem] font-bold uppercase tracking-[0.14em] text-[#D5B223]">Quick Links</p>
            <ul className="mt-4 space-y-3">
              {data.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[1rem] text-white/80 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="m-0 text-[0.9rem] font-bold uppercase tracking-[0.14em] text-[#D5B223]">Services</p>
            <ul className="mt-4 space-y-3">
              {data.services.map((service) => (
                <li key={service.label}>
                  <a href={service.href} className="text-[1rem] text-white/80 transition-colors hover:text-white">
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="m-0 text-[0.9rem] font-bold uppercase tracking-[0.14em] text-[#D5B223]">Contact</p>
            <div className="mt-4 space-y-4 text-[1rem] leading-7 text-white/80">
              <p className="m-0">{data.contact.address}</p>
              <p className="m-0">{data.contact.phone}</p>
              <p className="m-0 break-words">{data.contact.email}</p>
              <p className="m-0 break-words">{data.contact.website}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex sm:items-center sm:justify-between">
          <p className="m-0">{data.copyright}</p>
          <p className="m-0 mt-2 sm:mt-0">Trusted by institutions across Ethiopia and beyond.</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;