const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

function HeaderNav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-6 lg:px-10">
      <nav className="mx-auto flex w-full max-w-[1320px] items-center gap-4 rounded-2xl border border-white/60 bg-white/90 px-3 py-3 shadow-[0_14px_36px_rgba(13,40,74,0.12)] backdrop-blur-xl">
        <a href="#home" aria-label="HH Consulting home" className="flex shrink-0 items-center gap-3">
          <span className="inline-grid h-12 w-12 place-items-center overflow-hidden rounded-2xl bg-white ring-1 ring-brand-gray200">
            <img src="/asset/hhlogo.jpeg" alt="HH Consulting logo" className="h-full w-full object-cover" />
          </span>
        </a>

        <div className="no-scrollbar flex min-w-0 flex-1 items-center justify-start gap-2 overflow-x-auto sm:justify-center sm:gap-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-[0.95rem] font-bold tracking-[0.02em] text-brand-navy900 transition-colors hover:bg-[#F3F5F8] hover:text-[#D5B223]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default HeaderNav;