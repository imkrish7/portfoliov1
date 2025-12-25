import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsGrid from "@/components/SkillsGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ExperienceSection />
        <ProjectsSection />
        <SkillsGrid />
      </div>
    </>
  );
}
