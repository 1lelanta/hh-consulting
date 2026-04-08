import SectionHeader from "../ui/SectionHeader";

function ContactSection({ data }) {
  return (
    <section id="contact" className="animate-reveal mt-6 rounded-3xl bg-white/90 p-4 shadow-card backdrop-blur-sm [animation-delay:430ms]">
      <SectionHeader eyebrow="Contact" title={data.title} />
      <p className="m-0 text-sm leading-6 text-brand-gray500">{data.description}</p>
      <a
        href={`mailto:${data.email}`}
        className="mt-3 inline-block border-b border-brand-navy800/30 text-sm font-bold text-brand-navy800"
      >
        {data.email}
      </a>
    </section>
  );
}

export default ContactSection;
