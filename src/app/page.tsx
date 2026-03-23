import { AboutSection } from "@/components/portfolio/AboutSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { SelectedWorkSection } from "@/components/portfolio/SelectedWorkSection";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { StackSection } from "@/components/portfolio/StackSection";
import { portfolioData } from "@/content/portfolio";

export default function Home() {
  return (
    <main className="pb-10">
      <SiteHeader
        name={portfolioData.person.name}
        navigation={portfolioData.navigation}
      />
      <HeroSection person={portfolioData.person} hero={portfolioData.hero} />
      <AboutSection about={portfolioData.about} />
      <SelectedWorkSection projects={portfolioData.projects} />
      <StackSection stackGroups={portfolioData.stackGroups} />
      <ContactSection
        person={portfolioData.person}
        contact={portfolioData.contact}
      />
    </main>
  );
}
