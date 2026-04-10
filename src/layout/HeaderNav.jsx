import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
];

function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 24);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const shellClassName = "border-b border-[#D9E1EC] bg-white/96 shadow-[0_12px_26px_rgba(13,40,74,0.12)]";

  const textClassName = "text-brand-navy900";
  const navItemClassName = "border-[#D7E0EC] bg-white text-brand-navy900 hover:border-[#C7D1E0] hover:bg-[#F4F7FB] hover:text-brand-navy950 focus-visible:outline-[#D5B223]";
  const menuPanelClassName = "border-white/70 bg-white/98 shadow-[0_20px_40px_rgba(13,40,74,0.16)]";

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className={`w-full backdrop-blur-xl transition-colors duration-300 ${shellClassName}`}>
        <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between gap-4 px-3 py-3 sm:px-6 lg:px-10">
          <a href="#home" aria-label="HH Consulting home" className="flex shrink-0 items-center gap-3">
            <span className="inline-grid h-11 w-11 place-items-center overflow-hidden rounded-xl border border-[#D7E0EC] bg-white p-1.5 shadow-[0_8px_18px_rgba(2,6,23,0.12)] sm:h-12 sm:w-12 sm:rounded-2xl sm:p-1">
            <img src="/asset/hhlogo.jpeg" alt="HH Consulting logo" className="h-full w-full object-contain" />
            </span>
            <span className="hidden min-w-0 flex-col leading-none lg:flex">
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#B18428]">Engineering & Architecture</span>
              <span className={`mt-1 text-[0.92rem] font-bold tracking-[-0.01em] ${textClassName}`}>HH Consulting</span>
            </span>
          </a>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-grid h-11 w-11 place-items-center rounded-xl border border-[#D7E0EC] bg-white text-brand-navy900 shadow-[0_8px_18px_rgba(2,6,23,0.12)] backdrop-blur-[10px] transition duration-300 hover:bg-[#F4F7FB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D5B223] md:hidden"
          >
            <span className="flex flex-col items-center gap-1.5" aria-hidden="true">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>

          <div className="no-scrollbar hidden min-w-0 flex-1 items-center justify-end gap-2 overflow-x-auto md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative inline-flex rounded-full px-4 py-2 text-[0.9rem] font-semibold tracking-[0.01em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${navItemClassName}`}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="ml-2 inline-flex rounded-full bg-[#D5B223] px-5 py-2.5 text-[0.88rem] font-extrabold uppercase tracking-[0.1em] text-[#08192D] shadow-[0_10px_22px_rgba(213,178,35,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e4c54c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4E4A0]"
            >
              Get Started
            </a>
          </div>

          {isMenuOpen ? (
            <div className={`absolute left-3 right-3 top-[calc(100%+0.75rem)] rounded-[18px] p-3 backdrop-blur-xl md:hidden ${menuPanelClassName}`}>
              <div className={`mb-3 flex items-center justify-between rounded-[14px] px-4 py-3 ${isScrolled ? "border border-[#D7E0EC] bg-[#F7FAFD]" : "border border-white/10 bg-white/5"}`}>
                <div>
                  <p className={`m-0 text-[0.68rem] font-semibold uppercase tracking-[0.16em] ${isScrolled ? "text-[#B18428]" : "text-[#D5B223]"}`}>Navigate</p>
                  <p className={`m-0 mt-1 text-[0.92rem] font-medium ${isScrolled ? "text-brand-navy900" : "text-white/88"}`}>Quick access to key sections</p>
                </div>
              </div>

              <div className="space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between rounded-[14px] px-4 py-3 text-[0.95rem] font-semibold text-brand-navy900 transition duration-300 hover:bg-[#F4F7FB] hover:text-[#B18428] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D5B223]"
                  >
                    <span>{item.label}</span>
                    <span className="text-brand-gray400">↗</span>
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-2 inline-flex w-full items-center justify-center rounded-[14px] bg-[#D5B223] px-4 py-3 text-[0.86rem] font-extrabold uppercase tracking-[0.11em] text-[#08192D] shadow-[0_10px_20px_rgba(213,178,35,0.3)] transition duration-300 hover:bg-[#e4c54c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4E4A0]"
                >
                  Get Started
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  );
}

export default HeaderNav;