import MobileShell from "./layout/MobileShell";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import TeamSection from "./components/sections/TeamSection";
import ContactSection from "./components/sections/ContactSection";
import StickyActions from "./components/sections/StickyActions";
import { siteContent } from "./data/siteContent";

function App() {
  return (
    <div className="relative min-h-screen bg-brand-gray050 px-0 pb-24 text-brand-navy950 lg:pb-20">
      <div className="pointer-events-none fixed inset-0 opacity-40 [background:radial-gradient(circle_at_100%_0%,rgba(190,154,90,0.20),transparent_35%),radial-gradient(circle_at_0%_10%,rgba(22,59,99,0.14),transparent_30%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-10 [background-image:radial-gradient(circle_at_20%_20%,#000_0.8px,transparent_0.8px)] [background-size:4px_4px]" />

      <MobileShell>
        <header className="sticky top-0 z-30 hidden items-center justify-between rounded-2xl border border-brand-gray200/80 bg-white/75 px-7 py-4 backdrop-blur lg:mt-6 lg:flex xl:px-8 xl:py-5">
          <div>
            <p className="m-0 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold500">HH Consulting</p>
            <p className="m-0 mt-1 font-serif text-xl text-brand-navy950">Architecture & Engineering</p>
          </div>
          <nav className="flex items-center gap-6 text-sm font-semibold text-brand-gray500">
            <a href="#projects" className="hover:text-brand-navy900">Projects</a>
            <a href="#contact" className="hover:text-brand-navy900">Contact</a>
          </nav>
        </header>

        <section className="lg:mt-8 lg:grid lg:grid-cols-12 lg:gap-7 xl:gap-8">
          <div className="lg:col-span-8">
            <HeroSection data={siteContent.hero} />
          </div>
          <div className="lg:col-span-4">
            <AboutSection data={siteContent.about} className="lg:mt-0 lg:h-full" />
          </div>
        </section>

        <ServicesSection data={siteContent.services} className="lg:mt-8" />

        <section className="lg:mt-1 lg:grid lg:grid-cols-12 lg:gap-7 xl:gap-8">
          <div className="lg:col-span-8">
            <ProjectsSection data={siteContent.projects} className="lg:mt-8" />
          </div>
          <div className="lg:col-span-4 lg:flex lg:flex-col lg:gap-7">
            <TeamSection data={siteContent.team} className="lg:mt-8" />
            <ContactSection data={siteContent.contact} className="lg:mt-0" />
          </div>
        </section>
      </MobileShell>

      <StickyActions data={siteContent.stickyActions} />
    </div>
  );
}

export default App;
