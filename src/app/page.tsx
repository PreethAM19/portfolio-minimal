import { AmbientBackground } from "@/components/portfolio/AmbientBackground";
import { CertificationsSection } from "@/components/portfolio/CertificationsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { StackSection } from "@/components/portfolio/StackSection";
import { portfolioData } from "@/content/portfolio";
import { PageReveal } from "@/components/ui/motion";

export default function Home() {
  return (
    <>
      <PageReveal />
      <AmbientBackground />

      <main className="relative pb-10">
        <SiteHeader
          name={portfolioData.person.name}
          navigation={portfolioData.navigation}
        />
        <HeroSection person={portfolioData.person} hero={portfolioData.hero} />
        <StackSection stack={portfolioData.stack} />
        <ExperienceSection experience={portfolioData.experience} />
        <ProjectsSection projects={portfolioData.projects} />
        <EducationSection education={portfolioData.education} />
        <CertificationsSection certifications={portfolioData.certifications} />
        <ContactSection contact={portfolioData.contact} />
      </main>
    </>
  );
}
