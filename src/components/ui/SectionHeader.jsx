function SectionHeader({ eyebrow, title }) {
  return (
    <header className="mb-3">
      <p className="m-0 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold500">{eyebrow}</p>
      <h2 className="mt-2 font-serif text-[1.5rem] leading-[1.2] text-brand-navy950">{title}</h2>
    </header>
  );
}

export default SectionHeader;
