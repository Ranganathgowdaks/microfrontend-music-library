import React, { useState } from "react";
import MusicLibrary from "../MusicLibrary";
import styles from "./RolePreview.module.css";

const RolePreview = () => {
  const [role, setRole] = useState("admin");

  return (
    <div className={styles.wrapper}>
      <div className={styles.previewHeader}>
        <h2>🎛️ Music Library Preview (DEV Only)</h2>
        <label className={styles.roleSelectLabel}>
          Role:
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className={styles.select}
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </label>
      </div>

      <hr className={styles.divider} />

      <MusicLibrary role={role} />
    </div>
  );
};

export default RolePreview;
