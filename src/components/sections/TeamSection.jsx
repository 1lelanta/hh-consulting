import SectionHeader from "../ui/SectionHeader";

function TeamSection({ data }) {
  return (
    <section className="animate-reveal mt-6 rounded-3xl bg-white/90 p-4 shadow-card backdrop-blur-sm [animation-delay:360ms]">
      <SectionHeader eyebrow="Leadership Team" title={data.title} />

      <div className="space-y-2.5">
        {data.members.map((member) => (
          <article
            key={member.name}
            className="flex items-center gap-3 rounded-2xl border border-brand-gray200 bg-white p-2.5"
          >
            <img
              src={member.image}
              alt={member.imageAlt}
              className="h-16 w-16 shrink-0 rounded-full object-cover"
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
