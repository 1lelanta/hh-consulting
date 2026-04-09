import { motion } from "framer-motion";
import { useRef, useState } from "react";

function ProjectsSection({ data, className = "" }) {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [detailOpen, setDetailOpen] = useState({});
  const locationIcon = (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );

  const carouselRef = useRef(null);

  const coordinatesByLocation = {
    "Haramaya, Ethiopia": "9.3890N, 42.0400E",
    "Addis Ababa": "8.9806N, 38.7578E",
    "Rep de Djibouti": "11.8251N, 42.5903E",
    Ethiopia: "9.1450N, 40.4897E",
    "Axum, Tigray": "14.1211N, 38.7234E",
    "Oromia, Bule Hora": "5.6482N, 38.2380E",
    "Tiya Town": "8.4347N, 38.6068E",
  };

  const getCoordinates = (project) => coordinatesByLocation[project.location] || "9.0300N, 38.7400E";

  function ProjectCard({ project }) {
    const isDetailVisible = Boolean(detailOpen[project.title]);

    return (
      <article
        onMouseEnter={() => setHoveredProject(project)}
        onMouseLeave={() => setHoveredProject(null)}
        onFocus={() => setHoveredProject(project)}
        onBlur={() => setHoveredProject(null)}
        className="group w-[92%] shrink-0 snap-start overflow-hidden rounded-[1.35rem] border border-brand-gray200 bg-white shadow-[0_10px_24px_rgba(13,40,74,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(13,40,74,0.12)] sm:w-[420px] sm:rounded-[1.75rem] lg:w-[calc((100%-2.5rem)/3)]"
      >
        <div className="relative">
          <motion.img
            src={project.image}
            alt={project.imageAlt}
            className="h-[220px] w-full object-cover object-center transition duration-500 group-hover:scale-105 sm:h-[280px]"
            animate={{ opacity: isDetailVisible ? 0 : 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          />

          <motion.div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            animate={{ opacity: isDetailVisible ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src={project.image}
              alt=""
              className="h-[220px] w-full object-cover object-center sm:h-[280px]"
              style={{
                filter: "grayscale(1) contrast(1.35) brightness(0.84)",
              }}
            />
            <div className="absolute inset-0 bg-[#0B2D57]/35" />
            <svg viewBox="0 0 400 260" className="absolute inset-0 h-full w-full text-white/65" fill="none" aria-hidden="true">
              <path d="M16 24h368v212H16z" stroke="currentColor" strokeWidth="1" />
              <path d="M16 68h368M16 112h368M16 156h368M16 200h368" stroke="currentColor" strokeWidth="0.8" opacity="0.8" />
              <path d="M76 24v212M136 24v212M196 24v212M256 24v212M316 24v212" stroke="currentColor" strokeWidth="0.8" opacity="0.8" />
              <path d="M42 182h110v-48H42z" stroke="currentColor" strokeWidth="1.2" />
              <path d="M192 166h146v-74H192z" stroke="currentColor" strokeWidth="1.2" />
              <path d="M338 36h34M355 20v32" stroke="currentColor" strokeWidth="1" />
            </svg>
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#08192D]/35 via-transparent to-transparent" />
          <span className="absolute left-3 top-3 rounded-full bg-[#08192D]/65 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur sm:left-4 sm:top-4 sm:text-[0.72rem] sm:tracking-[0.14em]">
            {project.category}
          </span>

          <span className="absolute right-3 top-3 rounded-md border border-white/35 bg-[#08192D]/55 px-2 py-1 font-['JetBrains_Mono',monospace] text-[0.62rem] font-medium tracking-[0.06em] text-white backdrop-blur sm:right-4 sm:top-4 sm:text-[0.68rem]">
            {getCoordinates(project)}
          </span>

          <button
            type="button"
            onClick={() => setDetailOpen((prev) => ({ ...prev, [project.title]: !prev[project.title] }))}
            className="absolute bottom-3 right-3 inline-flex h-9 items-center gap-1.5 rounded-full border border-white/45 bg-[#08192D]/58 px-3 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-white backdrop-blur transition-colors hover:bg-[#0C315F]/72 sm:bottom-4 sm:right-4"
            aria-pressed={isDetailVisible}
            aria-label={isDetailVisible ? `Show photo for ${project.title}` : `View technical details for ${project.title}`}
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 20h16" />
              <path d="M5 15h6V9H5z" />
              <path d="M14 12h5v-5h-5z" />
              <path d="M8 9 14 12" />
            </svg>
            {isDetailVisible ? "Photo" : "View Details"}
          </button>

          <span className="pointer-events-none absolute -right-1 top-3 hidden h-[calc(100%-1.5rem)] select-none items-center justify-center [mix-blend-mode:difference] lg:flex">
            <span className="[writing-mode:vertical-rl] rotate-180 text-[1.35rem] font-extrabold tracking-[0.08em] text-white/95">
              {project.title}
            </span>
          </span>
        </div>

        <div className="flex h-full flex-col p-4 sm:p-7">
          <p className="m-0 inline-flex items-center gap-2 rounded-full bg-[#F4F6FA] px-3 py-2 text-[0.84rem] font-semibold text-brand-navy900 sm:text-[0.92rem]">
            <span className="text-[#D5B223]">{locationIcon}</span>
            {project.location}
          </p>

          <h3 className="m-0 mt-3 text-[1.18rem] font-extrabold leading-tight tracking-[-0.02em] text-brand-navy900 sm:mt-4 sm:text-[1.8rem] lg:sr-only">
            {project.title}
          </h3>

          <div className="mt-3 grid grid-cols-1 gap-2.5 sm:mt-4 sm:grid-cols-2 sm:gap-3">
            {(project.meta || [])
              .filter((item) => item.label !== "Budget")
              .map((item) => (
                <div key={`${project.title}-${item.label}`} className="rounded-xl border border-brand-gray200 bg-[#F8FAFD] px-3 py-2.5 sm:rounded-2xl sm:px-4 sm:py-3">
                  <p className="m-0 text-[0.74rem] font-bold uppercase tracking-[0.12em] text-[#D5B223]">
                    {item.label}
                  </p>
                  <p className="m-0 mt-1 text-[0.9rem] font-semibold leading-6 text-brand-navy900 sm:text-[0.95rem]">
                    {item.value}
                  </p>
                </div>
              ))}
          </div>

          <p className="m-0 mt-4 text-[0.95rem] leading-6 text-brand-gray500 sm:mt-5 sm:text-[1.05rem] sm:leading-7">
            {project.description}
          </p>
        </div>
      </article>
    );
  }

  const scrollCarousel = (direction) => {
    const container = carouselRef.current;

    if (!container) {
      return;
    }

    const cardWidth = container.querySelector("article")?.getBoundingClientRect().width ?? 360;
    const distance = direction === "left" ? -(cardWidth + 20) * 3 : (cardWidth + 20) * 3;

    container.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className={`animate-reveal relative mt-8 -mx-3 overflow-hidden scroll-mt-28 bg-[#F3F5F8] px-3 py-12 [animation-delay:280ms] sm:-mx-6 sm:px-6 sm:py-16 lg:-mx-10 lg:px-10 lg:py-20 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      {hoveredProject ? (
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <img
            src={hoveredProject.image}
            alt=""
            className="h-full w-full scale-[1.05] object-cover object-center blur-[2px]"
          />
          <div className="absolute inset-0 bg-[#08192D]/42" />
        </div>
      ) : null}

      <div className="relative z-10 mx-auto w-full max-w-[1320px]">
        <div className="flex items-start justify-between gap-4">
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

          <a
            href={data.viewAllHref}
            className="mt-6 hidden text-[1rem] font-semibold text-[#D5B223] underline-offset-4 hover:underline lg:inline-flex"
          >
            {data.viewAllLabel} {'->'}
          </a>
        </div>

        <div className="mt-7 sm:mt-8">
          <p className="m-0 text-[0.9rem] font-medium leading-6 text-brand-gray500 sm:text-[0.95rem]">
            Swipe left or use the arrows on both sides to explore the featured projects.
          </p>

          <div className="mt-6 grid grid-cols-1 items-center gap-3 sm:mt-10 sm:grid-cols-[auto_1fr_auto] sm:gap-4 lg:gap-6">
            <button
              type="button"
              onClick={() => scrollCarousel("left")}
              aria-label="Scroll projects left"
              className="hidden h-12 w-12 shrink-0 place-items-center rounded-full border border-brand-gray200 bg-white text-brand-navy900 shadow-[0_10px_22px_rgba(13,40,74,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D5B223] hover:text-[#D5B223] sm:inline-grid"
            >
              <span aria-hidden="true">←</span>
            </button>

            <div
              ref={carouselRef}
              className="flex gap-3 overflow-x-auto pb-3 pt-1 no-scrollbar snap-x snap-mandatory scroll-smooth sm:gap-5 sm:pb-4"
            >
              {data.items.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollCarousel("right")}
              aria-label="Scroll projects right"
              className="hidden h-12 w-12 shrink-0 place-items-center rounded-full border border-brand-gray200 bg-white text-brand-navy900 shadow-[0_10px_22px_rgba(13,40,74,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D5B223] hover:text-[#D5B223] sm:inline-grid"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        {data.items.length === 0 ? (
          <div className="mt-10 rounded-[1.5rem] border border-dashed border-brand-gray300 bg-white px-6 py-10 text-center text-brand-gray500">
            No projects available in this section yet.
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default ProjectsSection;
