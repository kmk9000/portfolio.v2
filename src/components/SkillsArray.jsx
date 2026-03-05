import CodeIcon from "@mui/icons-material/Code";
import CssIcon from "@mui/icons-material/Css";
import DataObjectIcon from "@mui/icons-material/DataObject";
import HtmlIcon from "@mui/icons-material/Html";
import JavascriptIcon from "@mui/icons-material/Javascript";
import LanguageIcon from "@mui/icons-material/Language";
import SourceIcon from "@mui/icons-material/Source";
import StorageIcon from "@mui/icons-material/Storage";
import TerminalIcon from "@mui/icons-material/Terminal";
import WidgetsIcon from "@mui/icons-material/Widgets";

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
    React: CodeIcon,
    JavaScript: JavascriptIcon,
    TypeScript: DataObjectIcon,
    SQL: StorageIcon,
    Wordpress: LanguageIcon,
    PHP: TerminalIcon,
    Tailwind: CssIcon,
    MUI: WidgetsIcon,
    Git: SourceIcon,
    HTML: HtmlIcon,
    CSS: CssIcon,
  };

  return (
    <div className="mt-4 hidden max-w-sm flex-wrap gap-2 md:flex">
      {skills.map((skill) => {
        const SkillIcon = skillIconByName[skill];

        return (
          <a
            key={skill}
            href={skillTargetByName[skill] || "#projects"}
            onClick={onSkillClick}
            className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200 transition-colors duration-200 hover:bg-cyan-300/20"
          >
            <SkillIcon sx={{ fontSize: 14 }} aria-hidden="true" />
            <span>{skill}</span>
          </a>
        );
      })}
    </div>
  );
}
