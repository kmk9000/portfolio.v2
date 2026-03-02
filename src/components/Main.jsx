import Typography from "@mui/material/Typography";
import Projects from "./Projects";
import PortfolioCard from "./PortfolioCard";

export default function Main() {
  return (
    <div
      className="main-container relative z-10 h-screen w-full scroll-auto overflow-auto border-white/10 bg-slate-800/60 px-6 py-8 text-slate-100 sm:px-8 sm:py-8 md:px-12 md:py-10 lg:px-16 lg:py-12 xl:w-3/4"
      style={{ scrollPaddingTop: "150px" }}
    >
      <Typography
        id="about"
        variant="h5"
        sx={{ mx: "auto", scrollMarginTop: "150px" }}
        gutterBottom
      >
        About
      </Typography>
      <div className="py-3">
        <PortfolioCard>
          <Typography variant="body1" gutterBottom>
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
          <Typography variant="body1" gutterBottom>
            This porfolio was made with React and Material UI, and is designed
            to be responsive and visually appealing. The project section
            includes tabs for different categories of projects, and each tab
            contains a description of the project and a preview image. The
            project section is also designed to be accessible, with proper ARIA
            attributes and keyboard navigation support.
          </Typography>
          <Typography variant="body1" gutterBottom>
            In my projects, I focus on accessibility, performance, and
            cross-browser compatibility to ensure that my applications are
            usable by a wide audience. I enjoy collaborating with designers and
            back-end developers to bring ideas to life and create cohesive
            digital products. Whether it's building a simple landing page or a
            complex single-page application, I am committed to delivering
            high-quality work that meets the needs of users and clients alike.
          </Typography>
        </PortfolioCard>
      </div>
      <Projects />
      <Typography id="contact" variant="h5" gutterBottom>
        Contact
      </Typography>
      <div className="py-3">
        <PortfolioCard>
          <Typography variant="body1" gutterBottom sx={{ color: "#cbd5e1" }}>
            My email address is{" "}
            <a
              href="mailto:kallekoivuniemi@gmail.com"
              className="text-cyan-300"
            >
              kallekoivuniemi@gmail.com
            </a>
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: "#cbd5e1" }}>
            Here's my{" "}
            <a
              href="https://github.com/kmk9000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300"
            >
              github profile
            </a>
            , where you can find more of my projects and code samples.
          </Typography>
        </PortfolioCard>
      </div>
    </div>
  );
}
