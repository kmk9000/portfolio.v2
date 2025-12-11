import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
// import theme from "./theme.js";

function App() {
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
    const handleScroll = () => {
      const mainContainer = document.querySelector(".main-container");
      if (!mainContainer) return;

      const sections = ["about", "projects", "contact"];
      const containerRect = mainContainer.getBoundingClientRect();

      // Check if we're near the bottom of the scroll
      const isNearBottom =
        mainContainer.scrollTop + mainContainer.clientHeight >=
        mainContainer.scrollHeight - 50; // 50px threshold

      // If near bottom, activate the last section
      if (isNearBottom) {
        setActiveSection("contact");
        return;
      }

      // Otherwise, use the visibility calculation
      let currentSection = "about";
      let maxVisibility = 0;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();

          // Calculate how much of the section is visible relative to container
          const visibleTop = Math.max(rect.top, containerRect.top);
          const visibleBottom = Math.min(rect.bottom, containerRect.bottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);

          if (visibleHeight > maxVisibility) {
            maxVisibility = visibleHeight;
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    const mainContainer = document.querySelector(".main-container");
    if (mainContainer) {
      mainContainer.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (mainContainer) {
        mainContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="relative flex min-h-screen min-w-full">
      <div
        className="pointer-events-none fixed inset-0 z-0 transition duration-300"
        style={{
          background: `radial-gradient(200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Main />
    </div>
  );
}

export default App;
