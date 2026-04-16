import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";

function ProjectsSection({ data, className = "" }) {
  const [isMobile, setIsMobile] = useState(() =>
    window.matchMedia("(max-width: 639px)").matches
  );

  const [activeFilter, setActiveFilter] = useState("All");
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const projectsScrollerRef = useRef(null);

  const filters = ["All", "Buildings", "Infrastructure", "Airport"];

  const projects = data?.items || [];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.filterCategory === activeFilter
        );

  const totalProjects = filteredProjects.length;
  const maxVisibleProjects = isMobile ? 2 : 3;

  const tiyaProject = filteredProjects.find(
    (project) => project.title === "Tiya-Suten Heritage Park"
  );

  // On mobile, allow horizontal scroller to contain all filtered projects
  const visibleProjects = isMobile
    ? filteredProjects
    : filteredProjects.slice(0, Math.min(maxVisibleProjects, totalProjects));

  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");

    const apply = () => setIsMobile(media.matches);

    apply();
    media.addEventListener("change", apply);

    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    setActiveMobileIndex(0);

    if (!isMobile && projectsScrollerRef.current) {
      projectsScrollerRef.current.scrollTo({ left: 0, behavior: "auto" });
    }
  }, [activeFilter, isMobile]);

  const handleProjectsScroll = () => {
    if (!isMobile || !projectsScrollerRef.current) return;

    const cards = Array.from(projectsScrollerRef.current.children);
    if (!cards.length) return;

    const scrollLeft = projectsScrollerRef.current.scrollLeft;
    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - scrollLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveMobileIndex(closestIndex);
  };

  const renderProjectItem = (project) => {
    const content = (
      <div className="group flex h-full min-w-[42vw] max-w-[42vw] flex-col overflow-hidden border border-white/12 bg-white/[0.06] shadow-[0_16px_34px_rgba(2,6,23,0.24)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D5B223]/35 hover:shadow-[0_22px_40px_rgba(2,6,23,0.3)] sm:min-w-0 sm:max-w-none">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="aspect-square w-full object-cover object-center transition-all duration-300 group-hover:scale-105 sm:aspect-[4/3]"
          />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,14,0.02)_0%,rgba(8,10,14,0.62)_100%)]" />

          <div className="absolute inset-x-0 bottom-0 p-2.5 text-white sm:p-4">
            <p className="text-[0.58rem] font-bold tracking-wide text-[#F5D77A] sm:text-[0.72rem]">
              {project.category}
            </p>
            <h3 className="mt-1 text-[0.78rem] font-extrabold sm:text-[1.1rem]">
              {project.title}
            </h3>
            <p className="mt-0.5 text-[0.66rem] text-white/80 sm:text-[0.84rem]">
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
          onClick={(e) => e.preventDefault()}
          className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D5B223]"
        >
          {content}
        </a>
      );
    }

    return <div key={project.title}>{content}</div>;
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}

      /* ✅ FIXED BG HERE */
      className={`-mx-3 scroll-mt-28 bg-[radial-gradient(circle_at_12%_18%,rgba(94,135,187,0.12),transparent_30%),linear-gradient(180deg,#09111D_0%,#0C1626_55%,#08111E_100%)] px-3 pb-12 text-white sm:-mx-6 sm:px-6 sm:pb-16 lg:-mx-10 lg:px-10 lg:pb-20 ${className}`}
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="mb-12 text-[1.8rem] font-black sm:text-[2.35rem] lg:text-[3.1rem]">
            Featured Projects
          </h2>

          <Button as={motion.a} href="#all-projects" variant="secondary">
            View All Projects
          </Button>
        </div>

        <div className="mb-8 hidden flex-wrap gap-3 sm:flex">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative overflow-hidden rounded-full px-4 py-2 text-sm transition ${
                  isActive
                    ? "text-[#0B1730]"
                    : "border border-white/20 bg-white/10 text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 rounded-full bg-[#D5B223]"
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            );
          })}
        </div>

        {isMobile && visibleProjects.length > 1 ? (
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white/55">
              Swipe to explore
            </p>
            <div className="flex items-center gap-2">
              {visibleProjects.map((project, index) => {
                const isActive = index === activeMobileIndex;

                return (
                  <span
                    key={`${project.title}-indicator`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      isActive ? "w-6 bg-[#D5B223]" : "w-1.5 bg-white/30"
                    }`}
                    aria-hidden="true"
                  />
                );
              })}
            </div>
          </div>
        ) : null}

        <div
          ref={projectsScrollerRef}
          onScroll={handleProjectsScroll}
          className="no-scrollbar flex gap-8 overflow-x-auto pb-2 snap-x snap-mandatory touch-pan-x sm:grid sm:grid-cols-2 lg:grid-cols-3"
        >
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              whileTap={isMobile ? { scale: 0.985 } : undefined}
              transition={{ delay: index * 0.05 }}
              className="min-w-[42vw] max-w-[42vw] sm:min-w-0 sm:max-w-none snap-start"
            >
              {renderProjectItem(project)}
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-[1.1rem] font-bold sm:text-[1.25rem]">
            Need a Professional Engineering Partner?
          </p>

          <Button as={motion.a} href="#get-in-touch">
            Contact Us
          </Button>
        </div>

        {totalProjects === 0 && (
          <div className="mt-10 border border-dashed border-white/20 bg-white/5 px-6 py-10 text-center text-white/70">
            No projects available in this category.
          </div>
        )}
      </div>
    </motion.section>
  );
}

export default ProjectsSection;
