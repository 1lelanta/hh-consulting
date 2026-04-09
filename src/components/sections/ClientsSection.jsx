function ClientLogoTile({ item }) {
  return (
    <div className="group flex h-[84px] w-[144px] shrink-0 items-center justify-center rounded-[16px] bg-transparent px-2 transition-all duration-300 hover:-translate-y-0.5 lg:h-[96px] lg:w-[176px]">
      <img
        src={item.logoSrc}
        alt={item.name}
        className="max-h-[48px] max-w-[120px] object-contain transition duration-300 group-hover:scale-[1.03] lg:max-h-[56px] lg:max-w-[144px]"
      />
      <span className="sr-only">{item.name}</span>
    </div>
  );
}

function ClientsSection({ data, className = "" }) {
  const duplicateRow = (row) => [...row.items, ...row.items];

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

        </div>

        <div className="mt-8 space-y-4 lg:mt-10">
          {data.logoRows.map((row, index) => (
            <div key={index} className="overflow-hidden">
              <div
                className={[
                  "flex w-max gap-4 px-1 pb-2 lg:gap-5",
                  index % 2 === 0 ? "animate-marquee" : "animate-marquee-reverse",
                  "[animation-duration:34s] hover:[animation-play-state:paused]",
                ].join(" ")}
              >
                {duplicateRow(row).map((item, itemIndex) => (
                  <ClientLogoTile key={`${item.name}-${itemIndex}`} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ClientsSection;