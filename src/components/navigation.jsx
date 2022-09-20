/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import ButtonLocale from "./button-locale";
import ButtonTheme from "./button-theme";
import { Link } from "react-router-dom";
import styles from "../styles/Navigation.module.css";
import { useAuth } from "../hooks/use-auth";
import DialogBackdrop from "./dialog-backdrop";
import { AddNote } from "./add-note";
import { useLocale } from "../hooks/use-locale";
import { localeData } from "../utils/locale";
import { ToastContainer } from "react-toastify";
import { useTheme } from "../hooks/use-theme";
import { authPath, publicPath } from "../utils/route";

export default function Navigation() {
  const { auth, setAuth } = useAuth();
  const { locale } = useLocale();
  const { theme } = useTheme();

  const [hide, setHide] = React.useState(false);

  const hideHandler = () => {
    setHide((prevState) => !prevState);
  };
  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    setAuth(null);
  };

  return (
    <nav className={styles.navigationContainer}>
      <ToastContainer theme={theme} />

      {hide && (
        <DialogBackdrop onClose={hideHandler}>
          <AddNote onClose={hideHandler} />
        </DialogBackdrop>
      )}
      <Link to={authPath.index} className={styles.linkButton}>
        <h1>{localeData[locale].navigation_notes}</h1>
      </Link>
      <div className={styles.linkContainer}>
        {auth?.error ? (
          <>
            <Link to={publicPath.login} className={styles.linkButton}>
              {localeData[locale].navigation_login}
            </Link>
            <Link to={publicPath.register} className={styles.linkButton}>
              {localeData[locale].navigation_register}
            </Link>
          </>
        ) : (
          <>
            <a onClick={hideHandler} className={styles.linkButton}>
              {localeData[locale].navigation_add_note}
            </a>
            <Link
              to={publicPath.login}
              className={styles.linkButton}
              onClick={logoutHandler}
            >
              {localeData[locale].navigation_logout}
            </Link>
          </>
        )}
      </div>
      <div className={styles.actionContainer}>
        <ButtonLocale />
        <ButtonTheme />
      </div>
    </nav>
  );
}
