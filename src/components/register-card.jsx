import * as React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useFieldText from "../hooks/use-field-text";
import { useLocale } from "../hooks/use-locale";
import useToastOptions from "../hooks/use-toast-options";
import { register } from "../utils/api";
import { localeData } from "../utils/locale";

export default function RegisterCard() {
  const { locale } = useLocale();
  const navigate = useNavigate();
  const toastOptions = useToastOptions();
  const [name, onChangeName] = useFieldText();
  const [email, onChangeEmail] = useFieldText();
  const [password, OnChangePassword] = useFieldText();

  const reset = React.useCallback(() => {
    onChangeEmail("");
    onChangeName("");
    OnChangePassword("");
  }, [OnChangePassword, onChangeEmail, onChangeName]);

  const onSubmit = async (event) => {
    event.preventDefault();
    const response = await register({ name, email, password });
    toast[response.error ? "error" : "success"](response.message, toastOptions);
    if (!response.error) {
      navigate("/login");
      reset();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>{localeData[locale].navigation_register}</h2>
      <input
        type="text"
        placeholder={localeData[locale].dialog_name_placeholder}
        value={name}
        onChange={onChangeName}
        required
      />
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
      />
      <input type="submit" value={localeData[locale].navigation_register} />
    </form>
  );
}
