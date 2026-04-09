function HeroSection({ data }) {
  return (
    <section id="home" className="animate-reveal -mx-3 overflow-hidden scroll-mt-28 sm:-mx-6 lg:-mx-10 2xl:-mx-14">
      <div className="relative min-h-[90vh] sm:min-h-screen">
        <img
          src={data.image}
          alt={data.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0E2A55]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A234A]/65 via-[#0A234A]/45 to-[#0A234A]/30" />

        <div className="relative z-10 mx-auto flex min-h-[90vh] w-full max-w-[1320px] flex-col px-6 py-10 text-white sm:min-h-screen sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="flex items-center gap-4">
            <div className="inline-grid h-16 w-16 place-items-center rounded-2xl bg-[#D5B223] text-white">
              <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="5" y="3" width="14" height="18" rx="2" />
                <path d="M9 7h6" />
                <path d="M9 11h6" />
                <path d="M9 15h3" />
              </svg>
            </div>
            <div className="leading-tight">
              <p className="m-0 text-[2rem] font-extrabold tracking-[0.01em] text-white">{data.company}</p>
              <p className="m-0 mt-1 text-[1.05rem] font-bold uppercase tracking-[0.12em] text-[#D5B223]">
                {data.subtitle}
              </p>
            </div>
          </div>

          <div className="mt-20 sm:mt-24 lg:mt-28">
            <h1 className="max-w-[700px] text-[3.5rem] font-extrabold leading-[1.02] tracking-[-0.02em] text-white sm:text-[4.2rem] lg:text-[6.2rem]">
              {data.headline}
            </h1>
            <p className="mt-6 max-w-[720px] text-[1.25rem] leading-9 text-white/75 sm:text-[1.4rem]">
              {data.description}
            </p>
            <a
              href={data.ctaHref}
              className="mt-8 inline-block rounded-2xl bg-[#D5B223] px-10 py-5 text-[1.2rem] font-bold text-white shadow-[0_10px_24px_rgba(190,154,90,0.35)]"
            >
              {data.ctaLabel}
            </a>
          </div>

          <div className="mt-auto flex justify-center pb-2">
            <div className="flex h-14 w-9 items-start justify-center rounded-full border-2 border-white/35 p-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
