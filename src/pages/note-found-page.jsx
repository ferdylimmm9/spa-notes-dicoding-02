import Lottie from "lottie-react";
import { LottieError } from "../assets/lottie";

export default function PageNotFound() {
  return (
    <Lottie
      animationData={LottieError}
      style={{ height: "70vh", margin: "auto" }}
    />
  );
}
