import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/hhlogo.jpeg";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about-us" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#get-in-touch" },
];

function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  // Scroll hide/show navbar
  useEffect(() => {
    const threshold = 12;
    const offset = 80;

    const update = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      setHasScrolled(currentY > 20);

      if (currentY < offset) setIsNavVisible(true);
      else if (diff > threshold) setIsNavVisible(false);
      else if (diff < -threshold) setIsNavVisible(true);

      lastScrollY.current = currentY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(update);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ FIXED: Active section tracking (scroll-based)
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(
          item.href.replace("#", "")
        );

        if (section) {
          const top = section.offsetTop - 120;

          if (window.scrollY >= top) {
            current = section.id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500
        ${isNavVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <nav
          className={`mx-auto max-w-[1400px] border-b border-white/10
          bg-[#090B12CC] backdrop-blur-[18px]
          ${hasScrolled ? "shadow-xl" : ""}`}
        >
          <div className="flex items-center justify-between gap-3 px-4 py-3 sm:py-4">
            {/* LOGO */}
            <a href="#home" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
              <img src={logo} alt="logo" className="h-10 w-10 shrink-0 sm:h-11 sm:w-11" />
              <div className="flex min-w-0 flex-col leading-tight">
                <span className="truncate text-base font-bold text-white sm:text-lg">
                  HH CONSULTING
                </span>
                <span className="truncate text-[0.72rem] text-[#D5B223] sm:text-sm">
                  Engineering & Architecture
                </span>
              </div>
            </a>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex gap-8">
              {navItems.map((item) => {
                const isActive = item.href === `#${activeSection}`;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`text-base font-medium transition ${
                      isActive
                        ? "text-[#D5B223]"
                        : "text-white hover:text-[#E5D39B]"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              className="z-[120] inline-grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/12 bg-white/[0.06] text-white shadow-[0_12px_24px_rgba(0,0,0,0.24)] transition-all duration-300 hover:border-[#D5B223]/35 hover:bg-white/[0.1] active:scale-95 md:hidden"
            >
              <span className="sr-only">Open navigation</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16" />
                <path d="M7 12h13" />
                <path d="M10 17h10" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU (GLOBAL FIXED LAYER) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] bg-[rgba(2,6,23,0.78)] backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="
                fixed top-0 right-0
                h-screen w-[min(86vw,340px)]
                bg-[linear-gradient(180deg,#070A12_0%,#0D1321_100%)]
                z-[1000]
                flex flex-col
                border-l border-white/10
                px-6 pb-8 pt-24
                shadow-[-24px_0_60px_rgba(0,0,0,0.4)]
              "
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(213,178,35,0.16),transparent_38%)]" />

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className="
                  absolute right-5 top-5
                  inline-grid h-10 w-10 place-items-center
                  rounded-full border border-white/10
                  bg-white/8 text-white
                  transition-all duration-300 hover:bg-white/14 active:scale-95
                "
              >
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <path d="M6 6l12 12" />
                  <path d="M18 6 6 18" />
                </svg>
              </button>

              <div className="relative">
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#D5B223]">
                  Menu
                </p>
                <p className="mt-3 max-w-[18ch] text-2xl font-black leading-[1.02] text-white">
                  Explore HH Consulting
                </p>
              </div>

              <div className="relative mt-8 flex flex-col gap-2">
                {navItems.map((item, index) => {
                  const isActive = item.href === `#${activeSection}`;

                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 12 }}
                      transition={{ delay: 0.04 * index }}
                      className={`group flex items-center justify-between rounded-2xl border px-4 py-3.5 transition-all duration-300 active:scale-[0.985] ${
                        isActive
                          ? "border-[#D5B223]/45 bg-[#D5B223]/14 text-white shadow-[0_18px_34px_rgba(213,178,35,0.12)]"
                          : "border-white/8 bg-white/[0.04] text-white/88 hover:border-white/15 hover:bg-white/[0.08]"
                      }`}
                    >
                      <span className="text-[1.02rem] font-semibold">
                        {item.label}
                      </span>
                      <span
                        className={`inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] ${
                          isActive ? "text-[#D5B223]" : "text-white/35"
                        }`}
                      >
                        {isActive ? "Current" : "Open"}
                        <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                          <path d="M4 10h12" />
                          <path d="m10 4 6 6-6 6" />
                        </svg>
                      </span>
                    </motion.a>
                  );
                })}
              </div>

              <div className="relative mt-auto rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-4">
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#D5B223]">
                  HH Consulting
                </p>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Engineering and architecture solutions shaped for durable, future-ready projects.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default HeaderNav;
