import logo from "../../assets/hhlogo.jpeg";

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
  const companyLinks = [
    { label: "About", href: "#about-us" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#get-in-touch" },
  ];

  return (
    <footer
      className={`relative -mx-3 overflow-hidden bg-[#050816] px-5 py-[60px] text-white sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(250,204,21,0.08),transparent_25%),radial-gradient(circle_at_85%_0%,rgba(59,130,246,0.12),transparent_28%),linear-gradient(180deg,#050816_0%,#0B1220_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1320px]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[1.15fr_0.75fr_0.9fr] lg:gap-12">
          <div className="order-1">
            <div className="flex items-start gap-4">
              <span className="inline-grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white/95 shadow-[0_10px_20px_rgba(0,0,0,0.18)] sm:h-14 sm:w-14">
                <img src={logo} alt="HH Consulting logo" className="h-full w-full object-cover" />
              </span>
              <div className="min-w-0 max-w-[380px]">
                <p className="m-0 text-[0.74rem] font-bold uppercase tracking-[0.2em] text-[#FACC15]">
                  HH Consulting
                </p>
                <p className="m-0 mt-3 text-[0.98rem] leading-7 text-white/74 sm:text-[1.02rem] sm:leading-7">
                  Engineering &amp; Architecture firm focused on scalable infrastructure solutions.
                </p>
                <p className="m-0 mt-3 text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-white/58">
                  Trusted by institutions across Ethiopia and beyond
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {data.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FACC15]/30 hover:bg-[#FACC15]"
                >
                  <FooterSocialIcon type={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="order-2 pt-1">
            <p className="m-0 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white/48 sm:text-[0.78rem]">Company</p>
            <ul className="mt-5 space-y-4 sm:mt-4 sm:space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[0.98rem] text-white/80 transition-all duration-300 hover:translate-x-1 hover:text-[#FACC15]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-3 pt-1">
            <p className="m-0 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white/48 sm:text-[0.78rem]">Contact</p>
            <div className="mt-5 space-y-3 text-[0.96rem] leading-7 text-white/78">
              <p className="m-0">Addis Ababa, Ethiopia</p>
              <p className="m-0">{data.contact.phone}</p>
              <p className="m-0 break-words">{data.contact.email}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5 text-center text-sm text-white/58 sm:flex sm:items-center sm:justify-between sm:text-left">
          <p className="m-0">{data.copyright}</p>
          <p className="m-0 mt-2 sm:mt-0">Trusted by institutions across Ethiopia and beyond.</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;