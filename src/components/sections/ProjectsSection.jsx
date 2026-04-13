import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "../ui/Button";

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
      <div className="group flex h-full min-w-[42vw] max-w-[42vw] flex-col overflow-hidden rounded-none border border-white/12 bg-white/[0.06] shadow-[0_16px_34px_rgba(2,6,23,0.24)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D5B223]/35 hover:shadow-[0_22px_40px_rgba(2,6,23,0.3)] sm:min-w-0 sm:max-w-none">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="aspect-square w-full rounded-none object-cover object-center transition-all duration-300 group-hover:scale-105 sm:aspect-[4/3]"
          />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,14,0.02)_0%,rgba(8,10,14,0.62)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 p-2.5 text-white sm:p-4">
            <p className="m-0 text-[0.58rem] font-bold tracking-wide text-[#F5D77A] sm:text-[0.72rem]">
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
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      className={`animate-reveal -mx-3 scroll-mt-28 bg-[linear-gradient(180deg,#0A0A0F_0%,#111827_100%)] px-3 pt-0 pb-12 text-white [animation-delay:280ms] sm:-mx-6 sm:px-6 sm:pt-0 sm:pb-16 lg:-mx-10 lg:px-10 lg:pt-0 lg:pb-20 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <div className="min-w-0 max-w-[840px]">
            <h2 className="m-0 mb-12 text-[1.8rem] font-black leading-[1.08] tracking-tight text-white sm:text-[2.35rem] lg:text-[3.1rem]">
              Featured Projects
            </h2>
          </div>

          <Button as={motion.a} href="#all-projects" variant="secondary" className="shrink-0 sm:self-auto sm:pb-1">
            View All Projects
          </Button>
        </div>

        <div className="no-scrollbar mt-8 flex gap-8 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:overflow-visible">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1], delay: index * 0.06 }}
              className="min-w-[42vw] max-w-[42vw] sm:min-w-0 sm:max-w-none"
            >
              {renderProjectItem(project)}
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="m-0 max-w-[18ch] text-[1.1rem] font-bold leading-tight text-white sm:max-w-none sm:text-[1.25rem]">
            Need a Professional Engineering Partner?
          </p>

          <Button
            as={motion.a}
            href="#get-in-touch"
            className="min-w-[190px]"
          >
            Contact Us
          </Button>
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
