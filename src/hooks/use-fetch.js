/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import PropTypes from "prop-types";

export default function useFetch({ fetchFunction }) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!data) {
      setLoading(true);
      fetchFunction()
        .then((result) =>
          result
            .json()
            .then((response) => setData(response))
            .finally(() => setLoading(false))
        )
        .catch((error) => console.log(error));
    }
  }, [data, loading]);
  return { data, loading };
}

useFetch.propTypes = {
  fetchFunction: PropTypes.func.isRequired,
};
