import React, { useState } from "react";
import { SongProvider, useSongs } from "./context/SongContext";
import SongList from "./components/SongList";
import FilterSortGroupControls from "./components/FilterSortGroupControls";
import AddSongForm from "./components/AddSongForm";
import styles from "./MusicLibrary.module.css";

const MusicLibraryContent = ({ role }) => {
  const { songs } = useSongs();
  const [query, setQuery] = useState("");

  const filteredSongs = songs.filter((song) =>
    `${song.title} ${song.artist} ${song.album}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>🎧 Music Library</h2>
      <FilterSortGroupControls
        query={query}
        setQuery={setQuery}
        filteredCount={filteredSongs.length}
        total={songs.length}
      />
      {role === "admin" && <AddSongForm />}
      <SongList role={role} songs={filteredSongs} />
    </div>
  );
};

const MusicLibrary = ({ role }) => {
  return (
    <SongProvider>
      <MusicLibraryContent role={role} />
    </SongProvider>
  );
};

export default MusicLibrary;
