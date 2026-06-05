import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#7c2ad6", contrastText: "#ffffff" },
    secondary: { main: "#e547a8" },
    background: { default: "transparent", paper: "#ffffff" },
    text: { primary: "#1f1235", secondary: "#5b4b78" },
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: "'Inter', system-ui, sans-serif",
    h1: { fontFamily: "'Sora', 'Inter', sans-serif", fontWeight: 800, letterSpacing: "-0.02em" },
    h2: { fontFamily: "'Sora', 'Inter', sans-serif", fontWeight: 700, letterSpacing: "-0.02em" },
    h3: { fontFamily: "'Sora', 'Inter', sans-serif", fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: 999,
          paddingInline: 24,
          paddingBlock: 12,
          ...(ownerState.variant === "contained" && ownerState.color === "primary" && {
            background: "linear-gradient(135deg, #7c2ad6, #c44aff)",
            boxShadow: "0 12px 30px -10px rgba(124,42,214,0.55)",
            "&:hover": { background: "linear-gradient(135deg, #6a1fc4, #b237f0)" },
          }),
        }),
      },
    },
    MuiPaper: { styleOverrides: { root: { backgroundImage: "none" } } },
  },
});
