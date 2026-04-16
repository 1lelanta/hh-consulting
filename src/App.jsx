import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import MobileShell from "./layout/MobileShell";
import HeaderNav from "./layout/HeaderNav";

import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ClientsSection from "./components/sections/ClientsSection";

import ProjectsArchivePage from "./components/sections/ProjectsArchivePage";
import TeamSection from "./components/sections/TeamSection";
import HomeCtaSection from "./components/sections/HomeCtaSection";
import ContactSection from "./components/sections/ContactSection";
import FooterSection from "./components/sections/FooterSection";
import StickyActions from "./components/sections/StickyActions";

import CertificationsSection from "./components/sections/CertificationsSection";

import { siteContent } from "./data/siteContent";

function App() {
  const [isProjectsArchive, setIsProjectsArchive] = useState(() => window.location.hash === "#all-projects");
  const [isAboutPage, setIsAboutPage] = useState(() => window.location.hash === "#about-us");
  const [isTeamPage, setIsTeamPage] = useState(() => window.location.hash === "#team");
  const [isContactPage, setIsContactPage] = useState(() => window.location.hash === "#get-in-touch");

  const [isLoading, setIsLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(true);

  const isHomePage =
    !isProjectsArchive &&
    !isAboutPage &&
    !isTeamPage &&
    !isContactPage;

  const useFlushTopLayout = isHomePage || isContactPage;

  const homePageShellClass = isHomePage ? "gap-14 sm:gap-16 lg:gap-20" : "";

  const routeKey = isProjectsArchive
    ? "projects-archive"
    : isAboutPage
    ? "about"
    : isTeamPage
    ? "team"
    : isContactPage
    ? "contact"
    : "home";

  // ---------------------------
  // PRELOADER LOGIC
  // ---------------------------
  useEffect(() => {
    let done = false;
    const start = performance.now();
    const min = 900;

    const finish = () => {
      if (done) return;
      done = true;

      const elapsed = performance.now() - start;
      const wait = Math.max(0, min - elapsed);

      setTimeout(() => setIsLoading(false), wait);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    const fallback = setTimeout(finish, 1600);
    return () => clearTimeout(fallback);
  }, []);

  useEffect(() => {
    if (isLoading) return;
    const t = setTimeout(() => setShowPreloader(false), 500);
    return () => clearTimeout(t);
  }, [isLoading]);

  useEffect(() => {
    const update = () => {
      setIsProjectsArchive(window.location.hash === "#all-projects");
      setIsAboutPage(window.location.hash === "#about-us");
      setIsTeamPage(window.location.hash === "#team");
      setIsContactPage(window.location.hash === "#get-in-touch");
    };

    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white">

      {/* =========================
          PREMIUM PRELOADER
      ========================= */}
      {showPreloader && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[120] flex flex-col items-center justify-center bg-[#050816]"
        >
          {/* background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(190,154,90,0.25),transparent_60%)]" />

          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center z-10"
          >
            <h1 className="text-3xl md:text-5xl font-bold tracking-wider text-white">
              HH CONSULTING
            </h1>

            <p className="mt-3 text-[#D5B223] text-sm md:text-base tracking-[3px] uppercase">
              Engineering & Architecture
            </p>

            <p className="mt-2 text-white/60 text-sm">
              Addis Ababa, Ethiopia
            </p>
          </motion.div>

          {/* loading bar */}
          <div className="absolute bottom-16 w-[180px] h-[2px] bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-[#D5B223]"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "linear",
              }}
            />
          </div>
        </motion.div>
      )}

      {/* =========================
          MAIN CONTENT
      ========================= */}

      <HeaderNav />

      <div className="pointer-events-none fixed inset-0 opacity-40 bg-[radial-gradient(circle_at_100%_0%,rgba(190,154,90,0.2),transparent_35%)]" />

      <div className={`transition-all duration-700 ${showPreloader ? "opacity-0 translate-y-2" : "opacity-100"}`}>

        <MobileShell className={`${useFlushTopLayout ? "pt-0" : "pt-[88px]"} ${homePageShellClass}`}>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={routeKey}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >

              {isProjectsArchive ? (
                <ProjectsArchivePage data={siteContent.projects} />
              ) : isAboutPage ? (
                <>
                  <AboutSection
                    data={siteContent.about}
                    valuesData={siteContent.whyChooseUs}
                    stats={{
                      projects: siteContent.projects.items.length,
                      years: 10,
                      clients: siteContent.clients.logoRows.flatMap(r => r.items || []).length,
                      countries: 2,
                    }}
                  />

                  <CertificationsSection />
                </>
              ) : isTeamPage ? (
                <TeamSection data={siteContent.team} variant="page" />
              ) : isContactPage ? (
                <ContactSection data={siteContent.contact} />
              ) : (
                <>
                  <HeroSection data={siteContent.hero} />
                  <ServicesSection data={siteContent.services} />
                  <ProjectsSection data={siteContent.projects} />
                  <ClientsSection data={siteContent.clients} />

                  <TeamSection
                    data={siteContent.team}
                    backgroundClassName="bg-[radial-gradient(circle_at_18%_20%,rgba(88,138,197,0.12),transparent_30%),linear-gradient(180deg,#07101D_0%,#091423_52%,#050816_100%)]"
                    showList={false}
                    variant="home"
                  />

                  <HomeCtaSection />
                </>
              )}

            </motion.div>
          </AnimatePresence>

          <FooterSection data={siteContent.footer} />

        </MobileShell>
      </div>

      <StickyActions data={siteContent.stickyActions} />
    </div>
  );
}

export default App;
