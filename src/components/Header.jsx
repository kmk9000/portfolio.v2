import Typography from "@mui/material/Typography";

export default function Header({ activeSection, setActiveSection }) {
  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="flex flex-col bg-blue-950 text-white p-12 md:p-6 lg:p-12 w-full md:w-1/4 lg:w-1/3 xl:w-1/4 sticky top-0 z-1 justify-between">
      {/* bg-blue-600 */}
      <header>
        <Typography variant="h4" component="div" gutterBottom>
          {/* <div className="font-bold text-3xl pb-4"> */}
          <a href="#about">My Portfolio</a>
          {/* </div> */}
        </Typography>
        <Typography variant="h6">Front End Developer</Typography>

        <Typography variant="h7">Short description here</Typography>
        <nav className="mt-4 hidden md:block">
          <ul className="space-y-2">
            <li>
              <a
                href="#about"
                onClick={() => handleClick("about")}
                className="hover:underline flex items-center gap-2 group"
              >
                <div
                  className={`flex align-items-center h-1 w-20 bg-[#00b4d8] origin-left transform group-hover:w-30 duration-300 ${
                    activeSection === "about" ? "w-30" : "w-20"
                  }`}
                ></div>
                <div className="flex items-center py-1">About</div>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => handleClick("projects")}
                className="hover:underline flex items-center gap-2 group"
              >
                <div
                  className={`flex align-items-center h-1 w-20 bg-[#00b4d8] origin-left transform group-hover:w-30 duration-300 ${
                    activeSection === "projects" ? "w-30" : "w-20"
                  }`}
                ></div>
                <div className="flex items-center py-1">Projects</div>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => handleClick("contact")}
                className="hover:underline flex items-center gap-2 group"
              >
                <div
                  className={`flex align-items-center h-1 w-20 bg-[#00b4d8] origin-left transform group-hover:w-30 duration-300 ${
                    activeSection === "contact" ? "w-30" : "w-20"
                  }`}
                ></div>
                <div className="flex items-center py-1">Contact</div>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <ul className="mt-auto p-5 hidden md:block">
        <li>Stuff</li>
      </ul>
    </div>
  );
}
