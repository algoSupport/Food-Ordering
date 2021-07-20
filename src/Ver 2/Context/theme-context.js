import React, { useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

export const themeContext = React.createContext({
  isDark: 0,
  setIsDark: () => {},
});

const DarkThemeProvider = (props) => {
  const [isDarkState, setIsDarkState] = useState(false);

  const newTheme = createMuiTheme({
    palette: {
      type: isDarkState ? "dark" : "light",
    },
  });

  const themeValues = {
    isDark: isDarkState,
    setIsDark: setIsDarkState,
  };

  return (
    <themeContext.Provider value={themeValues}>
      <ThemeProvider theme={newTheme}>{props.children}</ThemeProvider>
    </themeContext.Provider>
  );
};

export default DarkThemeProvider;
