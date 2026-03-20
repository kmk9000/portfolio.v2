import MobileMenu from "../MobileMenu";
import TitleAnimation from "../TitleAnimation";

export default function MobileHeader({
  activeSection,
  navItems,
  title,
  name,
  role,
  summary,
  mobileAboutSummaryClass,
  mobilePreviewSkills,
  remainingMobileSkillsCount,
  onSectionClick,
  onMobileSkillClick,
  onOpenSkills,
}) {
  return (
    <div className="md:hidden">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="section-label mb-1">{title}</div>
          <div className="flex items-start gap-8">
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
                variant="h2"
                className="hero-name-gradient bg-clip-text text-transparent font-bold tracking-tight"
                showCursor
              />
              <TitleAnimation
                text={role}
                variant="h5"
                duration={2000}
                className="font-medium tracking-wide text-sky-400/80"
              />
              {/* <h1 className="hero-name-gradient truncate bg-clip-text text-lg font-bold tracking-tight text-transparent sm:text-xl">
                {name}
              </h1>
              <h2 className="mt-1 text-xs font-medium tracking-wide text-sky-400/80">
                {role}
              </h2> */}
            </button>
          </div>
        </div>
        <MobileMenu
          navItems={navItems}
          onItemClick={onSectionClick}
          activeSection={activeSection}
        />
      </div>
      <div
        className={`flex flex-wrap items-start gap-4 overflow-hidden transition-all duration-300 ${mobileAboutSummaryClass}`}
      >
        <div className="flex-1 text-sm leading-relaxed text-slate-400">
          {summary}
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
                    onMobileSkillClick(event, skill.targetHash);
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
                onClick={onOpenSkills}
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
  );
}
