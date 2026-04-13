import { motion, useReducedMotion } from "framer-motion";

function ServiceIcon({ type }) {
  const common = "h-5 w-5 text-[#D5B223] sm:h-7 sm:w-7";

  if (type === "architectural-design") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={common}>
        <path d="M4 20h16" />
        <path d="M7 20V8l5-4 5 4v12" />
        <path d="M10 20v-6h4v6" />
      </svg>
    );
  }

  if (type === "structural-engineering") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={common}>
        <path d="M5 19h14" />
        <path d="M7 19V8l5-4 5 4v11" />
        <path d="M9 12h6" />
        <path d="M9 15h6" />
      </svg>
    );
  }

  if (type === "urban-planning") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={common}>
        <path d="M4 5h16v14H4z" />
        <path d="M8 5v14" />
        <path d="M4 10h16" />
        <path d="M13 19v-5" />
      </svg>
    );
  }

  if (type === "infrastructure-design") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={common}>
        <path d="M4 12h16" />
        <path d="M6 8h4l2 4 2-4h4" />
        <path d="M6 16h12" />
      </svg>
    );
  }

  if (type === "water-engineering") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={common}>
        <path d="M12 3s-5 5-5 9a5 5 0 0 0 10 0c0-4-5-9-5-9Z" />
        <path d="M8 17c1.2.8 2.6 1.2 4 1.2s2.8-.4 4-1.2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={common}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 7h6" />
      <path d="M9 11h6" />
      <path d="M9 15h3" />
    </svg>
  );
}

function ServiceVisual({ type }) {
  if (type === "architectural-design") {
    return (
      <svg viewBox="0 0 420 260" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="archSky" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1B2330" />
            <stop offset="50%" stopColor="#3B2F25" />
            <stop offset="100%" stopColor="#10131B" />
          </linearGradient>
        </defs>
        <rect width="420" height="260" fill="url(#archSky)" />
        <rect y="170" width="420" height="90" fill="#141519" />
        <path d="M0 176H420" stroke="#F2D58A" strokeOpacity="0.25" />
        <path d="M48 170C90 84 134 58 189 56C247 54 288 88 334 140C350 158 371 162 397 170H48Z" fill="#2E2A27" opacity="0.96" />
        <path d="M52 170C99 88 141 69 195 68C237 67 275 84 314 123C333 142 352 151 383 170" fill="none" stroke="#E3C06C" strokeWidth="5" strokeLinecap="round" opacity="0.95" />
        <path d="M115 66V170" stroke="#F6E0A0" strokeWidth="8" strokeLinecap="round" opacity="0.85" />
        <path d="M155 58V170" stroke="#F6E0A0" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
        <path d="M198 62V170" stroke="#F6E0A0" strokeWidth="10" strokeLinecap="round" opacity="0.88" />
        <path d="M240 70V170" stroke="#F6E0A0" strokeWidth="6" strokeLinecap="round" opacity="0.82" />
        <path d="M276 82V170" stroke="#F6E0A0" strokeWidth="8" strokeLinecap="round" opacity="0.85" />
        <rect x="300" y="88" width="22" height="82" fill="#D7B15D" opacity="0.95" />
        <rect x="326" y="72" width="28" height="98" fill="#E4C97B" opacity="0.92" />
        <rect x="360" y="94" width="16" height="76" fill="#B98A3D" opacity="0.95" />
      </svg>
    );
  }

  if (type === "structural-engineering") {
    return (
      <svg viewBox="0 0 420 260" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="structSky" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#151A22" />
            <stop offset="55%" stopColor="#273449" />
            <stop offset="100%" stopColor="#10131B" />
          </linearGradient>
        </defs>
        <rect width="420" height="260" fill="url(#structSky)" />
        <rect y="175" width="420" height="85" fill="#10141A" />
        <path d="M70 175L140 72L210 175Z" fill="#253247" />
        <path d="M205 175L274 86L343 175Z" fill="#33455D" />
        <path d="M140 72L210 175M140 72L70 175M140 72H210" stroke="#F3D98A" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
        <path d="M274 86L343 175M274 86L205 175M274 86H343" stroke="#F3D98A" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
        <rect x="110" y="112" width="60" height="18" fill="#E8C974" opacity="0.95" />
        <rect x="245" y="122" width="58" height="16" fill="#E8C974" opacity="0.95" />
        <circle cx="318" cy="58" r="22" fill="#D5B223" opacity="0.16" />
      </svg>
    );
  }

  if (type === "urban-planning") {
    return (
      <svg viewBox="0 0 420 260" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="urbanSky" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1A2534" />
            <stop offset="55%" stopColor="#4C3E31" />
            <stop offset="100%" stopColor="#10131B" />
          </linearGradient>
        </defs>
        <rect width="420" height="260" fill="url(#urbanSky)" />
        <rect y="170" width="420" height="90" fill="#13161C" />
        <path d="M45 174H375" stroke="#F0D38A" strokeWidth="5" strokeLinecap="round" opacity="0.75" />
        <path d="M60 152H130V174H60Z" fill="#2E394B" />
        <path d="M140 120H205V174H140Z" fill="#37455A" />
        <path d="M220 132H296V174H220Z" fill="#425063" />
        <path d="M306 98H360V174H306Z" fill="#2B3441" />
        <path d="M80 174V86M176 174V72M260 174V92M332 174V58" stroke="#EBCF79" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
      </svg>
    );
  }

  if (type === "infrastructure-design") {
    return (
      <svg viewBox="0 0 420 260" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="infraSky" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#17212E" />
            <stop offset="50%" stopColor="#31465F" />
            <stop offset="100%" stopColor="#11161F" />
          </linearGradient>
        </defs>
        <rect width="420" height="260" fill="url(#infraSky)" />
        <rect y="170" width="420" height="90" fill="#10141A" />
        <path d="M0 170H420" stroke="#F0D38A" strokeOpacity="0.22" />
        <path d="M52 175C95 125 129 112 175 111C238 110 276 126 334 170" fill="none" stroke="#E8C76E" strokeWidth="7" strokeLinecap="round" opacity="0.95" />
        <path d="M76 170C106 122 135 95 178 92C230 89 269 114 314 160" fill="none" stroke="#F3D98A" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
        <path d="M84 176H336" stroke="#E5C16B" strokeWidth="10" strokeLinecap="round" opacity="0.72" />
        <path d="M104 176V150M158 176V138M214 176V146M270 176V132M318 176V152" stroke="#F5E3A8" strokeWidth="6" strokeLinecap="round" opacity="0.9" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 420 260" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="waterSky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#132133" />
          <stop offset="55%" stopColor="#23425C" />
          <stop offset="100%" stopColor="#0F131B" />
        </linearGradient>
      </defs>
      <rect width="420" height="260" fill="url(#waterSky)" />
      <rect y="170" width="420" height="90" fill="#0F141C" />
      <path d="M40 185C88 162 118 147 165 148C219 149 244 166 292 166C332 166 366 152 398 141" fill="none" stroke="#F1D79B" strokeWidth="5" strokeLinecap="round" opacity="0.82" />
      <path d="M46 201C93 176 126 170 174 172C225 174 252 194 302 194C334 194 364 184 392 173" fill="none" stroke="#7CC4E8" strokeWidth="4" strokeLinecap="round" opacity="0.75" />
      <circle cx="88" cy="86" r="12" fill="#F0D38A" opacity="0.85" />
      <path d="M246 176H376" stroke="#E8C76E" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

function ServicesSection({ data, className = "" }) {
  const reduceMotion = useReducedMotion();
  const serviceItems = Array.isArray(data.items) ? data.items.slice(0, 4) : [];
  const expertiseItems = [
    { label: "Architectural and Engineering Design" },
    { label: "Infrastructure & Civil Engineering" },
    { label: "Urban & Environmental Service" },
    { label: "Feasibility & Planning" },
    { label: "Construction Supervision" },
  ];

  return (
    <motion.section
      id="services"
      initial={reduceMotion ? false : { opacity: 0, y: 50 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      className={`-mx-3 scroll-mt-28 bg-[linear-gradient(180deg,#0A0A0F_0%,#111827_100%)] px-3 py-20 text-white sm:-mx-6 sm:px-6 sm:py-24 lg:-mx-10 lg:px-10 lg:py-24 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="max-w-[840px]">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-14 bg-[#D5B223]" />
            <p className="section-eyebrow text-[#D5B223]">OUR SERVICES</p>
          </div>

          <h2 className="m-0 mb-10 mt-4 text-[1.8rem] font-black leading-[1.08] tracking-tight text-white sm:mt-5 sm:text-[2.4rem] lg:text-[3.1rem]">
            {data.title || "Our Services"}
          </h2>

          <p className="m-0 mt-4 max-w-[56ch] text-[1rem] leading-7 text-white/72 sm:text-[1.05rem]">
            {data.subtitle || "Crafting thoughtful architecture and engineering solutions that stand the test of time."}
          </p>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="no-scrollbar mt-8 flex gap-8 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:overflow-visible"
        >
          {serviceItems.map((service, index) => (
            <motion.article
              key={service.title}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1], delay: index * 0.06 }}
              viewport={{ once: true, amount: 0.35 }}
              className="group min-w-[200px] max-w-[200px] flex-1 snap-start overflow-hidden rounded-[18px] border border-white/12 bg-white/[0.06] shadow-[0_16px_34px_rgba(2,6,23,0.24)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D5B223]/35 hover:bg-white/10 hover:shadow-[0_22px_40px_rgba(2,6,23,0.3)] sm:min-w-0 sm:max-w-none md:min-w-0 md:max-w-none lg:min-w-0"
            >
              <div className="relative h-full">
                <div className="relative aspect-[0.95/1] overflow-hidden bg-[#111827]">
                  <ServiceVisual type={service.icon} />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,14,0)_0%,rgba(8,10,14,0.44)_55%,rgba(8,10,14,0.82)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                    <h3 className="m-0 text-[0.72rem] font-extrabold leading-[1.15] tracking-normal text-white sm:text-[1rem] sm:leading-[1.18]">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 rounded-[24px] border border-white/12 bg-white/5 px-5 py-5 shadow-[0_18px_34px_rgba(2,6,23,0.24)] transition-all duration-300 sm:mt-8 sm:px-6 sm:py-6"
        >
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#D5B223]" />
            <p className="m-0 text-[0.78rem] font-bold uppercase tracking-[0.2em] text-[#D5B223] sm:text-[0.82rem]">
              OUR EXPERTISE
            </p>
          </div>

          <details className="group mt-4 rounded-[18px] border border-white/10 bg-[#111827] px-4 py-4 transition-all duration-300 hover:-translate-y-1" open>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-[0.95rem] font-extrabold text-white sm:text-[1.02rem]">
              <span className="inline-flex items-center gap-3">
                <span className="inline-grid h-10 w-10 place-items-center rounded-full border border-[#D5B223]/20 bg-[#D5B223]/12 text-[#F3D36B]">
                  <ServiceIcon type="architectural-design" />
                </span>
                <span>Architectural &amp; Engineering</span>
              </span>

              <span className="text-[#D5B223] transition-all duration-300 group-open:rotate-180">⌄</span>
            </summary>

            <ul className="mt-4 space-y-3 pl-6 text-[0.92rem] leading-7 text-white/74 sm:text-[0.98rem]">
              {expertiseItems.map((item) => (
                <li key={item.label}>{item.label}</li>
              ))}
            </ul>
          </details>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ServicesSection;
