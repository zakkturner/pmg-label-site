import styles from "./RosterCard.module.scss";

export default function RosterCard({
  background,
  name,
  position,
  number,
  bgColor,
}) {
  return (
    <section className={styles.rosterCard} style={{ backgroundColor: bgColor }}>
      <div
        className={styles.rosterPic}
        style={{
          background: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className={styles.rosterDescription}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.descInfo}>
          <span className={styles.title}>{position} </span>• {number}
        </p>
        <p className={styles.descTeam}>Playoffs Music Group</p>
        <div className={styles.active}>Active</div>
      </div>
    </section>
  );
}
