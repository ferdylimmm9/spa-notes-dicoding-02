import * as React from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/auth-context";
import { getUserLogged } from "../utils/api";
import { authPath, publicPath } from "../utils/route";
import PropTypes from "prop-types";
export function AuthProvider({ children }) {
  const [auth, setAuth] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  React.useEffect(() => {
    async function fetchAuth() {
      try {
        if (!auth) {
          setLoading(true);
          const response = await getUserLogged();
          setAuth({ error: response.error, data: response.data });
          if (response.error) {
            navigate(publicPath.login);
          } else {
            navigate(authPath.index);
          }
        }
      } catch (e) {
        localStorage.removeItem("accessToken");
        navigate(publicPath.login);
        setAuth(null);
      } finally {
        setLoading(false);
      }
    }
    fetchAuth();
  }, [auth, loading, navigate]);
  const value = React.useMemo(
    () => ({ auth, loading, setAuth }),
    [auth, loading]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth;
}
