import Typography from "@mui/material/Typography";
import SkillsArray from "./SkillsArray";
import TitleAnimation from "./TitleAnimation";
import MobileMenu from "./MobileMenu";
import { NAV_ITEMS } from "../constants/navigation";

export default function Header({ activeSection, setActiveSection }) {
  const mobileVisibilityClass =
    activeSection === "about"
      ? "flex max-h-screen translate-y-0 opacity-100 p-6 border-b border-white/10"
      : "flex max-h-0 -translate-y-4 opacity-0 pointer-events-none border-0 p-0 md:pointer-events-auto";

  const handleClick = (section) => {
    setActiveSection(section);
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleSkillClick = (event, targetHash) => {
    event.preventDefault();

    setActiveSection("projects");
    const mainContainer = document.querySelector(".main-container");
    const projectsElement = document.getElementById("projects");
    if (mainContainer && projectsElement) {
      const containerRect = mainContainer.getBoundingClientRect();
      const projectsRect = projectsElement.getBoundingClientRect();
      const nextTop =
        mainContainer.scrollTop + (projectsRect.top - containerRect.top);
      mainContainer.scrollTo({
        top: Math.max(0, nextTop),
        behavior: "smooth",
      });
    } else if (projectsElement) {
      projectsElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    const projectTabIndexByHash = {
      "#projects-react": 0,
      "#projects-wordpress": 1,
      "#projects-css": 2,
    };
    const tabIndex = projectTabIndexByHash[targetHash] ?? 0;
    window.dispatchEvent(
      new CustomEvent("projects:tabchange", { detail: { tabIndex } }),
    );
  };

  const navLinkClass =
    "group flex items-center gap-3 text-slate-200 transition-colors duration-300 hover:text-cyan-300";
  const navLineClass =
    "h-[2px] origin-left transform bg-cyan-300 transition-all duration-300";
  const navLineActiveClass = "w-24";
  const navLineInactiveClass = "w-16 group-hover:w-20";
  const navLabelClass = "flex items-center py-1";

  return (
    <div
      className={`relative z-10 ${mobileVisibilityClass} w-full flex-col justify-between overflow-hidden bg-slate-900/80 text-white transition-all duration-500 ease-in-out md:sticky md:top-0 md:flex md:h-screen md:max-h-none md:w-1/4 md:translate-y-0 md:opacity-100 md:border-r md:border-white/10 md:p-8 lg:w-1/3 lg:p-10 xl:w-1/4`}
    >
      <header className="relative">
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
              className="bg-linear-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent"
            />
          </button>
        </Typography>
        <TitleAnimation
          text="Front End Developer"
          duration={3000}
          className="text-slate-100"
        />

        <TitleAnimation
          text="Crafting responsive, polished, and accessible web experiences."
          duration={3500}
          variant="body2"
          className="mt-2 max-w-xs text-slate-300"
        />
        <SkillsArray onSkillClick={handleSkillClick} />
        <MobileMenu navItems={NAV_ITEMS} onItemClick={handleClick} />

        <nav className="mt-8 hidden md:block">
          <ul className="space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => {
                    handleClick(item.id);
                  }}
                  className={navLinkClass}
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
      <ul className="mt-auto hidden p-2 md:block">
        <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
          Available for freelance and collaboration.
        </li>
      </ul>
    </div>
  );
}
