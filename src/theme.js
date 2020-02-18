import { createMuiTheme } from "@material-ui/core/styles";
export default createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    common: { black: "#000", white: "#fff" },
    background: { paper: "rgba(242, 247, 253, 1)", default: "#fafafa" },
    primary: {
      light: "rgba(4, 129, 223, 1)",
      main: "rgba(0, 89, 157, 1)",
      dark: "rgba(3, 59, 103, 1)",
      contrastText: "#fff"
    },
    secondary: {
      light: "rgba(255, 198, 108, 1)",
      main: "rgba(255, 159, 0, 1)",
      dark: "rgba(165, 105, 3, 1)",
      contrastText: "#fff"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    }
  }
});
