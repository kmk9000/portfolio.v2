import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import SkillsArray from "./SkillsArray";
import TitleAnimation from "./TitleAnimation";
import MobileMenu from "./MobileMenu";
import { NAV_ITEMS } from "../constants/navigation";
import {
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMui,
  SiPhp,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";

export default function Header({ activeSection, setActiveSection }) {
  const [mobileSkillsOpen, setMobileSkillsOpen] = useState(false);

  const mobileAboutSummaryClass =
    activeSection === "about"
      ? "max-h-24 opacity-100"
      : "max-h-0 opacity-0 pt-0 pointer-events-none";

  const skills = [
    { label: "React", icon: FaReact, targetHash: "#projects-react" },
    {
      label: "JavaScript",
      icon: SiJavascript,
      targetHash: "#projects-react",
    },
    {
      label: "TypeScript",
      icon: SiTypescript,
      targetHash: "#projects-react",
    },
    { label: "SQL", icon: FaDatabase, targetHash: "#projects-react" },
    {
      label: "Wordpress",
      icon: SiWordpress,
      targetHash: "#projects-wordpress",
    },
    { label: "PHP", icon: SiPhp, targetHash: "#projects-wordpress" },
    {
      label: "Tailwind",
      icon: SiTailwindcss,
      targetHash: "#projects-react",
    },
    { label: "MUI", icon: SiMui, targetHash: "#projects-react" },
    { label: "Git", icon: FaGitAlt, targetHash: "#projects-react" },
    { label: "HTML", icon: FaHtml5, targetHash: "#projects-css" },
    { label: "CSS", icon: FaCss3Alt, targetHash: "#projects-css" },
  ];
  const mobilePreviewSkills = skills.slice(0, 3);
  const remainingMobileSkillsCount = Math.max(
    0,
    skills.length - mobilePreviewSkills.length,
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

    const projectTabIndexByHash = {
      "#projects-react": 0,
      "#projects-wordpress": 1,
      "#projects-css": 2,
    };
    const tabIndex = projectTabIndexByHash[targetHash] ?? 0;
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

  const navLinkClass =
    "group flex items-center gap-4 text-slate-400 transition-all duration-300 hover:text-cyan-300";
  const navLineClass = "h-px origin-left transform transition-all duration-300";
  const navLineActiveClass = "w-20 bg-cyan-400";
  const navLineInactiveClass =
    "w-10 bg-slate-600 group-hover:w-16 group-hover:bg-cyan-400/60";
  const navLabelClass =
    "flex items-center text-xs font-semibold tracking-[0.15em] uppercase py-1";

  return (
    <div
      className="sidebar-gradient-border sticky top-0 relative z-10 flex w-full flex-col justify-between border-b border-white/8 bg-slate-950/70 px-4 py-3 text-white backdrop-blur-sm md:h-screen md:w-1/4 md:overflow-hidden md:border-b-0 md:p-8 lg:w-[30%] lg:p-10 xl:w-1/4"
    >
      <header className="relative">
        <div className="md:hidden">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="section-label mb-1">PORTFOLIO</div>
              <div className="flex items-start gap-8">
                <button
                  type="button"
                  onClick={() => {
                    handleClick("about");
                  }}
                  className="text-left"
                >
                  <h1 className="hero-name-gradient truncate bg-clip-text text-lg font-bold tracking-tight text-transparent sm:text-xl">
                    /Kalle Koivuniemi/
                  </h1>
                  <h2 className="mt-1 text-xs font-medium tracking-wide text-sky-400/80">
                    Front End Developer
                  </h2>
                </button>

              </div>
            </div>
            <MobileMenu
              navItems={NAV_ITEMS}
              onItemClick={handleClick}
              activeSection={activeSection}
            />
          </div>
          <div
            className={`flex flex-wrap items-start gap-4 overflow-hidden transition-all duration-300 ${mobileAboutSummaryClass}`}
          >
            <div className="flex-1 text-sm leading-relaxed text-slate-400">
              Responsive, polished, and accessible web experiences.
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Skills
              </span>
              <div className="flex flex-row flex-wrap items-center gap-1.5">
                {mobilePreviewSkills.map((skill) => {
                  const SkillIcon = skill.icon;

                  return (
                    <button
                      type="button"
                      key={skill.label}
                      onClick={(event) => {
                        handleMobileSkillClick(event, skill.targetHash);
                      }}
                      aria-label={`${skill.label} projects`}
                      className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-600/50 bg-slate-800/60 text-slate-300 transition-all duration-200 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
                    >
                      <SkillIcon size={12} aria-hidden="true" />
                    </button>
                  );
                })}
                {remainingMobileSkillsCount > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      setMobileSkillsOpen(true);
                    }}
                    aria-label="Show all skills"
                    className="inline-flex h-6 items-center justify-center rounded-full border border-slate-600/50 bg-slate-800/60 px-1.5 text-[0.6rem] font-semibold text-slate-300 transition-all duration-200 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
                  >
                    +{remainingMobileSkillsCount}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="section-label mb-3">PORTFOLIO</div>
          <Typography
            variant="h4"
            component="div"
            gutterBottom
            className="font-semibold tracking-tight"
          >
            <button
              type="button"
              onClick={() => {
                handleClick("about");
              }}
              className="text-left"
            >
              <TitleAnimation
                text="/Kalle Koivuniemi/"
                duration={1500}
                variant="h1"
                className="hero-name-gradient bg-clip-text text-transparent font-bold tracking-tight"
                showCursor
              />
            </button>
          </Typography>
          <TitleAnimation
            text="Front End Developer"
            variant="h4"
            duration={2000}
            className="font-medium tracking-wide text-sky-400/80"
          />

          <TitleAnimation
            text="Crafting responsive, polished, and accessible web experiences."
            duration={2500}
            variant="body2"
            className="mt-3 max-w-xs text-slate-400 leading-relaxed"
          />
          <SkillsArray onSkillClick={handleSkillClick} />
        </div>

        <nav className="mt-10 hidden md:block">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => {
                    handleClick(item.id);
                  }}
                  className={`${navLinkClass} ${activeSection === item.id ? "text-cyan-300" : ""}`}
                >
                  <div
                    className={`${navLineClass} ${
                      activeSection === item.id
                        ? navLineActiveClass
                        : navLineInactiveClass
                    }`}
                  />
                  <div className={navLabelClass}>{item.label}</div>
                </button>
              </li>
            ))}
          </ul>
        </nav>
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
      <Drawer
        anchor="bottom"
        open={mobileSkillsOpen}
        onClose={() => {
          setMobileSkillsOpen(false);
        }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "rgba(2, 6, 23, 0.92)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderTopLeftRadius: "0.9rem",
            borderTopRightRadius: "0.9rem",
            color: "#e2e8f0",
          },
        }}
      >
        <div className="px-4 pb-5 pt-3">
          <div className="mb-3 flex items-center justify-between">
            <div className="section-label">SKILLS</div>
            <button
              type="button"
              onClick={() => {
                setMobileSkillsOpen(false);
              }}
              className="text-xs font-medium text-slate-400 transition-colors hover:text-cyan-300"
            >
              Close
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {skills.map((skill) => {
              const SkillIcon = skill.icon;

              return (
                <button
                  type="button"
                  key={skill.label}
                  onClick={(event) => {
                    handleMobileSkillClick(event, skill.targetHash);
                  }}
                  className="inline-flex h-14 flex-col items-center justify-center rounded-xl border border-slate-600/50 bg-slate-800/60 px-1 text-slate-300 transition-all duration-200 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
                >
                  <SkillIcon size={14} aria-hidden="true" />
                  <span className="mt-1 truncate text-[0.6rem] font-semibold leading-none">
                    {skill.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </Drawer>
    </div>
  );
}
