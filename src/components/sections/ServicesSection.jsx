import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function ServiceIcon({ type }) {
  const common = "h-6 w-6 text-[#D5B223] transition-colors duration-300 group-hover:text-white";

  if (type === "architectural-design") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M4 20h16" />
        <path d="M7 20V8l5-4 5 4v12" />
        <path d="M10 20v-6h4v6" />
      </svg>
    );
  }

  if (type === "structural-engineering") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M5 19h14" />
        <path d="M7 19V8l5-4 5 4v11" />
        <path d="M9 12h6" />
        <path d="M9 15h6" />
      </svg>
    );
  }

  if (type === "urban-planning") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M4 5h16v14H4z" />
        <path d="M8 5v14" />
        <path d="M4 10h16" />
        <path d="M13 19v-5" />
      </svg>
    );
  }

  if (type === "infrastructure-design") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M4 12h16" />
        <path d="M6 8h4l2 4 2-4h4" />
        <path d="M6 16h12" />
      </svg>
    );
  }

  if (type === "water-engineering") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M12 3s-5 5-5 9a5 5 0 0 0 10 0c0-4-5-9-5-9Z" />
        <path d="M8 17c1.2.8 2.6 1.2 4 1.2s2.8-.4 4-1.2" />
      </svg>
    );
  }

  if (type === "feasibility-study") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M5 4h9l5 5v11H5z" />
        <path d="M14 4v5h5" />
        <path d="M8 14h8" />
        <path d="M8 17h6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 7h6" />
      <path d="M9 11h6" />
      <path d="M9 15h3" />
    </svg>
  );
}

function TechnicalDrawingBg() {
  return (
    <svg viewBox="0 0 240 180" className="h-full w-full" fill="none" aria-hidden="true">
      <path d="M12 20h216v140H12z" stroke="currentColor" strokeWidth="1" />
      <path d="M12 52h216M12 92h216M12 132h216" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
      <path d="M60 20v140M108 20v140M156 20v140M204 20v140" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
      <path d="M28 148h72v-38H28z" stroke="currentColor" strokeWidth="1.1" />
      <path d="M118 132h88v-64h-88z" stroke="currentColor" strokeWidth="1.1" />
      <path d="M28 38h42v14H28zM170 36h36v18h-36z" stroke="currentColor" strokeWidth="1" />
      <path d="M88 112h16M96 104v16" stroke="currentColor" strokeWidth="1" />
      <path d="M12 162h216" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function ServicesSection({ data, className = "" }) {
  const carouselRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);
  const [mobileActiveCard, setMobileActiveCard] = useState(0);
  const [mobileScrollProgress, setMobileScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const iconVariants = {
    hidden: { opacity: 0, x: -26, y: -16, rotate: -24, scale: 0.75 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 220,
        damping: 16,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: 32, y: -10 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 18,
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, x: -24, y: 24 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 170,
        damping: 20,
        mass: 0.9,
      },
    },
  };

  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");
    const apply = () => setIsMobile(media.matches);

    apply();
    media.addEventListener("change", apply);

    return () => {
      media.removeEventListener("change", apply);
    };
  }, []);

  const handleCarouselScroll = () => {
    const container = carouselRef.current;

    if (!container) {
      return;
    }

    const maxScroll = Math.max(container.scrollWidth - container.clientWidth, 1);
    const progress = container.scrollLeft / maxScroll;
    setMobileScrollProgress(Math.min(Math.max(progress, 0), 1));

    const cardElements = Array.from(container.querySelectorAll("[data-service-card='true']"));

    if (cardElements.length === 0) {
      return;
    }

    const center = container.scrollLeft + container.clientWidth / 2;
    let nearestIndex = 0;
    let smallestDistance = Number.POSITIVE_INFINITY;

    cardElements.forEach((element, index) => {
      const cardCenter = element.offsetLeft + element.clientWidth / 2;
      const distance = Math.abs(cardCenter - center);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        nearestIndex = index;
      }
    });

    setMobileActiveCard(nearestIndex);
  };

  useEffect(() => {
    if (!isMobile) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      handleCarouselScroll();
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [isMobile]);

  return (
    <section
      id="services"
      className={`animate-reveal mt-8 -mx-3 scroll-mt-28 bg-[#F3F5F8] px-3 py-12 [animation-delay:200ms] sm:-mx-6 sm:px-6 sm:py-16 lg:-mx-10 lg:px-10 lg:py-20 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="max-w-[700px]">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-14 bg-[#D5B223]" />
            <p className="m-0 text-[0.95rem] font-extrabold uppercase tracking-[0.14em] text-[#D5B223]">
              {data.eyebrow}
            </p>
          </div>

          <h2 className="m-0 mt-4 text-[1.75rem] font-extrabold leading-[1.14] tracking-[-0.02em] text-brand-navy900 sm:mt-5 sm:text-[2.45rem] lg:text-[3.3rem]">
            {data.title}
          </h2>
        </div>

        <div
          ref={carouselRef}
          onScroll={handleCarouselScroll}
          className="mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 pr-[20px] no-scrollbar sm:mt-10 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:pb-0 sm:pr-0 lg:grid-cols-3"
        >
          {data.items.map((service, index) => {
            const isActive = isMobile ? mobileActiveCard === index : activeCard === index;

            return (
            <motion.article
              key={service.title}
              data-service-card="true"
              onMouseEnter={() => {
                if (!isMobile) {
                  setActiveCard(index);
                }
              }}
              onMouseLeave={() => {
                if (!isMobile) {
                  setActiveCard(null);
                }
              }}
              onClick={() => {
                if (isMobile) {
                  setMobileActiveCard(index);
                } else {
                  setActiveCard((current) => (current === index ? null : index));
                }
              }}
              className={[
                "group relative w-[calc(100%-20px)] shrink-0 snap-start overflow-hidden rounded-[1.35rem] border-[0.5px] border-[#9DB0C9] p-4 text-brand-navy900 shadow-[0_10px_24px_rgba(13,40,74,0.07)] transition-all duration-300 sm:w-auto sm:shrink sm:rounded-[1.5rem] sm:p-6",
                isActive ? "bg-[#DDEBFA]/28" : "bg-transparent hover:bg-[#DDEBFA]/22",
              ].join(" ")}
              animate={
                isMobile
                  ? {
                      scale: isActive ? 1 : 0.94,
                      filter: isActive ? "blur(0px)" : "blur(1.5px)",
                      opacity: isActive ? 1 : 0.82,
                    }
                  : {
                      scale: 1,
                      filter: "blur(0px)",
                      opacity: 1,
                    }
              }
              transition={{ duration: 0.3, ease: "easeOut" }}
              whileHover={isMobile ? undefined : { y: -6 }}
              whileTap={{ scale: 0.995 }}
            >
              <div
                className={[
                  "pointer-events-none absolute inset-0 text-[#7F9CC2] transition-opacity duration-500",
                  isActive ? "opacity-35" : "opacity-0 group-hover:opacity-28",
                ].join(" ")}
              >
                <TechnicalDrawingBg />
              </div>

              <div className="relative z-10">
                <motion.div
                  className={[
                    "mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-[#F4EED8] transition-colors duration-300 group-hover:bg-[#D5B223] sm:mb-5 sm:h-14 sm:w-14 sm:rounded-2xl",
                    isActive ? "-rotate-[11deg]" : "rotate-0",
                  ].join(" ")}
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ rotate: -9 }}
                  whileTap={{ rotate: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <ServiceIcon type={service.icon} />
                </motion.div>
                <motion.h3
                  className="m-0 text-[1.08rem] font-extrabold leading-tight tracking-[-0.02em] text-brand-navy900 sm:text-[1.4rem]"
                  variants={titleVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  className="m-0 mt-2.5 text-[0.94rem] leading-6 text-brand-gray500 sm:mt-3 sm:text-[1.04rem] sm:leading-7"
                  variants={descriptionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.article>
            );
          })}
        </div>

        <div className="mt-4 sm:hidden">
          <div className="relative h-8 overflow-hidden rounded-md border border-[#BAC9DA] bg-[#EFF4FA]">
            <div
              className="absolute inset-y-0 left-0 w-[180%]"
              style={{
                transform: `translateX(-${mobileScrollProgress * 90}px)`,
                backgroundImage:
                  "repeating-linear-gradient(90deg, rgba(10,35,74,0.45) 0px, rgba(10,35,74,0.45) 1px, transparent 1px, transparent 10px)",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-y-0 left-0 bg-[#D5E3F2]/60 transition-[width] duration-150"
              style={{ width: `${8 + mobileScrollProgress * 92}%` }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 flex items-center whitespace-nowrap text-[0.6rem] font-semibold uppercase tracking-[0.08em] text-[#4A6587]"
              style={{ transform: `translateX(-${mobileScrollProgress * 70}px)` }}
              aria-hidden="true"
            >
              <span className="mx-4">0cm</span>
              <span className="mx-4">5cm</span>
              <span className="mx-4">10cm</span>
              <span className="mx-4">15cm</span>
              <span className="mx-4">20cm</span>
              <span className="mx-4">25cm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
