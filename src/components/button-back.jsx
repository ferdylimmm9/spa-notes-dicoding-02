import { IoChevronBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { authPath } from "../utils/route";

export default function BackButton() {
  const navigate = useNavigate();

  const onClick = () => navigate(authPath.index);

  return (
    <button onClick={onClick}>
      <IoChevronBackCircle size={36} />
    </button>
  );
}
