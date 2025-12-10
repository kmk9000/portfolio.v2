import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <div className="flex flex-col bg-blue-950 text-white p-12 w-1/4">
      {/* bg-blue-600 */}
      <header>
        <Typography variant="h4" component="div" gutterBottom>
          {/* <div className="font-bold text-3xl pb-4"> */}
          <a href="#about">My Portfolio</a>
          {/* </div> */}
        </Typography>
        <Typography variant="h6">Front End Developer</Typography>

        <Typography variant="h7">Short description here</Typography>
        <nav className="mt-4">
          <ul className="space-y-2">
            <li>
              <a
                href="#about"
                className="hover:underline flex items-center gap-2 group"
              >
                <div className="flex align-items-center h-1 w-20 bg-[#00b4d8] origin-left transform group-hover:w-30 duration-300"></div>
                <div className="flex items-center py-1">About</div>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:underline flex items-center gap-2 group"
              >
                <div className="flex align-items-center h-1 w-20 bg-[#00b4d8] origin-left transform group-hover:w-30 duration-300"></div>
                <div className="flex items-center py-1">Projects</div>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline flex items-center gap-2 group"
              >
                <div className="flex align-items-center h-1 w-20 bg-[#00b4d8] origin-left transform group-hover:w-30 duration-300"></div>
                <div className="flex items-center py-1">Contact</div>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <ul className="mt-auto p-5">
        <li>Stuff</li>
      </ul>
    </div>
  );
}
