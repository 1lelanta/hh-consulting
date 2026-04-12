import { useEffect, useState } from "react";
import MobileShell from "./layout/MobileShell";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import PostProjectsCtaSection from "./components/sections/PostProjectsCtaSection";
import ProjectsArchivePage from "./components/sections/ProjectsArchivePage";
import ClientsSection from "./components/sections/ClientsSection";
import TeamSection from "./components/sections/TeamSection";
import ContactSection from "./components/sections/ContactSection";
import FooterSection from "./components/sections/FooterSection";
import StickyActions from "./components/sections/StickyActions";
import HeaderNav from "./layout/HeaderNav";
import { siteContent } from "./data/siteContent";

function App() {
  const [isProjectsArchive, setIsProjectsArchive] = useState(() => window.location.hash === "#all-projects");
  const [isAboutPage, setIsAboutPage] = useState(() => window.location.hash === "#about-us");
  const [isTeamPage, setIsTeamPage] = useState(() => window.location.hash === "#team");
  const [isContactPage, setIsContactPage] = useState(() => window.location.hash === "#get-in-touch");
  const [isLoading, setIsLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(true);
  const isHomePage = !isProjectsArchive && !isAboutPage && !isTeamPage && !isContactPage;
  const useFlushTopLayout = isHomePage || isContactPage;

  useEffect(() => {
    let hasCompleted = false;
    const startAt = performance.now();
    const minDisplayMs = 950;

    const completeLoading = () => {
      if (hasCompleted) return;
      hasCompleted = true;

      const elapsed = performance.now() - startAt;
      const remaining = Math.max(0, minDisplayMs - elapsed);

      window.setTimeout(() => {
        setIsLoading(false);
      }, remaining);
    };

    if (document.readyState === "complete") {
      completeLoading();
    } else {
      window.addEventListener("load", completeLoading, { once: true });
    }

    const fallback = window.setTimeout(completeLoading, 1600);

    return () => {
      window.clearTimeout(fallback);
      window.removeEventListener("load", completeLoading);
    };
  }, []);

  useEffect(() => {
    if (isLoading) return undefined;

    const hideTimer = window.setTimeout(() => {
      setShowPreloader(false);
    }, 420);

    return () => window.clearTimeout(hideTimer);
  }, [isLoading]);

  useEffect(() => {
    const updateRoute = () => {
      setIsProjectsArchive(window.location.hash === "#all-projects");
      setIsAboutPage(window.location.hash === "#about-us");
      setIsTeamPage(window.location.hash === "#team");
      setIsContactPage(window.location.hash === "#get-in-touch");
    };

    updateRoute();
    window.addEventListener("hashchange", updateRoute);

    return () => window.removeEventListener("hashchange", updateRoute);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#F4F6FA_0%,#EEF2F8_100%)] px-0 pb-0 text-brand-navy950">
      {showPreloader ? (
        <div
          className={`preloader fixed inset-0 z-[120] flex items-center justify-center px-6 transition-opacity duration-500 ${isLoading ? "opacity-100" : "pointer-events-none opacity-0"}`}
          aria-live="polite"
          aria-busy={isLoading}
        >
          <div className="preloader-glow" aria-hidden="true" />
          <div className="relative z-10 w-full max-w-[420px] rounded-[20px] border border-white/15 bg-white/[0.05] px-7 py-8 text-center shadow-[0_24px_56px_rgba(2,6,23,0.5)] backdrop-blur-lg sm:px-9 sm:py-9">
            <img
              src="/asset/hhlogo.jpeg"
              alt="HH Consulting logo"
              className="mx-auto h-[78px] w-[78px] rounded-xl border border-[#D5B223]/45 object-cover shadow-[0_0_0_8px_rgba(213,178,35,0.11)]"
            />
            <p className="m-0 mt-4 font-['Poppins','Inter',sans-serif] text-[1rem] font-semibold tracking-[0.08em] text-white sm:text-[1.06rem]">
              HH CONSULTING
            </p>
            <p className="m-0 mt-1.5 text-[0.82rem] uppercase tracking-[0.14em] text-[#D5B223]">Preparing your experience</p>
            <p className="m-0 mt-1 text-[0.9rem] font-semibold tracking-[0.08em] text-white/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              Addis Ababa, Ethiopia
            </p>

            <div className="mt-6 h-[3px] w-full overflow-hidden rounded-full bg-white/20">
              <span className={`preloader-progress ${isLoading ? "is-animating" : "is-complete"}`} />
            </div>
          </div>
        </div>
      ) : null}

      <HeaderNav />
      <div className="pointer-events-none fixed inset-0 opacity-40 [background:radial-gradient(circle_at_100%_0%,rgba(190,154,90,0.20),transparent_35%),radial-gradient(circle_at_0%_10%,rgba(22,59,99,0.14),transparent_30%)]" />

      <div className={`transition-all duration-700 ease-out ${showPreloader ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"}`}>
      <MobileShell className={useFlushTopLayout ? "pt-0" : "pt-[88px]"}>
        {isProjectsArchive ? (
          <ProjectsArchivePage data={siteContent.projects} />
        ) : isAboutPage ? (
          <AboutSection data={siteContent.about} className="lg:mt-8" />
        ) : isTeamPage ? (
          <TeamSection data={siteContent.team} className="lg:mt-8" />
        ) : isContactPage ? (
          <ContactSection data={siteContent.contact} className="mt-0 lg:mt-0" />
        ) : (
          <>
            <section>
              <HeroSection data={siteContent.hero} contact={siteContent.contact} />
            </section>
            <ServicesSection data={siteContent.services} className="lg:mt-8" />
            <ProjectsSection data={siteContent.projects} className="lg:mt-8" />
            <PostProjectsCtaSection className="lg:mt-8" />
            <ClientsSection data={siteContent.clients} className="lg:mt-8" />
          </>
        )}
        <FooterSection data={siteContent.footer} className={isContactPage ? "mt-0" : "mt-8"} />
      </MobileShell>
      </div>

      <StickyActions data={siteContent.stickyActions} />
    </div>
  );
}

export default App;
