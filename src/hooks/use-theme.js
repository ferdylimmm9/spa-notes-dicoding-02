/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import ThemeContext from "../contexts/theme-context";

export function ThemeProvider({ children }) {
  const value = localStorage.getItem("theme");
  const [theme, setTheme] = React.useState(value ? value : "light");
  const themeHandler = () => setTheme(theme === "light" ? "darku" : "light");

  const ThemeValue = React.useMemo(() => ({ theme, themeHandler }), [theme]);

  return (
    <ThemeContext.Provider value={ThemeValue}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const theme = React.useContext(ThemeContext);
  return theme;
}
