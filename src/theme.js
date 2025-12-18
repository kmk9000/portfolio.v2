import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        body1: {
          textAlign: "justify",
        },
        body2: {
          textAlign: "justify",
        },
      },
    },
  },
});
export default theme;
