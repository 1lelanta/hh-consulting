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

  // ✅ FIXED Intersection Observer
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);

        if (visible.length > 0) {
          // pick the section closest to top
          const topMost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );

          setActiveSection(topMost.target.id);
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const navSurfaceClass = "bg-[#090B12CC] backdrop-blur-[18px]";

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500
      ${isNavVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <nav
        className={`mx-auto max-w-[1400px] border-b border-white/10 ${navSurfaceClass}
        ${hasScrolled ? "shadow-xl" : ""}`}
      >
        <div className="flex items-center justify-between px-4 py-4">
          {/* LOGO */}
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="logo" className="h-11 w-11" />
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-lg">
                HH CONSULTING
              </span>
              <span className="text-[#D5B223] text-sm">
                Engineering & Architecture
              </span>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => {
              // ✅ FIXED ACTIVE LOGIC
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
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden text-white text-2xl z-[120]"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* ✅ MOBILE MENU (DARKER FIXED) */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* DARKER OVERLAY */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
                onClick={() => setIsMenuOpen(false)}
              />

              {/* SOLID DRAWER */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed top-0 right-0 h-full w-[280px] bg-[#05070D] border-l border-white/10 shadow-2xl z-[110] px-6 pt-24 flex flex-col gap-3"
              >
                {navItems.map((item) => {
                  const isActive = item.href === `#${activeSection}`;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-xl font-medium px-3 py-2 rounded ${
                        isActive
                          ? "bg-[#D5B223]/20 text-[#D5B223]"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default HeaderNav;