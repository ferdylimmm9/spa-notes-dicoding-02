import * as React from "react";
import PropTypes from "prop-types";
import { useLocale } from "../hooks/use-locale";
import { formatDate } from "../utils/date";

export default function NoteCard({
  id,
  title,
  body,
  createdAt,
  archived,
  owner,
}) {
  const { locale } = useLocale();
  const date = formatDate({ date: createdAt, locale });

  return (
    <div>
      <h3>{title}</h3>
      <p>
        {date}, {owner}
      </p>
      <p>{id}</p>
      <div dangerouslySetInnerHTML={{ __html: body }} />
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
  owner: PropTypes.string.isRequired,
};
