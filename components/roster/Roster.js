import { useEffect, useRef } from "react";

import styles from "./Roster.module.scss";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import RosterCard from "./RosterCard";

gsap.registerPlugin(ScrollTrigger);
import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import RosterProfile from "./RosterProfile";

export default function Roster() {
  let one = useRef(null);
  let two = useRef(null);
  let three = useRef(null);
  let four = useRef(null);
  let roster = useRef(null);
  useEffect(() => {
    let sections = [one, two, three, four];

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: roster,
        // markers: true,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        start: "top top",
        end: () => "+=" + document.querySelector("#roster").offsetWidth,
      },
    });
  });
  return (
    <section
      id="roster"
      className={` ${styles.roster} section`}
      ref={(el) => {
        roster = el;
      }}
    >
      <div
        className={`${styles.panel} ${styles.one}`}
        ref={(el) => {
          one = el;
        }}
      >
        <h2 className={styles.rosterTitle}>Our Roster</h2>
      </div>
      <div
        className={`${styles.panel} ${styles.player}`}
        ref={(el) => {
          two = el;
        }}
      >
        <RosterCard
          background="images/obHeadshot.png"
          name="Orange Beanie"
          position="Rapper"
          number="#16"
          bgColor="#006BB6"
        />
        <RosterProfile />
      </div>
      <div
        className={`${styles.panel} ${styles.player}`}
        ref={(el) => {
          three = el;
        }}
      >
        <RosterCard
          background="images/johs.png"
          name="Jerry Owens"
          position="Rapper"
          number="#3"
          bgColor="#ce1141"
        />
        <RosterProfile />
      </div>
      <div
        className={`${styles.panel} ${styles.player}`}
        ref={(el) => {
          four = el;
        }}
      >
        <RosterCard
          background="images/obHeadshot.png"
          name="Lord Ward"
          position="Producer"
          number="#2"
          bgColor="#552583"
        />
        <RosterProfile />
      </div>
    </section>
  );
}
