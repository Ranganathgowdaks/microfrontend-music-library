import React from "react";
import { useAuth } from "../context/AuthContext";
import styles from "./RoleHeader.module.css";

const RoleHeader = () => {
  const { user, logout, login } = useAuth();

  const handleRoleChange = (e) => {
    login(e.target.value); // switch role
  };

  return (
    <header className={styles.header}>
      <div className={styles.info}>
        <span className={styles.label}>Current Role:</span>{" "}
        <strong className={styles.role}>{user.role.toUpperCase()}</strong>
      </div>
      <div className={styles.actions}>
        <label className={styles.switchLabel}>
          Switch Role:
          <select
            value={user.role}
            onChange={handleRoleChange}
            className={styles.select}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <button onClick={logout} className={styles.logoutBtn}>
          🔒 Logout
        </button>
      </div>
    </header>
  );
};

export default RoleHeader;
