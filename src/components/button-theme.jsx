import { useTheme } from "../hooks/use-theme";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "../styles/Button.module.css";
export default function ButtonTheme() {
  const { theme, themeHandler } = useTheme();
  document.documentElement.setAttribute("data-theme", theme);
  return (
    <button className={styles.actionButton} onClick={themeHandler}>
      {theme === "dark" ? <FaMoon /> : <FaSun />}
    </button>
  );
}
