import * as React from "react";
import useFieldText from "../hooks/use-field-text";
import { register } from "../utils/api";

export default function RegisterCard() {
  const [name, onChangeName] = useFieldText();
  const [email, onChangeEmail] = useFieldText();
  const [password, OnChangePassword] = useFieldText();
  const [error, setError] = React.useState();

  const onSubmit = async (event) => {
    event.preventDefault();
    const { error } = await register({ name, email, password });
    setError(error);
  };

  return (
    <form onSubmit={onSubmit}>
      {error && <h2>email anda sudah terdaftar</h2>}
      <input
        type="text"
        placeholder="masukkan nama anda..."
        value={name}
        onChange={onChangeName}
        required
      />
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
      <input type="submit" value="register" />
    </form>
  );
}
