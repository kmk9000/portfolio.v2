import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
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
          <MenuIcon />
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
            backgroundColor: "rgba(15, 23, 42, 0.95)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#e2e8f0",
          },
        }}
      >
        {navItems.map((item) => (
          <MenuItem key={item.id} onClick={() => handleItemClick(item.id)}>
            <Typography sx={{ textAlign: "center" }}>{item.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
