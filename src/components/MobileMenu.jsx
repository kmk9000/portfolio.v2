import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { MdClose, MdMenu } from "react-icons/md";
import { useEffect, useState } from "react";

export default function MobileMenu({ navItems, onItemClick, activeSection }) {
  const isMobile = useMediaQuery("(max-width:767.95px)");
  const [anchorElNav, setAnchorElNav] = useState(null);
  const isOpen = Boolean(anchorElNav);

  useEffect(() => {
    if (!isMobile && anchorElNav) {
      setAnchorElNav(null);
    }
  }, [isMobile, anchorElNav]);

  if (!isMobile) {
    return null;
  }

  const handleToggleNavMenu = (event) => {
    if (isOpen) {
      setAnchorElNav(null);
      return;
    }

    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleItemClick = (section) => {
    handleCloseNavMenu();
    onItemClick(section);
  };

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          display: "flex",
        }}
      >
        <IconButton
          size="large"
          aria-label="navigation menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          aria-expanded={isOpen ? "true" : undefined}
          onClick={handleToggleNavMenu}
          color="inherit"
        >
          {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </IconButton>
      </Box>

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
        open={isOpen}
        onClose={handleCloseNavMenu}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "rgba(2, 6, 23, 0.60)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            borderRadius: "0.5rem",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 0 20px rgba(99, 102, 241, 0.15)",
            color: "#e2e8f0",
          },
        }}
      >
        {navItems.map((item) => (
          <MenuItem
            key={item.id}
            selected={activeSection === item.id}
            onClick={() => handleItemClick(item.id)}
            sx={{
              minHeight: 44,
              px: 2,
              "&.Mui-selected": {
                backgroundColor: "rgba(34, 211, 238, 0.14)",
              },
              "&.Mui-selected:hover": {
                backgroundColor: "rgba(34, 211, 238, 0.2)",
              },
            }}
          >
            <Typography
              sx={{ textAlign: "center", fontSize: "1rem", fontWeight: 500 }}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
