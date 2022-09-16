import * as React from "react";
import ButtonLocale from "./button-locale";
import ButtonTheme from "./button-theme";
import { Link } from "react-router-dom";
import styles from "../styles/Navigation.module.css";
import { useAuth } from "../hooks/use-auth";
export default function Navigation() {
  const { auth, setAuth } = useAuth();
  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    setAuth(null);
  };
  return (
    <nav className={styles.navigationContainer}>
      <h1>Notes</h1>

      <div className={styles.linkContainer}>
        {auth?.error ? (
          <>
            <Link to="/login" className={styles.linkButton}>
              Login
            </Link>
            <Link to="/register" className={styles.linkButton}>
              Register
            </Link>
          </>
        ) : (
          <>
            <Link to="/" className={styles.linkButton}>
              Daftar Catatan
            </Link>
            <Link to="/add" className={styles.linkButton}>
              Tambah Catatan
            </Link>
            <Link
              to="/login"
              className={styles.linkButton}
              onClick={logoutHandler}
            >
              Logout
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
