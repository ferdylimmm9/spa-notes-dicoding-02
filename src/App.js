import * as React from "react";
import { AddNote } from "./components/add-note";
import LoginCard from "./components/login-card";
import NoteCard from "./components/note-card";
import RegisterCard from "./components/register-card";
function App() {
  return (
    <div className="App">
      <NoteCard
        archived={true}
        body={"<p>asdad <strong>asdadssd</strong></p>"}
        createdAt="2022-07-28T10:03:12.594Z"
        id="adsfadfasdf"
        owner="ferd"
        title="okey go"
        key="asdasda"
      />
      <RegisterCard />
      <LoginCard />
      <AddNote />
    </div>
  );
}

export default App;
