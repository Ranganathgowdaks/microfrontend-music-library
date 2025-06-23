import React from "react";
import { useAuth } from "../context/AuthContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className={styles.nav}>
      <span className={styles.roleText}>
        Logged in as: <strong>{user?.role}</strong>
      </span>
      <button onClick={logout} className={styles.button}>
        🔒 Logout
      </button>
    </header>
  );
};

export default Navbar;
