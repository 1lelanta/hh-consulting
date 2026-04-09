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
              <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {data.items.map((project, index) => (
            href={data.viewAllHref}
            className="mt-6 hidden text-[1rem] font-semibold text-[#D5B223] underline-offset-4 hover:underline lg:inline-flex"
                    className={`group overflow-hidden rounded-[1.75rem] border border-brand-gray200 bg-white shadow-[0_10px_24px_rgba(13,40,74,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(13,40,74,0.12)] ${
                      index === 0 ? "xl:col-span-2" : ""
                    }`}
            {data.viewAllLabel} {'->'}
                    <div className={index === 0 ? "xl:grid xl:grid-cols-[1.1fr_0.9fr] xl:items-stretch" : ""}>
                      <div className="relative">
                        <img
                          src={project.image}
                          alt={project.imageAlt}
                          className={`h-[250px] w-full object-cover object-center transition duration-500 group-hover:scale-105 sm:h-[280px] ${
                            index === 0 ? "xl:h-full xl:min-h-[360px]" : ""
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#08192D]/30 via-transparent to-transparent" />
                        <span className="absolute left-4 top-4 rounded-full bg-[#08192D]/60 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.items.map((project) => (
                        {index === 0 ? (
                          <span className="absolute right-4 top-4 rounded-full bg-[#D5B223] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white">
                            Featured Project
                          </span>
                        ) : null}
                      </div>

                      <div className={`flex h-full flex-col p-6 sm:p-7 ${index === 0 ? "xl:p-8" : ""}`}>
                        <p className="m-0 inline-flex items-center gap-2 rounded-full bg-[#F4F6FA] px-3 py-2 text-[0.92rem] font-semibold text-brand-navy900">
                          <span className="text-[#D5B223]">{locationIcon}</span>
                          {project.location}
                        </p>

                        <h3 className="m-0 mt-4 text-[1.45rem] font-extrabold leading-tight tracking-[-0.02em] text-brand-navy900 sm:text-[1.8rem]">
                          {project.title}
                        </h3>

                        <div className="mt-4 grid grid-cols-2 gap-3">
                          {project.meta.map((item) => (
                            <div key={`${project.title}-${item.label}`} className="rounded-2xl border border-brand-gray200 bg-[#F8FAFD] px-4 py-3">
                              <p className="m-0 text-[0.74rem] font-bold uppercase tracking-[0.12em] text-[#D5B223]">
                                {item.label}
                              </p>
                              <p className="m-0 mt-1 text-[0.95rem] font-semibold leading-6 text-brand-navy900">
                                {item.value}
                              </p>
                            </div>
                          ))}
                        </div>

                        <p className="m-0 mt-5 text-[1rem] leading-7 text-brand-gray500 sm:text-[1.05rem]">
                          {project.description}
                        </p>

                        <a
                          href={project.href}
                          className="mt-6 inline-flex items-center gap-2 text-[1rem] font-semibold text-[#D5B223] underline-offset-4 transition-all duration-300 hover:gap-3 hover:underline"
                        >
                          View Details <span aria-hidden="true">→</span>
                        </a>
                      </div>
                    </div>
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
