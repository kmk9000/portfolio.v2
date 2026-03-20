import Typography from "@mui/material/Typography";
import SkillsArray from "../SkillsArray";
import TitleAnimation from "../TitleAnimation";

export default function DesktopHeader({
  activeSection,
  navItems,
  title,
  name,
  role,
  summary,
  onSectionClick,
  onSkillClick,
}) {
  const navLinkClass =
    "group flex items-center gap-4 text-slate-400 transition-all duration-300 hover:text-cyan-300";
  const navLineClass =
    "h-px origin-left transform transition-all duration-300";
  const navLineActiveClass = "w-20 bg-cyan-400";
  const navLineInactiveClass =
    "w-10 bg-slate-600 group-hover:w-16 group-hover:bg-cyan-400/60";
  const navLabelClass =
    "flex items-center text-xs font-semibold tracking-[0.15em] uppercase py-1";

  return (
    <>
      <div className="hidden md:block">
        <div className="section-label mb-3">{title}</div>

          <button
            type="button"
            onClick={() => {
              onSectionClick("about");
            }}
            className="text-left"
          >
            <TitleAnimation
              text={name}
              duration={1500}
              variant="h1"
              className="hero-name-gradient bg-clip-text text-transparent font-bold tracking-tight"
              showCursor
            />
          </button>

        <TitleAnimation
          text={role}
          variant="h4"
          duration={2000}
          className="font-medium tracking-wide text-sky-400/80"
        />

        <TitleAnimation
          text={summary}
          duration={2500}
          variant="body2"
          className="mt-3 max-w-xs text-slate-400 leading-relaxed"
        />
        <SkillsArray onSkillClick={onSkillClick} />
      </div>

      <nav className="mt-10 hidden md:block">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => {
                  onSectionClick(item.id);
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
    </>
  );
}
