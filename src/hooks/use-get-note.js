import * as React from "react";
import PropTypes from "prop-types";
import { getNote } from "../utils/api";
import { useAuth } from "./use-auth";

export default function useGetNote({ id }) {
  const { setAuth } = useAuth();
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await getNote(id);
        setData(response);
      } catch {
        setAuth(null);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id, setAuth]);
  return { data, loading };
}
useGetNote.propTypes = {
  id: PropTypes.string.isRequired,
};
