function AboutSection({ data, className = "" }) {
  return (
    <section
      id="about"
      className={`animate-reveal relative mt-8 -mx-3 scroll-mt-28 overflow-hidden bg-[#F3F5F8] px-3 py-14 [animation-delay:120ms] sm:-mx-6 sm:px-6 sm:py-16 lg:-mx-10 lg:px-10 lg:py-20 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="mx-auto max-w-[980px] px-1 sm:px-2 lg:px-4">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-14 bg-[#D5B223]" />
            <p className="m-0 text-[0.88rem] font-extrabold uppercase tracking-[0.14em] text-[#B18428]">{data.eyebrow}</p>
          </div>

          <h2 className="m-0 mt-4 text-balance text-[1.85rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-brand-navy900 sm:text-[2.35rem] lg:text-[2.8rem]">
            {data.title}
          </h2>

          <p className="m-0 mt-6 text-[1.02rem] leading-8 text-brand-gray500 sm:text-[1.08rem] sm:leading-9">
            {data.description}
          </p>

          {data.approachTitle ? (
            <h3 className="m-0 mt-10 text-[1.35rem] font-extrabold uppercase tracking-[0.06em] text-brand-navy900 sm:text-[1.6rem]">
              {data.approachTitle}
            </h3>
          ) : null}

          {data.approachDescription ? (
            <p className="m-0 mt-4 text-[1.02rem] leading-8 text-brand-gray500 sm:text-[1.08rem] sm:leading-9">
              {data.approachDescription}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
