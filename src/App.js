import * as React from "react";
import LoginCard from "./components/login-card";
import RegisterCard from "./components/register-card";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/note-found-page";
import Navigation from "./components/navigation";
import LoginPage from "./pages/login-page";
import Homepage from "./pages";
import "./styles/style.module.css";
import { useAuth } from "./hooks/use-auth";
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
          <Route path="/register" element={<RegisterCard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<LoginCard />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
