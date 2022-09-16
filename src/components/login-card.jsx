import * as React from "react";
import { useAuth } from "../hooks/use-auth";
import useFieldText from "../hooks/use-field-text";
import { login } from "../utils/api";
import { useNavigate } from "react-router-dom";
export default function LoginCard() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const [email, onChangeEmail] = useFieldText();
  const [password, OnChangePassword] = useFieldText();
  const [data, setData] = React.useState({ error: false, message: "" });
  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      const { data, error } = await login({ email, password });
      setData({ message: data, error });
      setAuth({ data, error });
      navigate("/");
    } catch (e) {
    } finally {
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="masukkan email anda..."
        value={email}
        onChange={onChangeEmail}
        required
      />
      <input
        type="password"
        placeholder="masukkan password anda..."
        value={password}
        onChange={OnChangePassword}
        required
      />
      {data.error && <h2>{data.message}</h2>}
      <input type="submit" value="login" />
    </form>
  );
}
