import Typography from "@mui/material/Typography";
import SkillsArray from "./SkillsArray";
import TitleAnimation from "./TitleAnimation";
import MobileMenu from "./MobileMenu";
import { NAV_ITEMS } from "../constants/navigation";
import { SCROLL_OFFSET_PX } from "../constants/layout";

export default function Header({ activeSection, setActiveSection }) {
  const mobileVisibilityClass =
    activeSection === "about"
      ? "flex max-h-screen translate-y-0 opacity-100 p-6 border-b border-white/8"
      : "flex max-h-0 -translate-y-4 opacity-0 pointer-events-none border-0 p-0 md:pointer-events-auto";

  const scrollMainContainerToId = (id) => {
    const mainContainer = document.querySelector(".main-container");
    const element = document.getElementById(id);
    if (!element) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (mainContainer) {
      const containerRect = mainContainer.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      const nextTop =
        mainContainer.scrollTop +
        (elementRect.top - containerRect.top) -
        SCROLL_OFFSET_PX;

      mainContainer.scrollTo({
        top: Math.max(0, nextTop),
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
      return;
    }

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

    const targetId = (targetHash || "#projects").replace(/^#/, "");
    const scrollId =
      targetId === "projects-react" ||
      targetId === "projects-wordpress" ||
      targetId === "projects-css"
        ? targetId
        : "projects";

    // Wait for React + MUI Tabs to commit layout before measuring/scrolling.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollMainContainerToId(scrollId);
      });
    });
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
      className={`sidebar-gradient-border relative z-10 ${mobileVisibilityClass} w-full flex-col justify-between overflow-hidden bg-slate-950/70 text-white backdrop-blur-sm transition-all duration-500 ease-in-out md:sticky md:top-0 md:flex md:h-screen md:max-h-none md:w-1/4 md:translate-y-0 md:opacity-100 md:p-8 lg:w-[30%] lg:p-10 xl:w-1/4`}
    >
      <header className="relative">
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
              duration={2500}
              variant="h2"
              className="hero-name-gradient bg-clip-text text-transparent font-bold tracking-tight"
              showCursor
            />
          </button>
        </Typography>
        <TitleAnimation
          text="Front End Developer"
          duration={3000}
          className="font-medium tracking-wide text-sky-400/80"
        />

        <TitleAnimation
          text="Crafting responsive, polished, and accessible web experiences."
          duration={3500}
          variant="body2"
          className="mt-3 max-w-xs text-slate-400 leading-relaxed"
        />
        <SkillsArray onSkillClick={handleSkillClick} />
        <MobileMenu navItems={NAV_ITEMS} onItemClick={handleClick} />

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
    </div>
  );
}
