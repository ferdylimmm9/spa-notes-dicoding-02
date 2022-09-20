import useFieldRichText from "../hooks/use-field-rich-text";
import useFieldText from "../hooks/use-field-text";
import { addNote } from "../utils/api";
import styles from "../styles/Dialog.module.css";
import PropTypes from "prop-types";
import { useLocale } from "../hooks/use-locale";
import { localeData } from "../utils/locale";
import useToastOptions from "../hooks/use-toast-options";
import { toast } from "react-toastify";
export function AddNote({ onClose }) {
  const { locale } = useLocale();
  const toastOptions = useToastOptions();
  const [title, onChangeTitle] = useFieldText();
  const [body, onChangeBody] = useFieldRichText();

  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      const { error, data } = await addNote({ title, body });
      toast[error ? "error" : "success"](
        error ? data : localeData[locale].toast_add_success,
        toastOptions
      );
      onClose();
    } catch {}
  };

  return (
    <div className={styles.dialogContent} onClick={(e) => e.stopPropagation()}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder={localeData[locale].dialog_title_placeholder}
          value={title}
          onChange={onChangeTitle}
          required
        />
        <div
          className={styles.inputContent}
          contentEditable
          placeholder={localeData[locale].dialog_body_placeholder}
          onInput={onChangeBody}
        />
        <input type="submit" value={localeData[locale].navigation_add_note} />
      </form>
    </div>
  );
}

AddNote.propTypes = {
  onClose: PropTypes.func.isRequired,
};
