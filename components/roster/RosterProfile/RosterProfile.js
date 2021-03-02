import styles from "./RosterProfile.module.scss";
import { useState } from "react";
import Stats from "../Stats/Stats";
import Bios from "../Bios/Bios";
export default function RosterProfile({ albumData, biosData }) {
  const [index, setIndex] = useState(0);

  const tabs = [{ name: "Stats" }, { name: "Bio" }];

  const handleClick = (i) => {
    setIndex(i);
  };

  return (
    <div className={styles.rProfile}>
      <div className={styles.navContainer}>
        <ul className={styles.subNav}>
          {tabs.map((tab, i) => {
            return (
              <li
                className={
                  index === i
                    ? `${styles.item} ${styles.active}`
                    : `${styles.item}  `
                }
                onClick={() => handleClick(i)}
              >
                {tab.name}
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.profileContainer}>
        {index === 0 && (
          <div className={styles.statsContainer}>
            <Stats albumData={albumData} />
          </div>
        )}
        {index === 1 && (
          <div className={styles.biosContainer}>
            <Bios biosData={biosData} />
          </div>
        )}
      </div>
    </div>
  );
}
