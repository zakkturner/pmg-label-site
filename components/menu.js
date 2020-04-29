import React, { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function Menu({ state }) {
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      // close menu
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07
        }
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" }
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // open menu
      gsap.to(menu, {
        duration: 0,
        css: { display: "block" }
      });
      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(revealMenuBackground, revealMenu);
    }
  }, [state]);

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,

      ease: "power3.inOut",
      stagger: {
        amount: 0.02
      }
    });
  };
  return (
    <section
      ref={el => {
        menu = el;
      }}
      className="menu"
    >
      <div
        ref={el => {
          revealMenuBackground = el;
        }}
        className="menu-wrapper"
      >
        <div
          ref={el => {
            revealMenu = el;
          }}
          className="menu-container"
        >
          <nav role="navigation" className="menu-nav">
            <Link href="/index">
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
      </div>
      <style jsx>{`
        .menu {
          display: none;
          z-index: 9;
          top: 0;
          left: 0;
          right: 0;
          position: fixed;
          height: 100%;
          width: 100%;
        }
        .menu-button {
          position: absolute;
          z-index: 20;
          right: 10%;
          top: 50%;
        }
        .menu-wrapper {
          width: 100%;
          height: 100%;
          background-color: black;
          position: absolute;
           {
            /* z-index: 100; */
          }
          overflow: hidden;
        }
        .menu-container {
          width: 100%;
          height: 100vh;
          background-color: black;
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
          transition: 0.4s ease-in-out;
        }

        a:hover {
          color: #ec1c23;
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
