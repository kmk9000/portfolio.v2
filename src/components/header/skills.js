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

export const HEADER_SKILLS = [
  { label: "React", icon: FaReact, targetHash: "#projects-react" },
  {
    label: "JavaScript",
    icon: SiJavascript,
    targetHash: "#projects-react",
  },
  {
    label: "TypeScript",
    icon: SiTypescript,
    targetHash: "#projects-react",
  },
  { label: "SQL", icon: FaDatabase, targetHash: "#projects-react" },
  {
    label: "Wordpress",
    icon: SiWordpress,
    targetHash: "#projects-wordpress",
  },
  { label: "PHP", icon: SiPhp, targetHash: "#projects-wordpress" },
  {
    label: "Tailwind",
    icon: SiTailwindcss,
    targetHash: "#projects-react",
  },
  { label: "MUI", icon: SiMui, targetHash: "#projects-react" },
  { label: "Git", icon: FaGitAlt, targetHash: "#projects-react" },
  { label: "HTML", icon: FaHtml5, targetHash: "#projects-css" },
  { label: "CSS", icon: FaCss3Alt, targetHash: "#projects-css" },
];

export const PROJECT_TAB_INDEX_BY_HASH = {
  "#projects-react": 0,
  "#projects-wordpress": 1,
  "#projects-css": 2,
};
