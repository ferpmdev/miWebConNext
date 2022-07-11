import "../styles/globals.css";
import { UIContextProvider } from "../context/ui/UIContextProvider";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const basicTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <UIContextProvider>
      <ThemeProvider theme={basicTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIContextProvider>
  );
}

export default MyApp;
