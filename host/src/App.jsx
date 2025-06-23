import React from "react";
import MusicLibrary from "musicLib/MusicLibrary"; // ✅ This loads from remote
import LoginForm from "./components/LoginForm";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { user } = useAuth();

  return <div>{user ? <MusicLibrary role={user.role} /> : <LoginForm />}</div>;
};

export default App;
