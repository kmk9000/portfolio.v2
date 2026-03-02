export default function SkillsArray({ onSkillClick }) {
  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "SQL",
    "Wordpress",
    "PHP",
    "Tailwind",
    "MUI",
    "Git",
    "HTML",
    "CSS",
  ];

  const skillTargetByName = {
    React: "#projects-react",
    JavaScript: "#projects-react",
    MUI: "#projects-react",
    Wordpress: "#projects-wordpress",
    PHP: "#projects-wordpress",
    HTML: "#projects-css",
    CSS: "#projects-css",
  };

  return (
    <div className="mt-4 hidden max-w-sm flex-wrap gap-2 md:flex">
      {skills.map((skill) => (
        <a
          key={skill}
          href={skillTargetByName[skill] || "#projects"}
          onClick={onSkillClick}
          className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200 transition-colors duration-200 hover:bg-cyan-300/20"
        >
          {skill}
        </a>
      ))}
    </div>
  );
}
