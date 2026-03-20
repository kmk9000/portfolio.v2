import { useState } from "react";
import { NAV_ITEMS } from "../constants/navigation";
import DesktopHeader from "./header/DesktopHeader";
import MobileHeader from "./header/MobileHeader";
import MobileSkillsDrawer from "./header/MobileSkillsDrawer";
import { HEADER_SKILLS, PROJECT_TAB_INDEX_BY_HASH } from "./header/skills";

const DEFAULT_HEADER_CONTENT = {
  title: "Portfolio",
  name: "/Kalle Koivuniemi/",
  role: "Front End Developer",
  summary: "Responsive, polished, and accessible web experiences.",
};

export default function Header({
  activeSection,
  setActiveSection,
  headerContent = DEFAULT_HEADER_CONTENT,
}) {
  const [mobileSkillsOpen, setMobileSkillsOpen] = useState(false);

  const mobileAboutSummaryClass =
    activeSection === "about"
      ? "max-h-24 opacity-100"
      : "max-h-0 opacity-0 pt-0 pointer-events-none";

  const mobilePreviewSkills = HEADER_SKILLS.slice(0, 3);
  const remainingMobileSkillsCount = Math.max(
    0,
    HEADER_SKILLS.length - mobilePreviewSkills.length,
  );

  const scrollMainContainerToId = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    element.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const handleClick = (section) => {
    setActiveSection(section);
    scrollMainContainerToId(section);
  };

  const handleSkillClick = (event, targetHash) => {
    event.preventDefault();

    setActiveSection("projects");

    const tabIndex = PROJECT_TAB_INDEX_BY_HASH[targetHash] ?? 0;
    window.dispatchEvent(
      new CustomEvent("projects:tabchange", { detail: { tabIndex } }),
    );

    // Wait for React + MUI Tabs to commit layout before measuring/scrolling.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollMainContainerToId("projects");
      });
    });
  };

  const handleMobileSkillClick = (event, targetHash) => {
    setMobileSkillsOpen(false);
    handleSkillClick(event, targetHash);
  };

  return (
    <div
      className="sidebar-gradient-border sticky top-0 relative z-10 flex w-full flex-col justify-between border-b border-white/8 bg-slate-950/60 px-4 py-3 text-white backdrop-blur-sm md:h-screen md:w-1/4 md:overflow-hidden md:border-b-0 md:p-8 lg:w-[30%] lg:p-10 xl:w-1/4"
    >
      <header className="relative">
        <MobileHeader
          activeSection={activeSection}
          navItems={NAV_ITEMS}
          title={headerContent.title}
          name={headerContent.name}
          role={headerContent.role}
          summary={headerContent.summary}
          mobileAboutSummaryClass={mobileAboutSummaryClass}
          mobilePreviewSkills={mobilePreviewSkills}
          remainingMobileSkillsCount={remainingMobileSkillsCount}
          onSectionClick={handleClick}
          onMobileSkillClick={handleMobileSkillClick}
          onOpenSkills={() => {
            setMobileSkillsOpen(true);
          }}
        />

        <DesktopHeader
          activeSection={activeSection}
          navItems={NAV_ITEMS}
          title={headerContent.title}
          name={headerContent.name}
          role={headerContent.role}
          summary={headerContent.summary}
          onSectionClick={handleClick}
          onSkillClick={handleSkillClick}
        />
      </header>
      <div className="mt-auto hidden md:block">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for freelance &amp; collaboration
        </div>
      </div>
      <MobileSkillsDrawer
        open={mobileSkillsOpen}
        onClose={() => {
          setMobileSkillsOpen(false);
        }}
        skills={HEADER_SKILLS}
        onSkillClick={handleMobileSkillClick}
      />
    </div>
  );
}
