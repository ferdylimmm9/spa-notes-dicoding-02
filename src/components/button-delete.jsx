import * as React from "react";
import PropTypes from "prop-types";
import { useLocale } from "../hooks/use-locale";
import { localeData } from "../utils/locale";
import { deleteNote } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useToastOptions from "../hooks/use-toast-options";
import { BsTrash } from "react-icons/bs";
import Swal from "sweetalert2";
export default function DeleteButton({ id }) {
  const { locale } = useLocale();
  const navigate = useNavigate();
  const toastOptions = useToastOptions();

  const onDelete = async () => {
    const { isConfirmed } = await Swal.fire({
      text: localeData[locale].alert_delete_title,
      showConfirmButton: true,
      showCancelButton: true,
      cancelButtonText: localeData[locale].alert_no,
      confirmButtonText: localeData[locale].alert_yes,
      icon: "warning",
    });
    if (isConfirmed) {
      const { error } = await deleteNote(id);
      toast[error ? "error" : "success"](
        localeData[locale][
          error ? "toast_delete_error" : "toast_delete_success"
        ],
        toastOptions
      );
      if (!error) {
        navigate("/");
      }
    }
  };

  return (
    <button onClick={onDelete}>
      <BsTrash size={36} />
    </button>
  );
}
DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
};
