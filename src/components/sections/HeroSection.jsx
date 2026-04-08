function HeroSection({ data }) {
  return (
    <section className="animate-reveal overflow-hidden rounded-b-3xl shadow-soft sm:rounded-3xl">
      <div className="relative min-h-[500px] sm:min-h-[560px] lg:min-h-[640px] xl:min-h-[680px]">
        <img
          src={data.image}
          alt={data.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08192D44] via-[#08192D88] to-[#08192DF2]" />

        <div className="relative z-10 flex min-h-[500px] flex-col justify-between p-5 text-white sm:min-h-[560px] sm:p-7 lg:min-h-[640px] lg:p-9 xl:min-h-[680px] xl:p-11">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full border border-white/40 bg-white/15 text-sm font-extrabold tracking-[0.08em] backdrop-blur-sm">
              {data.logoShort}
            </div>
            <div className="leading-tight">
              <p className="m-0 text-sm font-bold tracking-[0.03em]">{data.company}</p>
              <p className="m-0 mt-0.5 text-[12px] tracking-[0.04em] text-white/85">{data.subtitle}</p>
            </div>
          </div>

          <div>
            <h1 className="max-w-[280px] font-serif text-[clamp(2rem,9vw,2.6rem)] leading-[1.06] sm:max-w-[520px] lg:max-w-[760px] lg:text-[3.4rem] xl:text-[3.8rem]">
              {data.headline}
            </h1>
            <p className="mt-4 max-w-[310px] text-sm leading-6 text-white/90 sm:max-w-[560px] sm:text-base lg:max-w-[720px] lg:text-[1.06rem]">
              {data.description}
            </p>
            <a
              href={data.ctaHref}
              className="mt-6 inline-block rounded-full bg-gradient-to-br from-brand-gold500 to-brand-gold400 px-5 py-3 text-sm font-extrabold text-brand-navy950 shadow-[0_10px_24px_rgba(190,154,90,0.35)] sm:px-6 sm:py-3.5 sm:text-base"
            >
              {data.ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
