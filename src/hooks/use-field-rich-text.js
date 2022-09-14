import * as React from "react";

export default function useFieldRichText() {
  const [value, setValue] = React.useState("");
  const valueHandler = (event) => setValue(event.target.innerHTML);
  return [value, valueHandler];
}
