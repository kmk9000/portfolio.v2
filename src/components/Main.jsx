import Typography from "@mui/material/Typography";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Projects from "./Projects";
import PortfolioCard from "./PortfolioCard";
import { SCROLL_OFFSET_PX } from "../constants/layout";

export default function Main() {
  return (
    <div
      className="main-container relative z-10 min-h-0 w-full flex-1 scroll-auto overflow-auto bg-transparent px-6 py-6 text-slate-100 sm:px-8 sm:py-12 md:px-14 md:py-14 lg:px-20 lg:py-16"
      style={{ scrollPaddingTop: `${SCROLL_OFFSET_PX}px` }}
    >
      <div
        id="about"
        className="mb-2"
        style={{ scrollMarginTop: `${SCROLL_OFFSET_PX}px` }}
      >
        <div className="section-label mb-3">01 — ABOUT</div>
        <Typography
          variant="h4"
          className="mb-6 font-bold text-white"
          sx={{ lineHeight: 1.2 }}
        >
          Who I am
        </Typography>
      </div>
      <div className="pb-6">
        <PortfolioCard>
          <Typography variant="body1" gutterBottom className="text-slate-300">
            I am Kalle Koivuniemi and I am an aspiring front-end developer with
            a knack for crafting responsive and visually appealing web
            applications. With a strong foundation in HTML, CSS, and JavaScript,
            I specialize in creating seamless user experiences that are both
            functional and aesthetically pleasing. My expertise extends to
            modern frameworks like React, allowing me to build dynamic and
            interactive interfaces. I am dedicated to writing clean,
            maintainable code and continuously learning new technologies to stay
            at the forefront of web development trends.
          </Typography>
          <Typography variant="body1" gutterBottom className="text-slate-300">
            This portfolio was made with React, Tailwind, and Material UI, and
            is designed to be responsive and visually appealing. The project
            section includes tabs for different categories of projects, and each
            tab contains a description of the project and a preview image. The
            project section is also designed to be accessible, with proper ARIA
            attributes and keyboard navigation support.
          </Typography>
        </PortfolioCard>
      </div>
      <Projects />
      <div
        id="contact"
        className="mt-10 mb-2"
        style={{ scrollMarginTop: `${SCROLL_OFFSET_PX}px` }}
      >
        <div className="section-label mb-3">03 — CONTACT</div>
        <Typography
          variant="h4"
          className="mb-6 font-bold text-white"
          sx={{ lineHeight: 1.2 }}
        >
          Get in touch
        </Typography>
      </div>
      <div className="pb-10">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <a
            href="mailto:kallekoivuniemi@gmail.com"
            className="block group"
            aria-label="Email link"
          >
            <PortfolioCard>
              <div className="flex items-center gap-3 text-slate-300 group-hover:text-cyan-300 transition-colors duration-200">
                <MdEmail size={20} className="shrink-0 text-cyan-400" />
                <span className="text-sm font-medium">Email me</span>
              </div>
            </PortfolioCard>
          </a>
          <a
            href="https://github.com/kmk9000"
            className="block group"
            aria-label="GitHub link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PortfolioCard>
              <div className="flex items-center gap-3 text-slate-300 group-hover:text-cyan-300 transition-colors duration-200">
                <FaGithub size={18} className="shrink-0 text-slate-300" />
                <span className="text-sm font-medium">GitHub</span>
              </div>
            </PortfolioCard>
          </a>
          <a
            href="https://www.linkedin.com/in/kalle-koivuniemi-946322144"
            className="block group"
            aria-label="LinkedIn link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PortfolioCard>
              <div className="flex items-center gap-3 text-slate-300 group-hover:text-cyan-300 transition-colors duration-200">
                <FaLinkedin size={18} className="shrink-0 text-sky-400" />
                <span className="text-sm font-medium">LinkedIn</span>
              </div>
            </PortfolioCard>
          </a>
        </div>
      </div>
    </div>
  );
}
