import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const LoginForm = () => {
  const { login } = useAuth();
  const [selectedRole, setSelectedRole] = useState("user");

  const handleSubmit = () => {
    login(selectedRole);
  };

  return (
    <div style={styles.container}>
      <h2>Select your role:</h2>
      <select
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleSubmit} style={styles.button}>
        Login
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "5rem",
  },
  button: {
    padding: "8px 16px",
    marginTop: "1rem",
    cursor: "pointer",
  },
};

export default LoginForm;
