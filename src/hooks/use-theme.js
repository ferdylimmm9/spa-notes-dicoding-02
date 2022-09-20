/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import ThemeContext from "../contexts/theme-context";
import PropTypes from "prop-types";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const themeHandler = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const ThemeValue = React.useMemo(() => ({ theme, themeHandler }), [theme]);

  return (
    <ThemeContext.Provider value={ThemeValue}>{children}</ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useTheme() {
  const theme = React.useContext(ThemeContext);
  return theme;
}
