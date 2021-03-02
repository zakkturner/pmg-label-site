import styles from "./Bios.module.scss";

export default function Bios({ biosData }) {
  //   console.log(biosData.name);
  return (
    <>
      {/* <div className={styles.biosLeft}>
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
      </div> */}

      <div className={styles.bios}>
        <div className={styles.heading}>
          <h4 className={styles.title}>Player Info</h4>
        </div>
        <div className={styles.desc}>
          <ul className={styles.descTop}>
            <li className={styles.item}>
              <h6 className={styles.title}>Hometown</h6>
              <h5 className={styles.info}>{biosData.home}</h5>
            </li>
            <li className={styles.item}>
              <h6 className={styles.title}>Experience</h6>
              <h5 className={styles.info}>{biosData.exp}</h5>
            </li>
          </ul>
          <div className={styles.descBottom}>
            <p className={styles.bio}>{biosData.bio}</p>
          </div>
        </div>
      </div>
    </>
  );
}
