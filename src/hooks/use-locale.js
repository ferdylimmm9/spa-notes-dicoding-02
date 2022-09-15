/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import LocaleContext from "../contexts/locale-context";

export function LocaleProvider({ children }) {
  const [locale, setLocale] = React.useState(() =>
    localStorage.getItem("locale") ? localStorage.getItem("locale") : "id"
  );
  const localeHandler = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === "id" ? "en" : "id";
      localStorage.setItem("locale", newLocale);
      return newLocale;
    });
  };
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
