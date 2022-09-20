import * as React from "react";
import PropTypes from "prop-types";
import { useLocale } from "../hooks/use-locale";
import { formatDate } from "../utils/date";
import styles from "../styles/Card.module.css";
import { useNavigate } from "react-router-dom";
import { authPath } from "../utils/route";
export default function NoteCard({ id, title, body, createdAt, archived }) {
  const { locale } = useLocale();
  const navigate = useNavigate();

  const date = formatDate({ date: createdAt, locale });

  const onNavigate = () => navigate(`${authPath.detail}${id}`);

  return (
    <div className={styles.cardContainer} onClick={onNavigate}>
      <h3>{title}</h3>
      <p>{date}</p>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: body }}
      />
      <div>{archived}</div>
    </div>
  );
}

NoteCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
};
