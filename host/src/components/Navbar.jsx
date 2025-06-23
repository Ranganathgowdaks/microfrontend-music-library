import React from "react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div style={styles.nav}>
      <span>
        Logged in as: <b>{user?.role}</b>
      </span>
      <button onClick={logout} style={styles.button}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 24px",
    backgroundColor: "#f0f0f0",
    borderBottom: "1px solid #ddd",
  },
  button: {
    padding: "6px 12px",
    cursor: "pointer",
    backgroundColor: "#ff5252",
    color: "white",
    border: "none",
    borderRadius: "4px",
  },
};

export default Navbar;
