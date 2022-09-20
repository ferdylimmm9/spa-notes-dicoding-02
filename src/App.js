import * as React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/note-found-page";
import Navigation from "./components/navigation";
import LoginPage from "./pages/login-page";
import Homepage from "./pages";
import "./styles/style.module.css";
import { useAuth } from "./hooks/use-auth";
import "react-toastify/dist/ReactToastify.css";
import RegisterPage from "./pages/register-page";
import { authPath, publicPath } from "./utils/route";
import DetailPage from "./pages/detail-page";

function App() {
  const { auth, loading } = useAuth();
  if (loading) {
    return <div className="App"></div>;
  }
  return (
    <div className="App">
      <Navigation />
      {auth?.error ? (
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path={publicPath.register} element={<RegisterPage />} />
          <Route path={publicPath.login} element={<LoginPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path={authPath.index} element={<Homepage />} />
          <Route path={`${authPath.detail}:id`} element={<DetailPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
