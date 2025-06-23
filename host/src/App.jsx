import React from "react";
import MusicLibrary from "musicLib/MusicLibrary";
import LoginForm from "./components/LoginForm";
import RoleHeader from "./components/RoleHeader";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { user } = useAuth();

  if (!user) return <LoginForm />;

  return (
    <div>
      <RoleHeader />
      <main>
        <MusicLibrary role={user.role} />
      </main>
    </div>
  );
};

export default App;
