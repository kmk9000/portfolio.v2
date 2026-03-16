import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import ScrollToTopButton from "./components/ScrollTopButton";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.js";

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const mainContainer = document.querySelector(".main-container");
    if (!mainContainer) return;

    const TRIGGER_OFFSET = 0.25;
    const BOTTOM_THRESHOLD = 2;

    const handleScroll = () => {
      const containerTop = mainContainer.getBoundingClientRect().top;
      const containerHeight = mainContainer.clientHeight;
      const triggerLineY = containerTop + containerHeight * TRIGGER_OFFSET;
      const isAtBottom =
        mainContainer.scrollTop + containerHeight >=
        mainContainer.scrollHeight - BOTTOM_THRESHOLD;

      let currentSection = "about";

      if (mainContainer.scrollTop === 0) {
        currentSection = "about";
      } else if (isAtBottom) {
        currentSection = "contact";
      } else {
        const sections = ["about", "projects", "contact"];

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();

            if (rect.top <= triggerLineY) {
              currentSection = sectionId;
            } else {
              break;
            }
          }
        }
      }

      setActiveSection((previousSection) =>
        previousSection !== currentSection ? currentSection : previousSection,
      );
    };

    mainContainer.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      mainContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="relative flex flex-col md:flex-row min-h-screen min-w-full overflow-hidden bg-[#020817]">
        <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_90%_60%_at_-5%_0%,rgba(56,189,248,0.22),transparent),radial-gradient(ellipse_60%_50%_at_105%_10%,rgba(139,92,246,0.2),transparent),radial-gradient(ellipse_50%_40%_at_50%_110%,rgba(6,182,212,0.14),transparent),radial-gradient(ellipse_30%_30%_at_80%_60%,rgba(59,130,246,0.1),transparent)]" />
        <div className="pointer-events-none fixed inset-0 z-0 dot-grid-bg" />
        <div
          className="pointer-events-none fixed inset-0 z-0 transition duration-300"
          style={{
            background: `radial-gradient(380px at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.14), transparent 72%)`,
          }}
        />
        <Header
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <Main />
        <ScrollToTopButton />
      </div>
    </ThemeProvider>
  );
}
