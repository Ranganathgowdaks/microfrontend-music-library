import React from "react";
import { useSongs } from "../context/SongContext";
import styles from "./DeleteButton.module.css"; // ✅ Import the CSS module

const DeleteButton = ({ id }) => {
  const { deleteSong } = useSongs();

  return (
    <button onClick={() => deleteSong(id)} className={styles.button}>
      Delete
    </button>
  );
};

export default DeleteButton;
