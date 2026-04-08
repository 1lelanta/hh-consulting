import SectionHeader from "../ui/SectionHeader";

function AboutSection({ data }) {
  return (
    <section className="animate-reveal mt-6 rounded-3xl bg-white/90 p-4 shadow-card backdrop-blur-sm [animation-delay:120ms]">
      <SectionHeader eyebrow="About" title={data.title} />
      <p className="m-0 text-sm leading-6 text-brand-gray500">{data.description}</p>

      <div className="mt-4 grid grid-cols-2 gap-2.5">
        {data.stats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-2xl bg-gradient-to-br from-brand-navy900/5 to-brand-gold500/10 p-3"
          >
            <p className="m-0 text-2xl font-extrabold text-brand-navy900">{stat.value}</p>
            <p className="m-0 mt-1 text-[12px] text-brand-gray500">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
