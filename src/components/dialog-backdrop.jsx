import { Zoom } from "react-reveal";
import * as React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "../styles/Dialog.module.css";
import PropTypes from "prop-types";

export default function DialogBackdrop({ children, onClose }) {
  return (
    <div className={styles.backdropContainer}>
      <OutsideClickHandler onOutsideClick={onClose}>
        <Zoom duration={300} big>
          {children}
        </Zoom>
      </OutsideClickHandler>
    </div>
  );
}

DialogBackdrop.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
