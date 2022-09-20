import PropTypes from "prop-types";
import styles from "../styles/Button.module.css";
import { FaSearch } from "react-icons/fa";

export default function FabSearch({ onShow }) {
  return (
    <div className={styles.fab} onClick={onShow}>
      <FaSearch size={24} />
    </div>
  );
}

FabSearch.propTypes = {
  onShow: PropTypes.func.isRequired,
};
