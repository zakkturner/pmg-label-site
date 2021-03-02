import styles from "./Stats.module.scss";
export default function Stats({ albumData }) {
  return (
    <table className={styles.statsTable}>
      <thead>
        <tr>
          <th className={styles.first}>Year</th>
          <th className={styles.text}>Album</th>
          <th className={styles.text}>Songs</th>
          <th className={styles.text}>Videos</th>
          <th className={styles.text}>Singles</th>
        </tr>
      </thead>
      <tbody>
        {albumData &&
          albumData.map((album) => {
            return (
              <tr className={styles.albumData}>
                <td>{album.year}</td>
                <td>{album.name}</td>
                <td>{album.songs}</td>
                <td>{album.videos}</td>
                <td>{album.singles}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
