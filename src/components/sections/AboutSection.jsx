import SectionHeader from "../ui/SectionHeader";

function AboutSection({ data, className = "" }) {
  return (
    <section
      className={`animate-reveal mt-6 rounded-3xl bg-white/90 p-4 shadow-card backdrop-blur-sm [animation-delay:120ms] sm:p-6 lg:p-7 ${className}`}
    >
      <SectionHeader eyebrow="About" title={data.title} />
      <p className="m-0 text-sm leading-6 text-brand-gray500 sm:max-w-[820px] sm:text-base">
        {data.description}
      </p>

      <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-5 sm:grid-cols-4 sm:gap-3">
        {data.stats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-2xl bg-gradient-to-br from-brand-navy900/5 to-brand-gold500/10 p-3 sm:p-4"
          >
            <p className="m-0 text-2xl font-extrabold text-brand-navy900 sm:text-[1.9rem]">{stat.value}</p>
            <p className="m-0 mt-1 text-[12px] text-brand-gray500 sm:text-[13px]">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
