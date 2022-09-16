/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import PropTypes from "prop-types";

export default function useFetch({ fetchFunction }) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      try {
        if (!data) {
          setLoading(true);
          const response = await fetchFunction();
          setData(response);
        }
      } catch (e) {
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [data, loading]);

  return { data, loading };
}

useFetch.propTypes = {
  fetchFunction: PropTypes.func.isRequired,
};
