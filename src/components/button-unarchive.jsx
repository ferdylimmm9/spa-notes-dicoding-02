import * as React from "react";
import PropTypes from "prop-types";
import { useLocale } from "../hooks/use-locale";
import { localeData } from "../utils/locale";
import { unarchiveNote } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useToastOptions from "../hooks/use-toast-options";
import styles from "../styles/Navigation.module.css";
import { BiArchiveOut } from "react-icons/bi";
export default function UnarchiveButton({ id }) {
  const { locale } = useLocale();
  const navigate = useNavigate();
  const toastOptions = useToastOptions();

  const onUnarchive = async () => {
    const { error } = await unarchiveNote(id);
    toast[error ? "error" : "success"](
      localeData[locale][error ? "toast_active_error" : "toast_active_success"],
      toastOptions
    );
    if (!error) {
      navigate("/");
    }
  };

  return (
    <button className={styles.linkButton} onClick={onUnarchive}>
      <BiArchiveOut size={24} />
      {localeData[locale].button_active}
    </button>
  );
}
UnarchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
};
