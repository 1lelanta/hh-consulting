import SectionHeader from "../ui/SectionHeader";

function ServicesSection({ data }) {
  return (
    <section className="animate-reveal mt-6 rounded-3xl bg-white/90 p-4 shadow-card backdrop-blur-sm [animation-delay:200ms]">
      <SectionHeader eyebrow="Services" title={data.title} />

      <div className="-mx-0.5 grid snap-x snap-mandatory grid-flow-col auto-cols-[78%] gap-3 overflow-x-auto px-0.5 pb-1.5">
        {data.items.map((service) => (
          <article
            key={service.title}
            className="snap-start rounded-2xl border border-brand-gray200 bg-white p-4"
          >
            <h3 className="m-0 text-[1rem] font-bold text-brand-navy900">{service.title}</h3>
            <p className="m-0 mt-2 text-sm leading-6 text-brand-gray500">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
