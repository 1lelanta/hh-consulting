import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function ProjectsSection({ data, className = "" }) {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia("(max-width: 639px)").matches);
  const totalProjects = Array.isArray(data?.items) ? data.items.length : 0;
  const maxVisibleProjects = isMobile ? 2 : 3;
  const projects = data.items || [];
  const tiyaProject = projects.find((project) => project.title === "Tiya-Suten Heritage Park");
  const visibleProjects = isMobile
    ? [projects[0], tiyaProject].filter(Boolean).slice(0, Math.min(maxVisibleProjects, totalProjects))
    : projects.slice(0, Math.min(maxVisibleProjects, totalProjects));

  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");

    const apply = () => {
      setIsMobile(media.matches);
    };

    apply();
    media.addEventListener("change", apply);

    return () => {
      media.removeEventListener("change", apply);
    };
  }, []);

  const getProjectYear = (project) => {
    const yearMeta = (project.meta || []).find((item) => item.label?.toLowerCase() === "year");
    return yearMeta?.value || "N/A";
  };

  const renderProjectItem = (project) => {
    const content = (
      <div className="group flex h-full min-w-[42vw] max-w-[42vw] flex-col overflow-hidden rounded-[18px] border border-white/10 bg-white/6 shadow-[0_14px_30px_rgba(2,6,23,0.22)] transition duration-300 hover:-translate-y-1 hover:border-[#D5B223]/35 hover:shadow-[0_20px_34px_rgba(2,6,23,0.28)] sm:min-w-0 sm:max-w-none">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="aspect-square w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 sm:aspect-[4/3]"
          />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,14,0.02)_0%,rgba(8,10,14,0.62)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 p-2.5 text-white sm:p-4">
            <p className="m-0 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-[#F5D77A] sm:text-[0.72rem]">
              {project.category}
            </p>
            <h3 className="m-0 mt-1 text-[0.78rem] font-extrabold leading-snug tracking-[-0.01em] sm:mt-2 sm:text-[1.1rem]">
              {project.title}
            </h3>
            <p className="m-0 mt-0.5 text-[0.66rem] leading-4 text-white/80 sm:mt-1.5 sm:text-[0.84rem] sm:leading-6">
              {project.location}
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
      className={`animate-reveal -mx-3 scroll-mt-28 bg-[linear-gradient(180deg,#0A0A0F_0%,#111827_100%)] px-3 pt-0 pb-12 text-white [animation-delay:280ms] sm:-mx-6 sm:px-6 sm:pt-0 sm:pb-16 lg:-mx-10 lg:px-10 lg:pt-0 lg:pb-20 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <div className="min-w-0 max-w-[840px]">
            <h2 className="m-0 text-[1.8rem] font-black uppercase leading-[1.08] tracking-[0.08em] text-white sm:text-[2.35rem] lg:text-[3.1rem]">
              Featured Projects
            </h2>
          </div>

          <a
            href="#all-projects"
            className="inline-flex shrink-0 items-center gap-3 self-start text-right text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-white transition duration-300 hover:text-[#F5D77A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D5B223] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F] sm:self-auto sm:pb-1"
          >
            <span>View All Projects</span>
            <span aria-hidden="true" className="text-[1.15rem] leading-none">
              →
            </span>
          </a>
        </div>

        <div className="mt-8 flex gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:overflow-visible">
          {visibleProjects.map((project) => renderProjectItem(project))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="m-0 max-w-[18ch] text-[1.1rem] font-bold leading-tight text-white sm:max-w-none sm:text-[1.25rem]">
            Need a Professional Engineering Partner?
          </p>

          <a
            href="#get-in-touch"
            className="inline-flex items-center justify-center rounded-xl border border-[#D5B223]/45 bg-[#D5B223] px-6 py-3 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-[#0B1730] shadow-[0_12px_24px_rgba(213,178,35,0.28)] transition duration-300 hover:bg-[#E5C64C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D5B223] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F]"
          >
            Contact Us
          </a>
        </div>

        {totalProjects === 0 ? (
          <div className="mt-10 rounded-[1.5rem] border border-dashed border-white/20 bg-white/5 px-6 py-10 text-center text-white/70">
            No projects available in this section yet.
          </div>
        ) : null}
      </div>
    </motion.section>
  );
}

export default ProjectsSection;
