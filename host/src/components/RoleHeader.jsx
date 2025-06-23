import React from "react";
import { useAuth } from "../context/AuthContext";

const RoleHeader = () => {
  const { user, logout, login } = useAuth();

  const handleRoleChange = (e) => {
    login(e.target.value); // switch role
  };

  return (
    <header style={styles.header}>
      <div>
        <strong>Current Role:</strong> {user.role.toUpperCase()}
      </div>
      <div>
        <label>
          Switch Role:{" "}
          <select value={user.role} onChange={handleRoleChange}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <button onClick={logout} style={styles.logoutBtn}>
          Logout
        </button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    background: "#f0f0f0",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #ccc",
  },
  logoutBtn: {
    marginLeft: "1rem",
    padding: "6px 12px",
    backgroundColor: "#ff5252",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default RoleHeader;
