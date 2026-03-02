import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "clamp(2.1rem, 1.6vw + 1.6rem, 3.2rem)",
      lineHeight: 1.15,
    },
    h2: {
      fontSize: "clamp(1.75rem, 1.2vw + 1.35rem, 2.5rem)",
      lineHeight: 1.2,
    },
    h3: {
      fontSize: "clamp(1.45rem, 0.85vw + 1.2rem, 2rem)",
      lineHeight: 1.25,
    },
    h4: {
      fontSize: "clamp(1.25rem, 0.6vw + 1.05rem, 1.65rem)",
      lineHeight: 1.3,
    },
    h5: {
      fontSize: "clamp(1.1rem, 0.45vw + 0.95rem, 1.35rem)",
      lineHeight: 1.35,
    },
    h6: {
      fontSize: "clamp(1rem, 0.35vw + 0.9rem, 1.2rem)",
      lineHeight: 1.4,
    },
    body1: {
      fontSize: "clamp(0.95rem, 0.2vw + 0.9rem, 1.05rem)",
      lineHeight: 1.7,
    },
    body2: {
      fontSize: "clamp(0.88rem, 0.15vw + 0.84rem, 0.98rem)",
      lineHeight: 1.65,
    },
    subtitle1: {
      fontSize: "clamp(1rem, 0.28vw + 0.92rem, 1.15rem)",
      lineHeight: 1.55,
    },
    subtitle2: {
      fontSize: "clamp(0.92rem, 0.2vw + 0.86rem, 1.02rem)",
      lineHeight: 1.5,
    },
    button: {
      fontSize: "clamp(0.88rem, 0.15vw + 0.84rem, 0.98rem)",
      lineHeight: 1.2,
      textTransform: "none",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        body1: ({ theme }) => ({
          textAlign: "left",
          [theme.breakpoints.up("md")]: {
            textAlign: "justify",
          },
        }),
        body2: ({ theme }) => ({
          textAlign: "left",
          [theme.breakpoints.up("md")]: {
            textAlign: "justify",
          },
        }),
      },
    },
  },
});
export default theme;
