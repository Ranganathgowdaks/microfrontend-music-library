import React, { useState } from "react";
import { useSongs } from "../context/SongContext";
import styles from "./AddSongForm.module.css"; // ✅ Import the CSS module

const AddSongForm = () => {
  const { addSong } = useSongs();
  const [form, setForm] = useState({ title: "", artist: "", album: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title && form.artist && form.album) {
      addSong(form);
      setForm({ title: "", artist: "", album: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        className={styles.input}
        placeholder="🎵 Title"
        required
      />
      <input
        name="artist"
        value={form.artist}
        onChange={handleChange}
        className={styles.input}
        placeholder="🎤 Artist"
        required
      />
      <input
        name="album"
        value={form.album}
        onChange={handleChange}
        className={styles.input}
        placeholder="💽 Album"
        required
      />
      <button type="submit" className={styles.button}>
        Add Song
      </button>
    </form>
  );
};

export default AddSongForm;
