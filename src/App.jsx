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

  // effect made with help from gemini 13.12.2025
  useEffect(() => {
    const mainContainer = document.querySelector(".main-container");
    if (!mainContainer) return;

    // Define the trigger line offset (e.g., 25% down from the container's top)
    const TRIGGER_OFFSET = 0.25; // 25%

    const handleScroll = () => {
      const containerTop = mainContainer.getBoundingClientRect().top;
      const containerHeight = mainContainer.clientHeight;
      const triggerLineY = containerTop + containerHeight * TRIGGER_OFFSET;

      let currentSection = "about"; // Default to 'about'

      // 1. **Priority Check for Top of Page (About)**
      if (mainContainer.scrollTop === 0) {
        currentSection = "about";
      } else {
        // 2. Check for other sections by finding the one whose top is ABOVE the trigger line
        const sections = ["about", "projects", "contact"];

        // Find the last section whose top edge has passed the trigger line
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();

            // If the section's top boundary is at or above the trigger line,
            // it is the current active section.
            if (rect.top <= triggerLineY) {
              currentSection = sectionId;
            } else {
              // Since sections are ordered, we can stop checking when one falls below the line
              break;
            }
          }
        }
      }

      // 3. Update state and URL only if the section has actually changed
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
        history.replaceState(null, "", `#${currentSection}`);
      }
    };

    // Attach the scroll listener
    mainContainer.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount to set the initial state

    // Cleanup the scroll listener
    return () => {
      mainContainer.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]); // Depend on activeSection to ensure the comparison is always up-to-date

  return (
    <div className="relative flex flex-col md:flex-row min-h-screen min-w-full">
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
