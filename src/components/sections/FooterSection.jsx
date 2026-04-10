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
    <footer
      className={`relative -mx-3 overflow-hidden px-3 py-12 text-white sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10 lg:py-20 2xl:-mx-14 2xl:px-14 ${className}`}
      style={{ background: "linear-gradient(180deg, #111111 0%, #0A0A08 100%)" }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(17,17,17,0.9)_0%,rgba(10,10,8,0)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1320px]">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left">
              <span className="inline-grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white/95 ring-1 ring-white/10 sm:h-14 sm:w-14">
                <img src="/asset/hhlogo.jpeg" alt="HH Consulting logo" className="h-full w-full object-cover" />
              </span>
              <div className="min-w-0 max-w-[320px] sm:max-w-none">
                <p className="m-0 text-[0.74rem] font-bold uppercase tracking-[0.14em] text-[#D5B223] sm:text-[0.85rem]">
                  {data.companyName}
                </p>
                <p className="m-0 mt-2 hidden text-[0.92rem] leading-6 text-white/74 sm:block sm:text-[1.02rem] sm:leading-7">
                  Integrated architecture and engineering solutions for public and private projects.
                </p>
              </div>
            </div>

            <div className="mt-5 flex justify-center gap-3 sm:justify-start">
              {data.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/8 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D5B223]"
                >
                  <FooterSocialIcon type={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-1 sm:pt-0">
            <p className="m-0 text-[0.82rem] font-bold uppercase tracking-[0.14em] text-[#D5B223] sm:text-[0.9rem]">Quick Links</p>
            <ul className="mt-5 grid grid-cols-1 gap-y-4 sm:mt-4 sm:grid-cols-1 sm:gap-y-3">
              {data.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[0.98rem] text-white/78 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-1 sm:pt-0">
            <p className="m-0 text-[0.82rem] font-bold uppercase tracking-[0.14em] text-[#D5B223] sm:text-[0.9rem]">Services</p>
            <ul className="mt-5 grid grid-cols-1 gap-y-4 sm:mt-4 sm:grid-cols-1 sm:gap-y-3">
              {data.services.map((service) => (
                <li key={service.label}>
                  <a href={service.href} className="text-[0.98rem] text-white/78 transition-colors hover:text-white">
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <p className="m-0 text-[0.82rem] font-bold uppercase tracking-[0.14em] text-[#D5B223] sm:text-[0.9rem]">Contact</p>
            <div className="mt-4 space-y-3 text-[0.94rem] leading-6 text-white/74 sm:text-[0.98rem] sm:leading-7">
              <p className="m-0">{data.contact.address}</p>
              <p className="m-0">{data.contact.phone}</p>
              <p className="m-0 break-words">{data.contact.email}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5 text-center text-sm text-white/60 sm:flex sm:items-center sm:justify-between sm:text-left">
          <p className="m-0">{data.copyright}</p>
          <p className="m-0 mt-2 sm:mt-0">Trusted by institutions across Ethiopia and beyond.</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;