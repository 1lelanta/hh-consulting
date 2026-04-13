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
  const [activeSection, setActiveSection] = useState("#home");
  // Intersection Observer for active nav highlighting
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''));
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          // Pick the one closest to the top
          const topMost = visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b));
          setActiveSection(`#${topMost.target.id}`);
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

  // ✅ LOCK BODY SCROLL (mobile menu)
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  // ✅ PERFECT SCROLL BEHAVIOR
  useEffect(() => {
    const threshold = 12; // small movement ignore
    const offset = 80; // always show near top

    const update = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      setHasScrolled(currentY > 20);

      // Always visible at top
      if (currentY < offset) {
        setIsNavVisible(true);
      } 
      // Scrolling DOWN
      else if (diff > threshold) {
        setIsNavVisible(false);
      } 
      // Scrolling UP
      else if (diff < -threshold) {
        setIsNavVisible(true);
      }

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
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
      ${isNavVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <nav
        className={`mx-auto max-w-[1400px] border-b border-white/10 ${navSurfaceClass}
        ${hasScrolled ? "shadow-xl" : ""}`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          {/* LOGO */}
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="logo" className="h-10 w-10 object-contain" />
            <span className="text-white font-bold">HH CONSULTING</span>
          </a>
          {/* DESKTOP NAV */}
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm tracking-wide hover:text-[#E5D39B] transition ${item.href.includes(activeSection.replace('#','')) ? "text-[#D5B223]" : "text-white"}`}
              >
                {item.label}
              </a>
            ))}
          </div>
          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden text-white text-xl z-[101]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
        {/* OVERLAY BLUR */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm md:hidden"
                onClick={() => setIsMenuOpen(false)}
                aria-hidden="true"
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
                className="fixed top-0 right-0 bottom-0 z-[110] w-[80vw] max-w-xs bg-[#181B23] shadow-2xl px-8 pt-24 pb-8 space-y-6 md:hidden"
                role="dialog"
                aria-modal="true"
              >
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-lg py-2 px-2 rounded transition ${item.href.includes(activeSection.replace('#','')) ? "bg-[#D5B223]/20 text-[#D5B223] font-bold" : "text-white hover:bg-white/10"}`}
                  >
                    {item.label}
                  </a>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default HeaderNav;