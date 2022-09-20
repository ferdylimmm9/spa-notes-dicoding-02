import useFieldText from "../hooks/use-field-text";
import styles from "../styles/Dialog.module.css";
import PropTypes from "prop-types";
import { useLocale } from "../hooks/use-locale";
import { localeData } from "../utils/locale";
export function SearchForm({ onClose, onSearch }) {
  const { locale } = useLocale();
  const [title, onChangeTitle] = useFieldText();

  const onSubmit = (event) => {
    onSearch(title);
    onClose();
  };

  return (
    <div className={styles.dialogContent}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder={localeData[locale].dialog_title_placeholder}
          value={title}
          onChange={onChangeTitle}
        />
        <input type="submit" value={localeData[locale].navigation_add_note} />
      </form>
    </div>
  );
}

SearchForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};
