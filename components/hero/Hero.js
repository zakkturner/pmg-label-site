import { useEffect, useRef } from "react";
import styles from "./Hero.module.scss";

import { gsap } from "gsap/dist/gsap";
import { SplitText } from "gsap/dist/SplitText";
gsap.registerPlugin(SplitText);

export default function Hero() {
  let playoffs = useRef(null);
  let musicGroup = useRef(null);

  useEffect(() => {
    let playSplit = new SplitText(playoffs, { type: "words, chars" });
    let musicSplit = new SplitText(musicGroup, { type: "words, chars" });
    let tl = gsap.timeline();
    tl.from(playSplit.chars, 0.8, {
      y: -100,
      opacity: 0,
      stagger: 0.1,
      rotateX: "45deg",
      ease: "bounce.out",
      delay: 1,
    }).from(musicSplit.chars, {
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.1,
    });
  });

  return (
    <section className="hero section">
      <div className="hero-container w-container">
        <h1
          className="hero-heading"
          ref={(el) => {
            playoffs = el;
          }}
        >
          PlayOffS
        </h1>
        <h1
          className="hero-heading"
          ref={(el) => {
            musicGroup = el;
          }}
        >
          Music
          <span className="head-span text-span-2"> Group</span>
        </h1>
        {/* <Link href="/roster">
    <a className="button big w-button">View our Roster</a>
  </Link>
  <Link href="/music">
    <a className="button big w-button">Check Out Our Music</a>
  </Link> */}
      </div>
    </section>
  );
}
