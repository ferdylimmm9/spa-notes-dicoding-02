import * as React from "react";
import PropTypes from "prop-types";
import { getActiveNotes, getArchivedNotes } from "../utils/api";
import { useAuth } from "./use-auth";
export default function useGetNotes({ type }) {
  const { setAuth } = useAuth();
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        if (type === "active") {
          const response = await getActiveNotes();
          setData(response);
        } else {
          const response = await getArchivedNotes();
          setData(response);
        }
      } catch {
        setAuth(null);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [type,setAuth]);
  return { data, loading };
}
useGetNotes.propTypes = {
  type: PropTypes.string.isRequired,
};
