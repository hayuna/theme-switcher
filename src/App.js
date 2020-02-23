import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./themes";
import { GlobalStyles } from "./themes/global";
import Toggle from "./components/Toggle";
import Header from "./components/Header";
import Credits from "./components/Credits";
import { useTheme } from "./hooks";

const App = () => {
  const [theme, changeTheme] = useTheme();

  return (
    <ThemeProvider theme={Theme[theme]}>
      <>
        <GlobalStyles />
        <Toggle type={theme} toggleTheme={changeTheme}>
          Toggle theme
        </Toggle>
        <Header>It's a {theme} theme</Header>
        <footer>
          <Credits />
        </footer>
      </>
    </ThemeProvider>
  );
};

export default App;
