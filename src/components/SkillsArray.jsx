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

  const skillIconByName = {
    React: FaReact,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    SQL: FaDatabase,
    Wordpress: SiWordpress,
    PHP: SiPhp,
    Tailwind: SiTailwindcss,
    MUI: SiMui,
    Git: FaGitAlt,
    HTML: FaHtml5,
    CSS: FaCss3Alt,
  };

  return (
    <div className="mt-4 hidden max-w-sm flex-wrap gap-2 md:flex">
      {skills.map((skill) => {
        const SkillIcon = skillIconByName[skill];
        const targetHash = skillTargetByName[skill] || "#projects-react";

        return (
          <button
            type="button"
            key={skill}
            onClick={(event) => {
              if (onSkillClick) {
                onSkillClick(event, targetHash);
              }
            }}
            className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200 transition-colors duration-200 hover:bg-cyan-300/20"
          >
            <SkillIcon size={14} aria-hidden="true" />
            <span>{skill}</span>
          </button>
        );
      })}
    </div>
  );
}
