import { useState } from "react";

function ProjectsSection({ data, className = "" }) {
  const [activeProject, setActiveProject] = useState(null);

  const getProjectYear = (project) => {
    const yearMeta = (project.meta || []).find((item) => item.label?.toLowerCase() === "year");
    return yearMeta?.value || "N/A";
  };

  const renderProjectItem = (project) => {
    const isActive = activeProject === project.title;

    const content = (
      <div className="group relative cursor-pointer" onClick={() => setActiveProject((current) => (current === project.title ? null : project.title))}>
        <img
          src={project.image}
          alt={project.imageAlt}
          className={[
            "aspect-[4/3] w-full object-cover object-center transition-transform duration-300",
            isActive ? "scale-105" : "group-hover:scale-105",
          ].join(" ")}
        />

        <div
          className={[
            "absolute inset-0 flex flex-col justify-end bg-black/60 p-4 text-white transition-all duration-300",
            isActive
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
          ].join(" ")}
        >
          <p className="m-0 text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-white/80">
            {getProjectYear(project)} • {project.location}
          </p>
          <p className="m-0 mt-2 text-[0.9rem] leading-6 text-white/92 sm:text-[0.96rem] sm:leading-7">
            {project.description}
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 bg-[#E7EBF1]/88 px-3 py-2 backdrop-blur-sm sm:px-4 sm:py-2.5">
          <p className="m-0 text-[0.86rem] font-semibold uppercase tracking-[0.08em] text-brand-navy900 sm:text-[0.92rem]">
            {project.title}
          </p>
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
    <section
      id="projects"
      className={`animate-reveal mt-8 -mx-3 scroll-mt-28 bg-[#F3F5F8] px-3 py-12 [animation-delay:280ms] sm:-mx-6 sm:px-6 sm:py-16 lg:-mx-10 lg:px-10 lg:py-20 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1320px]">
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

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-3">
          {data.items.map((project) => renderProjectItem(project))}
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
