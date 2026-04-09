function AboutSection({ data, className = "" }) {
  return (
    <section
      id="about"
      className={`animate-reveal mt-8 -mx-3 scroll-mt-28 bg-[#F3F5F8] px-3 py-14 [animation-delay:120ms] sm:-mx-6 sm:px-6 sm:py-16 lg:-mx-10 lg:px-10 lg:py-20 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-brand-gray200/80 bg-white/95 p-4 shadow-[0_16px_38px_rgba(13,40,74,0.08)] lg:p-5">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={data.image}
                alt={data.imageAlt}
                className="h-[320px] w-full object-cover object-center sm:h-[420px] lg:h-[520px]"
              />
            </div>
            <div className="pointer-events-none absolute inset-4 rounded-[2rem] bg-gradient-to-t from-[#08192D]/18 via-transparent to-transparent" />
            <div className="absolute bottom-7 left-7 rounded-2xl bg-white/92 px-4 py-3 shadow-[0_12px_28px_rgba(6,19,36,0.10)] backdrop-blur">
              <p className="m-0 text-[0.82rem] font-bold uppercase tracking-[0.14em] text-[#D5B223]">HH Consulting</p>
              <p className="m-0 mt-1 text-[0.98rem] font-semibold text-brand-navy900">Architecture. Engineering. Supervision.</p>
            </div>
          </div>

          <div className="max-w-[720px] lg:pl-2">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-14 bg-[#D5B223]" />
              <p className="m-0 text-[0.95rem] font-extrabold uppercase tracking-[0.14em] text-[#D5B223]">
                {data.eyebrow}
              </p>
            </div>

            <h2 className="m-0 mt-5 text-balance text-[2rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-brand-navy900 sm:text-[2.5rem] lg:text-[3.65rem]">
              {data.title}
            </h2>

            <p className="m-0 mt-6 text-[1.08rem] leading-8 text-brand-gray500 sm:text-[1.12rem]">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
