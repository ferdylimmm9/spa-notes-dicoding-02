import * as React from "react";
import PropTypes from "prop-types";

export default function DeleteButton(func) {
  return <button onClick={func}>Hapus</button>;
}
DeleteButton.propTypes = {
  func: PropTypes.func.isRequired,
};
