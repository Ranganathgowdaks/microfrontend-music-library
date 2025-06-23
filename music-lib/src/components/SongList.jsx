import React from "react";
import DeleteButton from "./DeleteButton";
import styles from "./SongList.module.css";

const SongList = ({ role, songs }) => {
  if (!songs.length) return <p className={styles.empty}>No songs found.</p>;

  return (
    <div className={styles.listContainer}>
      {songs.map((song) => (
        <div key={song.id} className={styles.songCard}>
          <div className={styles.details}>
            <h3 className={styles.title}>
              <span role="img" aria-label="music note" className={styles.icon}>
                🎵
              </span>
              {song.title}
            </h3>
            <p className={styles.meta}>
              <span role="img" aria-label="artist">
                🎤
              </span>{" "}
              {song.artist} &nbsp;|&nbsp;{" "}
              <span role="img" aria-label="album">
                💽
              </span>{" "}
              {song.album}
            </p>
          </div>
          {role === "admin" && (
            <div className={styles.actions}>
              <DeleteButton id={song.id} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SongList;
