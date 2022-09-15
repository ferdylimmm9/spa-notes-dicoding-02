import * as React from "react";
import ButtonLocale from "./button-locale";
import ButtonTheme from "./button-theme";
import { Link } from "react-router-dom";
import useFetch from "../hooks/use-fetch";
import { getUserLogged } from "../utils/api";
export default function Navigation() {
  const { data, loading } = useFetch({ fetchFunction: getUserLogged });
  const logoutHandler = () => localStorage.removeItem("accessToken");
  if (loading) {
    return null;
  }
  return (
    <nav>
      <ButtonLocale />
      <ButtonTheme />
      {data?.error ? (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      ) : (
        <>
          <Link to="/">Daftar Catatan</Link>
          <Link to="/add">Tambah Catatan</Link>
          <Link to="/login" onClick={logoutHandler}>
            Logout
          </Link>
        </>
      )}
    </nav>
  );
}
