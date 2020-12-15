import styles from "./RosterProfile.module.scss";
import { albumData } from "./data/albumData";
export default function RosterProfile() {
  console.log(albumData);
  return (
    <div className={styles.rProfile}>
      <div className={styles.navContainer}>
        <ul className={styles.subNav}>
          <li className={styles.item}>Profile</li>
          <li className={styles.item}>Stats</li>
          <li className={styles.item}>Bio</li>
          <li className={styles.item}>Videos</li>
        </ul>
      </div>

      <div className={styles.statsContainer}>
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
          <tbody>{/* <tr className={styles.}></tr> */}</tbody>
        </table>
      </div>
    </div>
  );
}
