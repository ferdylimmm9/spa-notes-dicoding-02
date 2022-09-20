import * as React from "react";

export default function useToastOptions() {
  const toastOptions = React.useMemo(
    () => ({
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }),
    []
  );
  return toastOptions;
}
