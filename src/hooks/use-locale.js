/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import LocaleContext from "../contexts/locale-context";

export function LocaleProvider({ children }) {
  const value = localStorage.getItem("locale");
  const [locale, setLocale] = React.useState(value ? value : "id");
  const localeHandler = () => setLocale(locale === "id" ? "en" : "id");
  const localeValue = React.useMemo(
    () => ({ locale, localeHandler }),
    [locale]
  );
  return (
    <LocaleContext.Provider value={localeValue}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const locale = React.useContext(LocaleContext);
  return locale;
}
