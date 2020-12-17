import styles from "./Bios.module.scss";

export default function Bios({ biosData }) {
  //   console.log(biosData.name);
  return (
    <>
      <div className={styles.biosLeft}>
        <h3 className={styles.title}>Player Info</h3>
        <ul className={styles.infoList}>
          <li className={styles.item}>
            <span className={styles.infoTitle}>Hometown</span>
            <h5 className={styles.info}>{biosData.home}</h5>
          </li>
          <li className={styles.item}>
            <span className={styles.infoTitle}>Experience</span>
            <h5 className={styles.info}>{biosData.exp}</h5>
          </li>
        </ul>
      </div>
      <div className={styles.biosRight}>
        <p className={styles.bio}>{biosData.bio}</p>
      </div>
    </>
  );
}
