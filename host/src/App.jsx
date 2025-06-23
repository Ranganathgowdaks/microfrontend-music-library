import React, { Suspense } from "react";
import { useAuth } from "./context/AuthContext";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";

const MusicLibrary = React.lazy(() => import("musicLib/MusicLibrary"));

const App = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <p style={{ textAlign: "center", marginTop: "2rem" }}>
        Checking login status...
      </p>
    );
  }

  if (!user) {
    return <LoginForm />;
  }

  return (
    <div>
      <Navbar />
      <Suspense
        fallback={
          <p style={{ textAlign: "center" }}>Loading Music Library...</p>
        }
      >
        <MusicLibrary role={user.role} />
      </Suspense>
    </div>
  );
};

export default App;
