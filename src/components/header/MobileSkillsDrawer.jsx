import Drawer from "@mui/material/Drawer";

export default function MobileSkillsDrawer({
  open,
  onClose,
  skills,
  onSkillClick,
}) {
  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
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
            onClick={onClose}
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
                  onSkillClick(event, skill.targetHash);
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
  );
}
