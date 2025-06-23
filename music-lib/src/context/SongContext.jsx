import { createContext, useContext, useReducer } from "react";

const SongContext = createContext();

const initialSongs = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
  },
  { id: 2, title: "Shape of You", artist: "Ed Sheeran", album: "Divide" },
  { id: 3, title: "Believer", artist: "Imagine Dragons", album: "Evolve" },
];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_SONG":
      return [...state, { id: Date.now(), ...action.payload }];
    case "DELETE_SONG":
      return state.filter((song) => song.id !== action.payload);
    default:
      return state;
  }
}

export function SongProvider({ children }) {
  const [songs, dispatch] = useReducer(reducer, initialSongs);
  const addSong = (song) => dispatch({ type: "ADD_SONG", payload: song });
  const deleteSong = (id) => dispatch({ type: "DELETE_SONG", payload: id });

  return (
    <SongContext.Provider value={{ songs, addSong, deleteSong }}>
      {children}
    </SongContext.Provider>
  );
}

export function useSongs() {
  return useContext(SongContext);
}
