import SectionHeader from "../ui/SectionHeader";

function ProjectsSection({ data, className = "" }) {
  return (
    <section
      id="projects"
      className={`animate-reveal mt-6 rounded-3xl bg-white/90 p-4 shadow-card backdrop-blur-sm [animation-delay:280ms] sm:p-6 lg:p-7 ${className}`}
    >
      <SectionHeader eyebrow="Featured Projects" title={data.title} />

      <div className="space-y-3 sm:grid sm:grid-cols-2 sm:gap-3 sm:space-y-0 lg:grid-cols-1 lg:gap-4">
        {data.items.map((project) => (
          <article key={project.title} className="overflow-hidden rounded-2xl border border-brand-gray200 bg-white">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="h-[176px] w-full object-cover sm:h-[210px] xl:h-[250px]"
            />
            <div className="p-3.5 sm:p-4">
              <h3 className="m-0 text-[1.03rem] font-bold text-brand-navy950 sm:text-[1.08rem]">{project.title}</h3>
              <p className="m-0 mt-1 text-[12px] font-bold uppercase tracking-[0.05em] text-brand-gold500">
                {project.location}
              </p>
              <p className="m-0 mt-2 text-sm leading-6 text-brand-gray500 sm:text-[0.95rem]">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
