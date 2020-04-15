import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { TweenMax, Power3 } from "gsap";

export default function Menu(props) {
  let menu = useRef(null);

  useEffect(() => {
    console.log(menu);
    TweenMax.from(menu, 1, {
      opacity: 1,
      y: "-100%",
      ease: Power3.easeOut
    });
  });
  return (
    <section
      className="menu"
      ref={el => {
        menu = el;
      }}
    >
      <div className="menu-container">
        <button className="close-menu" onClick={props.handleClick}>
          X
        </button>

        <nav role="navigation" className="menu-nav">
          <Link href="/">
            <a className="nav-link w-nav-link">Home</a>
          </Link>
          <Link href="/roster">
            <a className="nav-link w-nav-link">Roster</a>
          </Link>
          <Link href="/music">
            <a className="nav-link w-nav-link menu-link">Music</a>
          </Link>
          <Link href="/gamefilm">
            <a className="nav-link w-nav-link">GameFilm</a>
          </Link>
          <Link href="/about">
            <a className="nav-link w-nav-link">About</a>
          </Link>
          <Link href="/contact">
            <a className="nav-link w-nav-link">Contact</a>
          </Link>
        </nav>
      </div>
      <style jsx>{`
        .menu {
          width: 100%;
          height: 100vh;
          background-color: black;
          position: absolute;
          z-index: 100;
          overflow: hidden;
        }
        .menu-container {
          width: 100%;
          height: 100vh;
          background-color: black;
          position: fixed;
        }

        .menu-nav {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          justify-content: center;
          position: absolute;
          z-index: 2;
        }

        a {
          font-size: 50px;
        }

        .close-menu {
          color: white;
          background-color: black;
          font-size: 40px;
          position: absolute;
          right: 5%;
          top: 5%;
          z-index: 10;
          transition: 0.3s ease-in-out;
        }
        .close-menu:hover {
          color: red;
        }
      `}</style>
    </section>
  );
}
