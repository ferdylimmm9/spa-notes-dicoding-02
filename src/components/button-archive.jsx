import * as React from "react";
import PropTypes from "prop-types";
import { useLocale } from "../hooks/use-locale";
import { localeData } from "../utils/locale";
import { archiveNote } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useToastOptions from "../hooks/use-toast-options";
import styles from "../styles/Navigation.module.css";
import { BiArchiveIn } from "react-icons/bi";

export default function ArchiveButton({ id }) {
  const { locale } = useLocale();
  const navigate = useNavigate();
  const toastOptions = useToastOptions();

  const onArchive = async () => {
    const { error } = await archiveNote(id);
    toast[error ? "error" : "success"](
      localeData[locale][
        error ? "toast_archive_error" : "toast_archive_success"
      ],
      toastOptions
    );
    if (!error) {
      navigate("/");
    }
  };

  return (
    <button className={styles.linkButton} onClick={onArchive}>
      <BiArchiveIn size={24} />
      {localeData[locale].button_archive}
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
};
