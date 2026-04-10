import { motion } from "framer-motion";
import { useState } from "react";

function ProjectsSection({ data, className = "" }) {
  const totalProjects = Array.isArray(data?.items) ? data.items.length : 0;
  const initialVisibleCount = Math.min(3, totalProjects);
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  const visibleProjects = (data.items || []).slice(0, visibleCount);
  const hasHiddenProjects = totalProjects > visibleCount;

  const getProjectYear = (project) => {
    const yearMeta = (project.meta || []).find((item) => item.label?.toLowerCase() === "year");
    return yearMeta?.value || "N/A";
  };

  const renderProjectItem = (project) => {
    const content = (
      <div className="block">
        <div className="group relative overflow-hidden">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="aspect-[4/3] w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />

          <div className="absolute inset-0 overflow-hidden p-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-[#041A33]/34" />
            <div className="pointer-events-none absolute inset-0 water-overlay-layer animate-water-drift opacity-45" />
            <div className="pointer-events-none absolute inset-0 water-overlay-layer animate-water-ripple opacity-35" />

            <div className="relative z-10 mt-auto rounded-[10px] bg-[#031428]/32 px-3 py-2.5 backdrop-blur-[1px]">
              <p className="m-0 text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-white/82">
                {getProjectYear(project)} • {project.location}
              </p>
              <p className="m-0 mt-2 text-[0.9rem] leading-6 text-white/95 sm:text-[0.96rem] sm:leading-7">
                {project.description}
              </p>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/20 bg-[#041A33]/88 px-3 py-2 backdrop-blur-sm sm:px-4 sm:py-2.5">
            <p className="m-0 text-[0.86rem] font-extrabold uppercase tracking-[0.08em] text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)] sm:text-[0.92rem]">
              {project.title}
            </p>
          </div>
        </div>
      </div>
    );

    if (project.href && project.href !== "#") {
      return (
        <a
          key={project.title}
          href={project.href}
          className="block"
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          {content}
        </a>
      );
    }

    return (
      <div key={project.title} className="block">
        {content}
      </div>
    );
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] }}
      viewport={{ once: true, amount: 0.2 }}
      className={`animate-reveal mt-8 -mx-3 scroll-mt-28 bg-transparent px-3 py-12 [animation-delay:280ms] sm:-mx-6 sm:px-6 sm:py-16 lg:-mx-10 lg:px-10 lg:py-20 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="max-w-[820px]">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-14 bg-[#D5B223]" />
              <p className="section-eyebrow text-[#D5B223]">
                {data.eyebrow}
              </p>
            </div>

            <h2 className="m-0 mt-4 text-[1.65rem] font-black uppercase leading-[1.08] tracking-[0.08em] text-brand-navy900 sm:mt-5 sm:text-[2.35rem] lg:text-[3.1rem]">
              SOME OF OUR <span className="text-orange-600">PROJECTS</span>
            </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-3">
          {visibleProjects.map((project) => renderProjectItem(project))}
        </div>

        {totalProjects > 3 ? (
          <div className="relative z-30 mt-12 flex justify-center pointer-events-auto">
            <button
              type="button"
              onClick={() => setVisibleCount((current) => (current >= totalProjects ? initialVisibleCount : totalProjects))}
              aria-expanded={!hasHiddenProjects}
              className="cursor-pointer bg-orange-600 px-8 py-3 text-[0.86rem] font-extrabold uppercase tracking-[0.1em] text-white transition-colors duration-300 hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-700 focus-visible:ring-offset-2"
            >
              {hasHiddenProjects ? "SEE ALL PROJECTS" : "SHOW LESS PROJECTS"}
            </button>
          </div>
        ) : null}

        {totalProjects === 0 ? (
          <div className="mt-10 rounded-[1.5rem] border border-dashed border-brand-gray300 bg-white px-6 py-10 text-center text-brand-gray500">
            No projects available in this section yet.
          </div>
        ) : null}
      </div>
    </motion.section>
  );
}

export default ProjectsSection;
