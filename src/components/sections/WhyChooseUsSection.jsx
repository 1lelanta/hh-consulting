import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function WhyChooseIcon({ type }) {
  const common = "h-6 w-6 text-[#D5B223] sm:h-7 sm:w-7";

  if (type === "leaf") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M19 5c-7 0-12 4-12 10 0 2.8 2.2 5 5 5 6 0 10-5 10-12 0-1.7-1.3-3-3-3Z" />
        <path d="M8 16c2-3 5-5 10-7" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M12 3 19 6v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" />
        <path d="m9.5 12 1.8 1.8 3.8-4" />
      </svg>
    );
  }

  if (type === "clock") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18" />
      <path d="M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

function WhyChooseUsSection({ data, className = "" }) {
  const gridRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mouseRatio, setMouseRatio] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const apply = () => setIsDesktop(media.matches);

    apply();
    media.addEventListener("change", apply);

    return () => {
      media.removeEventListener("change", apply);
    };
  }, []);

  const depthByIndex = [46, 12, 58, 24];
  const speedByIndex = [10, 15, 21, 13];
  const baseOffsetYByIndex = [0, 28, -12, 20];

  const handleMouseMove = (event) => {
    if (!isDesktop || !gridRef.current) {
      return;
    }

    const rect = gridRef.current.getBoundingClientRect();
    const ratioX = (event.clientX - rect.left) / rect.width - 0.5;
    const ratioY = (event.clientY - rect.top) / rect.height - 0.5;

    setMouseRatio({ x: ratioX, y: ratioY });
  };

  const handleMouseLeave = () => {
    setMouseRatio({ x: 0, y: 0 });
  };

  return (
    <section
      id="why-choose-us"
      className={`animate-reveal mt-8 -mx-3 scroll-mt-28 bg-transparent px-3 py-12 [animation-delay:240ms] sm:-mx-6 sm:px-6 sm:py-20 lg:-mx-10 lg:px-10 lg:py-24 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="max-w-[860px]">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-14 bg-[#D5B223]" />
            <p className="m-0 text-[0.95rem] font-extrabold uppercase tracking-[0.14em] text-[#D5B223]">
              {data.eyebrow}
            </p>
          </div>

          <h2 className="m-0 mt-4 text-[1.75rem] font-extrabold leading-[1.12] tracking-[-0.02em] text-brand-navy900 sm:mt-5 sm:text-[2.55rem] lg:text-[3.6rem]">
            {data.title}
          </h2>

          <p className="m-0 mt-3 max-w-[820px] text-[0.98rem] leading-7 text-brand-gray500 sm:mt-4 sm:text-[1.1rem] sm:leading-8">
            {data.subtitle}
          </p>
        </div>

        <div
          ref={gridRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8"
          style={isDesktop ? { perspective: "1200px" } : undefined}
        >
          {data.items.map((item, index) => (
            <motion.article
              key={item.title}
              className={[
                "relative overflow-hidden rounded-[16px] bg-white/5 p-4 backdrop-blur-lg sm:p-5",
              ].join(" ")}
              style={
                isDesktop
                  ? {
                      transformStyle: "preserve-3d",
                      transform: `translate3d(${mouseRatio.x * speedByIndex[index]}px, ${baseOffsetYByIndex[index] + mouseRatio.y * speedByIndex[index] * -0.65}px, 0) translateZ(${depthByIndex[index]}px)`,
                    }
                  : undefined
              }
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.07 }}
            >
              <p
                className="pointer-events-none absolute -right-2 top-0 m-0 select-none text-[86px] font-semibold leading-none tracking-[0.04em] text-transparent sm:text-[108px]"
                style={{
                  WebkitTextStroke: "1px rgba(8,25,45,0.28)",
                  opacity: 0.2,
                }}
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </p>

              <div className="relative h-12 w-12">
                <motion.span
                  className="absolute inset-0 rounded-full border border-[#D5B223]/55"
                  animate={{ scale: [1, 1.22, 1], opacity: [0.45, 0.1, 0.45] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.15 }}
                />
                <div className="relative inline-grid h-12 w-12 place-items-center rounded-full bg-[#F4EED8]/95">
                  <WhyChooseIcon type={item.icon} />
                </div>
              </div>

              <motion.span
                className="pointer-events-none absolute left-[3.15rem] top-[1.35rem] h-px w-20 origin-left rotate-[60deg] bg-[#90A8C6]"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.12 + index * 0.08 }}
              />

              <div className="mt-4 pl-3 sm:pl-4">
                <h3 className="m-0 font-['JetBrains_Mono',monospace] text-[1rem] font-semibold uppercase leading-tight tracking-[0.02em] text-brand-navy900 sm:text-[1.08rem]">
                  {item.title}
                </h3>

                <p className="m-0 mt-2 text-[0.9rem] leading-6 text-brand-gray500 sm:text-[0.96rem] sm:leading-7">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;