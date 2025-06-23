import React from "react";
import styles from "./FilterSortGroupControls.module.css";

const FilterSortGroupControls = ({ query, setQuery, filteredCount, total }) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="🔍 Search by title, artist or album..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.input}
      />
      <p className={styles.summary}>
        Showing <strong>{filteredCount}</strong> of <strong>{total}</strong>{" "}
        songs
      </p>
    </div>
  );
};

export default FilterSortGroupControls;
