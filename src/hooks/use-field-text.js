import * as React from "react";

export default function useFieldText() {
  const [value, setValue] = React.useState('');
  const valueHandler = (event) => setValue(event.target.value);
  return [value, valueHandler];
}
