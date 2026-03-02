import Typography from "@mui/material/Typography";
import SkillsArray from "./SkillsArray";
import TitleAnimation from "./TitleAnimation";
import MobileMenu from "./MobileMenu";

export default function Header({ activeSection, setActiveSection }) {
  const titleText = "Front End Developer";
  const mobileVisibilityClass =
    activeSection === "about" ? "flex" : "hidden md:flex";

  const handleClick = (section) => {
    setActiveSection(section);
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];
  const navLinkClass =
    "group flex items-center gap-3 text-slate-200 transition-colors duration-300 hover:text-cyan-300";
  const navLineClass =
    "h-[2px] origin-left transform bg-cyan-300 transition-all duration-300";
  const navLineActiveClass = "w-24";
  const navLineInactiveClass = "w-16 group-hover:w-20";
  const navLabelClass = "flex items-center py-1";

  return (
    <div
      className={`relative z-10 ${mobileVisibilityClass} w-full flex-col justify-between border-r border-white/10 bg-slate-900/80 p-6 text-white md:sticky md:top-0 md:h-screen md:w-1/4 md:p-8 lg:w-1/3 lg:p-10 xl:w-1/4`}
    >
      <header className="relative">
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          className="font-semibold tracking-tight"
        >
          <a
            href="#about"
            className="bg-linear-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent"
          >
            {"/"}Kalle Koivuniemi{"/"}
          </a>
        </Typography>
        <TitleAnimation
          text={titleText}
          duration={3000}
          className="text-slate-100"
        />

        <TitleAnimation
          text="Crafting responsive, polished, and accessible web experiences."
          duration={3500}
          variant="body2"
          className="mt-2 max-w-xs text-slate-300"
        />
        <SkillsArray onSkillClick={() => handleClick("projects")} />
        <MobileMenu navItems={navItems} onItemClick={handleClick} />

        <nav className="mt-8 hidden md:block">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => handleClick(item.id)}
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
                </a>
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
