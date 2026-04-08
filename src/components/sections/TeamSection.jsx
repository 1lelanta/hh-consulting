import SectionHeader from "../ui/SectionHeader";

function TeamSection({ data, className = "" }) {
  return (
    <section
      className={`animate-reveal mt-6 rounded-3xl bg-white/90 p-4 shadow-card backdrop-blur-sm [animation-delay:360ms] sm:p-6 lg:p-7 ${className}`}
    >
      <SectionHeader eyebrow="Leadership Team" title={data.title} />

      <div className="space-y-2.5 sm:grid sm:grid-cols-2 sm:gap-3 sm:space-y-0 lg:grid-cols-1 xl:grid-cols-2">
        {data.members.map((member) => (
          <article
            key={member.name}
            className="flex items-center gap-3 rounded-2xl border border-brand-gray200 bg-white p-2.5 sm:p-3"
          >
            <img
              src={member.image}
              alt={member.imageAlt}
              className="h-16 w-16 shrink-0 rounded-full object-cover sm:h-[68px] sm:w-[68px]"
            />
            <div>
              <h3 className="m-0 text-[0.98rem] font-bold text-brand-navy950">{member.name}</h3>
              <p className="m-0 mt-1 text-sm text-brand-gray500">{member.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
