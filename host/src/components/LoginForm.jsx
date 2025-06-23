import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const { login } = useAuth();
  const [selectedRole, setSelectedRole] = useState("user");

  const handleSubmit = () => {
    login(selectedRole);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h2 className={styles.title}>🎭 Select Your Role</h2>
        <select
          className={styles.select}
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button onClick={handleSubmit} className={styles.button}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
