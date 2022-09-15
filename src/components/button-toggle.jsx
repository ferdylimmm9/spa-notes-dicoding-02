import PropTypes from "prop-types";

export default function ButtonToggle({ archived, func }) {
  return <button onClick={func}>{archived ? "Aktifkan" : "Arsipkan"}</button>;
}

ButtonToggle.propTypes = {
  archived: PropTypes.bool.isRequired,
  func: PropTypes.func.isRequired,
};
