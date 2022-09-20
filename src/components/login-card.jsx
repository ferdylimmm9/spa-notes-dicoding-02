import * as React from "react";
import { useAuth } from "../hooks/use-auth";
import useFieldText from "../hooks/use-field-text";
import { login } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { useLocale } from "../hooks/use-locale";
import { localeData } from "../utils/locale";
import { toast, ToastContainer } from "react-toastify";
import useToastOptions from "../hooks/use-toast-options";
import { authPath, publicPath } from "../utils/route";
export default function LoginCard() {
  const { setAuth } = useAuth();
  const { locale } = useLocale();
  const navigate = useNavigate();
  const toastOptions = useToastOptions();

  const [email, onChangeEmail] = useFieldText();
  const [password, OnChangePassword] = useFieldText();

  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      const { data, error, message } = await login({ email, password });
      toast[error ? "error" : "success"](message, toastOptions);
      if (!error) {
        setAuth({ data });
        navigate(authPath.index);
      } else {
        navigate(publicPath.login);
      }
    } catch (e) {}
  };

  return (
    <form onSubmit={onSubmit}>
      <ToastContainer />
      <h2>{localeData[locale].navigation_login}</h2>
      <input
        type="email"
        placeholder={localeData[locale].dialog_email_placeholder}
        value={email}
        onChange={onChangeEmail}
        required
      />
      <input
        type="password"
        placeholder={localeData[locale].dialog_password_placeholder}
        value={password}
        onChange={OnChangePassword}
        required
        autoComplete="off"
      />
      <input type="submit" value={localeData[locale].navigation_login} />
    </form>
  );
}
