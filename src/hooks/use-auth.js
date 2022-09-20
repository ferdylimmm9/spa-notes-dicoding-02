import * as React from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/auth-context";
import { getUserLogged } from "../utils/api";
import { publicPath } from "../utils/route";

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
          setAuth(response);
        }
      } catch (e) {
        localStorage.removeItem("accessToken");
        navigate(publicPath.login);
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

export function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth;
}
