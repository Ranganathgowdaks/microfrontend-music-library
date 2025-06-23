import React from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ role }) => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>🎶 My Music Library</h1>
      <div className={styles.userInfo}>
        Logged in as: <span className={styles.role}>{role}</span>
      </div>
    </nav>
  );
};

export default Navbar;
