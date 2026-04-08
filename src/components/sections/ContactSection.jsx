import SectionHeader from "../ui/SectionHeader";

function ContactSection({ data, className = "" }) {
  return (
    <section
      id="contact"
      className={`animate-reveal mt-6 rounded-3xl bg-white/90 p-4 shadow-card backdrop-blur-sm [animation-delay:430ms] sm:p-6 lg:p-7 ${className}`}
    >
      <SectionHeader eyebrow="Contact" title={data.title} />
      <p className="m-0 text-sm leading-6 text-brand-gray500 sm:max-w-[760px] sm:text-base">
        {data.description}
      </p>
      <a
        href={`mailto:${data.email}`}
        className="mt-3 inline-block border-b border-brand-navy800/30 text-sm font-bold text-brand-navy800 sm:text-base"
      >
        {data.email}
      </a>
    </section>
  );
}

export default ContactSection;
