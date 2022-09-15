import { useLocale } from "../hooks/use-locale";

export default function ButtonLocale() {
  const { locale, localeHandler } = useLocale();
  return <button onClick={localeHandler}>{locale.toUpperCase()}</button>;
}
