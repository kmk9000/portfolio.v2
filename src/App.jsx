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

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top >= 0 && rect.top < 250) {
            setActiveSection(section);
            break;
          }
        }
      }
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
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
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
