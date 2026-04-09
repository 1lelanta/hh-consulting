import MobileShell from "./layout/MobileShell";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import TeamSection from "./components/sections/TeamSection";
import ContactSection from "./components/sections/ContactSection";
import StickyActions from "./components/sections/StickyActions";
import HeaderNav from "./layout/HeaderNav";
import { siteContent } from "./data/siteContent";

function App() {
  return (
    <div className="relative min-h-screen bg-brand-gray050 px-0 pb-24 text-brand-navy950 lg:pb-20">
      <HeaderNav />
      <div className="pointer-events-none fixed inset-0 opacity-40 [background:radial-gradient(circle_at_100%_0%,rgba(190,154,90,0.20),transparent_35%),radial-gradient(circle_at_0%_10%,rgba(22,59,99,0.14),transparent_30%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-10 [background-image:radial-gradient(circle_at_20%_20%,#000_0.8px,transparent_0.8px)] [background-size:4px_4px]" />

      <MobileShell>
        <section>
          <HeroSection data={siteContent.hero} />
        </section>
        <AboutSection data={siteContent.about} className="lg:mt-8" />
        <ServicesSection data={siteContent.services} className="lg:mt-8" />
        <ProjectsSection data={siteContent.projects} className="lg:mt-8" />
        <TeamSection data={siteContent.team} className="lg:mt-8" />
        <ContactSection data={siteContent.contact} className="lg:mt-8" />
      </MobileShell>

      <StickyActions data={siteContent.stickyActions} />
    </div>
  );
}

export default App;
