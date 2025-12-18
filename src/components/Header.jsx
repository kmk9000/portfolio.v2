import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function Header({ activeSection, setActiveSection }) {
  const handleClick = (section) => {
    setActiveSection(section);
  };

  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div
      className="flex flex-col 
     bg-blue-950 text-white 
      p-4 
      md:p-6 
      lg:p-12 
      w-full 
      md:w-1/4 
      lg:w-1/3 
      xl:w-1/4 
      sticky 
      top-0 
      z-1 
      justify-between"
    >
      {/* bg-blue-600 */}
      <header className="relative">
        <Typography variant="h4" component="div" gutterBottom>
          {/* <div className="font-bold text-3xl pb-4"> */}
          <a href="#about">My Portfolio</a>
          {/* </div> */}
        </Typography>
        <Typography variant="h6">Front End Developer</Typography>

        <Typography variant="h7">Short description here</Typography>
        {/* Mobile Menu Button */}
        <Box
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            display: { xs: "flex", md: "none" },
          }}
        >
          <IconButton
            size="large"
            aria-label="navigation menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Mobile Menu */}
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          {navItems.map((item) => (
            <MenuItem
              key={item.id}
              onClick={() => handleClick(item.id)}
              component="a"
              href={`#${item.id}`}
            >
              <Typography sx={{ textAlign: "center" }}>{item.label}</Typography>
            </MenuItem>
          ))}
        </Menu>

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
