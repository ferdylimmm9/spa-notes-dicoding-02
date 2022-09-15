import * as React from "react";
import LoginCard from "./components/login-card";
import RegisterCard from "./components/register-card";
import { Routes, Route } from "react-router-dom";
import { getAccessToken } from "./utils/api";
import PageNotFound from "./pages/note-found-page";
import Navigation from "./components/navigation";
function App() {
  const auth = getAccessToken();

  return (
    <div className="App">
      <Navigation />
      {auth ? (
        <Routes>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={<LoginCard />} />
          <Route path="/register" element={<RegisterCard />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
