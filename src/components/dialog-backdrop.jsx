import * as React from "react";
import styles from "../styles/Dialog.module.css";
import PropTypes from "prop-types";

export default function DialogBackdrop({ children, onClose }) {
  return (
    <div className={styles.backdropContainer} onClick={onClose}>
        {children}
    </div>
  );
}

DialogBackdrop.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
