

import { Story } from "../components/about/Story.jsx";
import { SkillsSection } from "../components/about/Skills.jsx";
import { ProfileCard } from "../components/about/ProfileCard.jsx";




// ─── About Page (composed) ────────────────────────────────────────────────────
 const About = () => {
  return (
    <>
      <section id="about" className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-16 py-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-14 lg:gap-20">
          <ProfileCard />
          <Story />
        </div>
      </section>
      <SkillsSection />
    </>
  );
}

export default About