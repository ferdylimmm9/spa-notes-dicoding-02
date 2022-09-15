import { useTheme } from "../hooks/use-theme";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ButtonTheme() {
  const { theme, themeHandler } = useTheme();
  return (
    <button onClick={themeHandler}>
      {theme === "dark" ? <FaMoon /> : <FaSun />}
    </button>
  );
}
