function ProjectsSection({ data, className = "" }) {
  const locationIcon = (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );

  return (
    <section
      id="projects"
      className={`animate-reveal mt-8 -mx-3 scroll-mt-28 bg-[#F3F5F8] px-3 py-14 [animation-delay:280ms] sm:-mx-6 sm:px-6 sm:py-16 lg:-mx-10 lg:px-10 lg:py-20 2xl:-mx-14 2xl:px-14 ${className}`}
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

            <h2 className="m-0 mt-5 text-[2rem] font-extrabold leading-[1.14] tracking-[-0.02em] text-brand-navy900 sm:text-[2.45rem] lg:text-[3.3rem]">
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

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.items.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-brand-gray200 bg-white shadow-[0_2px_8px_rgba(13,40,74,0.06)]"
            >
              <div className="relative">
                <img src={project.image} alt={project.imageAlt} className="h-[240px] w-full object-cover" />
                <span className="absolute right-4 top-4 rounded-full bg-[#D5B223] px-3 py-1 text-sm font-semibold text-white">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="m-0 text-[2rem] font-extrabold leading-tight text-brand-navy900 sm:text-[1.95rem]">
                  {project.title}
                </h3>

                <p className="m-0 mt-2 flex items-center gap-2 text-[1.05rem] font-medium text-brand-gray500">
                  <span className="text-brand-gray500">{locationIcon}</span>
                  {project.location}
                </p>

                <p className="m-0 mt-3 text-[1.12rem] leading-8 text-brand-gray500">{project.description}</p>

                <a href={project.href} className="mt-4 inline-block text-[1.05rem] font-semibold text-[#D5B223]">
                  View Details {'->'}
                </a>
              </div>
            </article>
          ))}
        </div>

        <a href={data.viewAllHref} className="mt-6 inline-flex text-[1rem] font-semibold text-[#D5B223] lg:hidden">
          {data.viewAllLabel} {'->'}
        </a>
      </div>
    </section>
  );
}

export default ProjectsSection;
