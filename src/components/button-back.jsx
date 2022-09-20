import { IoChevronBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  const onClick = () => navigate("/");

  return (
    <button onClick={onClick}>
      <IoChevronBackCircle size={36} />
    </button>
  );
}
