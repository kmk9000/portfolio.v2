import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Fade from "@mui/material/Fade";
import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    const container = document.querySelector(".main-container");
    setTarget(container);
  }, []);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
    target: target || undefined,
  });

  const handleClick = () => {
    if (target) {
      target.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 1000 }}
      >
        <Fab size="medium" aria-label="scroll back to top" color="primary">
          ↑
        </Fab>
      </Box>
    </Fade>
  );
}
