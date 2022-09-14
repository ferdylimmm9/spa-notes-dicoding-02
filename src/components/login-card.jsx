import * as React from "react";
import useFieldText from "../hooks/use-field-text";
import { login } from "../utils/api";
export default function LoginCard() {
  const [email, onChangeEmail] = useFieldText();
  const [password, OnChangePassword] = useFieldText();
  const [data, setData] = React.useState({ error: false, message: "" });

  const onSubmit = async (event) => {
    event.preventDefault();
    const { data, error } = await login({ email, password });
    setData({ message: data, error });
  };

  return (
    <form onSubmit={onSubmit}>
      {data.error && <h2>{data.message}</h2>}
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
      <input type="submit" value="login" />
    </form>
  );
}
