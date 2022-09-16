import { useLocale } from "../hooks/use-locale";
import styles from "../styles/Button.module.css";

export default function ButtonLocale() {
  const { locale, localeHandler } = useLocale();
  return (
    <button className={styles.actionButton} onClick={localeHandler}>
      {locale.toUpperCase()}
    </button>
  );
}
