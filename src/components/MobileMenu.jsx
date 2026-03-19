import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { MdMenu } from "react-icons/md";
import { useEffect, useState } from "react";

export default function MobileMenu({ navItems, onItemClick }) {
  const isMobile = useMediaQuery("(max-width:767.95px)");
  const [anchorElNav, setAnchorElNav] = useState(null);

  useEffect(() => {
    if (!isMobile && anchorElNav) {
      setAnchorElNav(null);
    }
  }, [isMobile, anchorElNav]);

  if (!isMobile) {
    return null;
  }

  const handleOpenNavMenu = (event) => {
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
          top: 8,
          right: 8,
          display: "flex",
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
          <MdMenu size={24} />
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
        open={Boolean(anchorElNav)}
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
          <MenuItem key={item.id} onClick={() => handleItemClick(item.id)}>
            <Typography sx={{ textAlign: "center", fontSize:"1.1rem"}}>{item.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
