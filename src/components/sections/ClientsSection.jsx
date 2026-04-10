import { useMemo, useState } from "react";

function ClientLogoTile({ item, offsetIndex }) {
  const [magnetic, setMagnetic] = useState({ x: 0, y: 0 });

  const baseOffsetY = useMemo(() => {
    const pattern = [0, -8, 6, -5, 10, -7, 4, -4];
    return pattern[offsetIndex % pattern.length];
  }, [offsetIndex]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;

    setMagnetic({
      x: deltaX * 0.16,
      y: deltaY * 0.14,
    });
  };

  const handleMouseLeave = () => {
    setMagnetic({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative z-10 flex h-[84px] w-[144px] shrink-0 items-center justify-center bg-transparent px-2 transition-transform duration-300 lg:h-[96px] lg:w-[176px]"
      style={{
        transform: `translate3d(${magnetic.x}px, ${baseOffsetY + magnetic.y}px, 0)`,
      }}
    >
      <img
        src={item.logoSrc}
        alt={item.name}
        className="max-h-[48px] max-w-[120px] object-contain transition duration-500 group-hover:scale-[1.03] lg:max-h-[56px] lg:max-w-[144px]"
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
      className={`animate-reveal mt-8 -mx-3 scroll-mt-28 bg-transparent px-3 py-16 [animation-delay:520ms] sm:-mx-6 sm:px-6 sm:py-20 lg:-mx-10 lg:px-10 lg:py-24 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="max-w-[860px]">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-14 bg-[#D5B223]" />
            <p className="section-eyebrow text-[#D5B223]">
              {data.eyebrow}
            </p>
          </div>

          <h2 className="m-0 mt-5 text-[2rem] font-extrabold leading-[1.12] tracking-[-0.02em] text-brand-navy900 sm:text-[2.5rem] lg:text-[3.6rem]">
            {data.title}
          </h2>

        </div>

        <div className="mt-8 space-y-4 lg:mt-10">
          {data.logoRows.map((row, index) => (
            <div key={index} className="relative overflow-hidden py-2">
              <span
                className="pointer-events-none absolute inset-x-0 top-1/2 z-0 -translate-y-1/2 border-t-[0.5px] border-dashed border-[#98ABC4]/75"
                aria-hidden="true"
              />

              <div
                className={[
                  "flex w-max gap-4 px-1 pb-2 lg:gap-5",
                  index % 2 === 0 ? "animate-marquee" : "animate-marquee-reverse",
                  "[animation-duration:40s] [animation-timing-function:linear]",
                ].join(" ")}
              >
                {duplicateRow(row).map((item, itemIndex) => (
                  <ClientLogoTile key={`${item.name}-${itemIndex}`} item={item} offsetIndex={itemIndex} />
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