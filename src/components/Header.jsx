import Typography from "@mui/material/Typography";
import SkillsArray from "./SkillsArray";
import TitleAnimation from "./TitleAnimation";
import MobileMenu from "./MobileMenu";
import { NAV_ITEMS } from "../constants/navigation";

export default function Header({ activeSection, setActiveSection }) {
  const mobileAboutSummaryClass =
    activeSection === "about"
      ? "max-h-24 opacity-100 pt-3"
      : "max-h-0 opacity-0 pt-0 pointer-events-none";

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
                <p className="mt-1 text-xs font-medium tracking-wide text-sky-400/80">
                  Front End Developer
                </p>
              </button>
            </div>
            <MobileMenu
              navItems={NAV_ITEMS}
              onItemClick={handleClick}
              activeSection={activeSection}
            />
          </div>
          <div
            className={`max-w-xs overflow-hidden text-sm leading-relaxed text-slate-400 transition-all duration-300 ${mobileAboutSummaryClass}`}
          >
            Responsive, polished, and accessible web experiences.
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
    </div>
  );
}
