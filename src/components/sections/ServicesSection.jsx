import SectionHeader from "../ui/SectionHeader";

function ServicesSection({ data, className = "" }) {
  return (
    <section
      className={`animate-reveal mt-6 rounded-3xl bg-white/90 p-4 shadow-card backdrop-blur-sm [animation-delay:200ms] sm:p-6 lg:p-7 ${className}`}
    >
      <SectionHeader eyebrow="Services" title={data.title} />

      <div className="no-scrollbar -mx-0.5 grid snap-x snap-mandatory grid-flow-col auto-cols-[78%] gap-3 overflow-x-auto px-0.5 pb-1.5 sm:mx-0 sm:grid-flow-row sm:auto-cols-auto sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
        {data.items.map((service) => (
          <article
            key={service.title}
            className="snap-start rounded-2xl border border-brand-gray200 bg-white p-4 sm:min-h-[176px]"
          >
            <h3 className="m-0 text-[1rem] font-bold text-brand-navy900 sm:text-[1.03rem]">{service.title}</h3>
            <p className="m-0 mt-2 text-sm leading-6 text-brand-gray500 sm:text-[0.95rem]">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
