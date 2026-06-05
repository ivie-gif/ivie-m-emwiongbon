import { ThemeProvider, CssBaseline } from "@mui/material";
import { muiTheme } from "./lib/theme";
import { Navbar } from "./components/portfolio/NavigationBar";
import { Hero } from "./components/portfolio/Hero";
import { About } from "./components/portfolio/AboutUS";
import { Projects } from "./components/portfolio/Projects";
import { Skills } from "./components/portfolio/Skills";
import { Contact } from "./components/portfolio/Contact";
import './App.css';

function App() {
  return (
     <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {/* <main > */}
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      {/* </main> */}
    </ThemeProvider>
  );
}

export default App;
