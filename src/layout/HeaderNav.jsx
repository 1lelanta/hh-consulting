import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
];

function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const scrollY = window.scrollY;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevHtmlOverscrollBehavior = document.documentElement.style.overscrollBehavior;
    const prevOverflow = document.body.style.overflow;
    const prevTouchAction = document.body.style.touchAction;
    const prevBodyPosition = document.body.style.position;
    const prevBodyTop = document.body.style.top;
    const prevBodyWidth = document.body.style.width;

    if (isMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.overscrollBehavior = "none";
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    }

    return () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.documentElement.style.overscrollBehavior = prevHtmlOverscrollBehavior;
      document.body.style.overflow = prevOverflow;
      document.body.style.touchAction = prevTouchAction;
      document.body.style.position = prevBodyPosition;
      document.body.style.top = prevBodyTop;
      document.body.style.width = prevBodyWidth;

      if (isMenuOpen) {
        window.scrollTo(0, scrollY);
      }
    };
  }, [isMenuOpen]);

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      setHasScrolled(currentY > 24);

      if (isMenuOpen) {
        setIsNavVisible(true);
        lastScrollYRef.current = currentY;
        return;
      }

      if (currentY <= 16) {
        setIsNavVisible(true);
      } else if (currentY > lastScrollYRef.current + 4) {
        setIsNavVisible(false);
      } else if (currentY < lastScrollYRef.current - 4) {
        setIsNavVisible(true);
      }

      lastScrollYRef.current = currentY;
    }

    lastScrollYRef.current = window.scrollY;
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 px-2 [transition-property:transform,opacity,filter,padding] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-4 ${
        isNavVisible
          ? "translate-y-0 opacity-100 scale-100 blur-0"
          : "-translate-y-4 opacity-0 scale-[0.96] blur-[2px] pointer-events-none"
      } ${
        hasScrolled ? "pt-1.5 sm:pt-2" : "pt-2.5 sm:pt-3.5"
      }`}
    >
      <nav
        className={`mx-auto w-full max-w-[1400px] rounded-2xl border border-[#8E7A4A]/45 bg-[#372D14] backdrop-blur-xl transition-all duration-500 ${
          hasScrolled
            ? "shadow-[0_10px_22px_rgba(16,14,10,0.26),inset_0_1px_0_rgba(255,255,255,0.06)]"
            : "shadow-[0_18px_38px_rgba(16,14,10,0.34),inset_0_1px_0_rgba(255,255,255,0.1)]"
        }`}
      >
        <div
          className={`mx-auto flex w-full items-center justify-between gap-3 px-3 transition-all duration-500 sm:px-6 lg:px-8 ${
            hasScrolled ? "py-2 sm:py-2.5" : "py-3.5 sm:py-4"
          }`}
        >
          <a href="#home" aria-label="HH Consulting home" className="flex shrink-0 items-center gap-3">
            <span className="inline-grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-white/25 bg-white/90 p-1.25 shadow-[0_8px_16px_rgba(10,9,7,0.22)] sm:h-12 sm:w-12 sm:rounded-2xl sm:p-1">
              <img src="/asset/hhlogo.jpeg" alt="HH Consulting logo" className="h-full w-full object-contain" />
            </span>
            <span className="flex min-w-0 flex-col leading-none">
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#E5D39B]">Engineering & Architecture</span>
              <span className="mt-1 text-[0.94rem] font-bold tracking-[0.02em] text-white">HH CONSULTING</span>
            </span>
          </a>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-grid h-11 w-11 place-items-center rounded-xl border border-white/20 bg-white/10 text-[#F5F5F5] shadow-[0_8px_18px_rgba(8,7,4,0.3)] transition duration-300 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E5D39B] md:hidden"
          >
            {isMenuOpen ? (
              <span aria-hidden="true" className="text-[1.35rem] leading-none">x</span>
            ) : (
              <span className="flex flex-col items-center gap-1.5" aria-hidden="true">
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
              </span>
            )}
          </button>

          <div className="no-scrollbar hidden min-w-0 flex-1 items-center justify-end gap-1 overflow-x-auto md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative inline-flex px-3 py-2 text-[0.9rem] font-semibold uppercase tracking-[0.14em] text-[#F5F5F5] transition duration-300 hover:text-[#F4E4A0] focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4E4A0] lg:text-[0.98rem]"
              >
                {item.label}
                <span className="pointer-events-none absolute bottom-[5px] left-3 h-[1.5px] w-[calc(100%-24px)] origin-left scale-x-0 bg-[#E5D39B]/85 transition duration-300 group-hover:scale-x-100" aria-hidden="true" />
              </a>
            ))}

            <a
              href="#contact"
              className="ml-3 inline-flex border-l border-white/20 pl-4 pr-2 py-2 text-[0.84rem] font-extrabold uppercase tracking-[0.18em] text-[#F5F5F5] transition duration-300 hover:text-[#FFE9A8] focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4E4A0] lg:text-[0.9rem]"
            >
              Get Started
            </a>
          </div>

          <AnimatePresence>
            {isMenuOpen ? (
              <motion.div
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-x-0 top-[calc(100%-1px)] z-[80] flex h-[calc(100dvh-5.8rem)] flex-col overflow-hidden rounded-b-2xl border-x border-b border-[#8E7A4A]/45 bg-[#372D14] text-[#F5F5F5] shadow-[0_22px_44px_rgba(7,6,4,0.48)] md:hidden"
              >
                <div className="flex-1 overflow-y-auto px-7 py-8">
                  <div className="space-y-5">
                    {navItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block font-['Georgia',serif] text-[2.1rem] leading-[1.05] tracking-[-0.01em] text-[#F5F5F5] transition duration-300 hover:translate-x-1 hover:text-[#EAD9A3] focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4E4A0]"
                      >
                        {item.label}
                      </a>
                    ))}

                    <a
                      href="#contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="block font-['Georgia',serif] text-[2.1rem] leading-[1.05] tracking-[-0.01em] text-[#F5F5F5] transition duration-300 hover:translate-x-1 hover:text-[#EAD9A3] focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4E4A0]"
                    >
                      Contact
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 border-t border-[#8E7A4A]/30 bg-[#372D14] px-7 py-5">
                  <div>
                    <p className="m-0 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#D6B84F]">Contact</p>
                    <p className="m-0 mt-2 text-[0.95rem] leading-7 text-[#F5F5F5]/90">Addis Ababa, Ethiopia</p>
                    <p className="m-0 text-[0.95rem] leading-7 text-[#F5F5F5]/90">+251 91 359 2121</p>
                  </div>
                  <div>
                    <p className="m-0 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#D6B84F]">Follow Us</p>
                    <div className="mt-2 flex items-center gap-3 text-[#F5F5F5]/88">
                      <span className="inline-grid h-7 w-7 place-items-center rounded-full border border-[#8E7A4A]/45 text-[0.64rem] font-semibold">IG</span>
                      <span className="inline-grid h-7 w-7 place-items-center rounded-full border border-[#8E7A4A]/45 text-[0.64rem] font-semibold">FB</span>
                      <span className="inline-grid h-7 w-7 place-items-center rounded-full border border-[#8E7A4A]/45 text-[0.64rem] font-semibold">IN</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}

export default HeaderNav;