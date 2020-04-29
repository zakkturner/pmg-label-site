import React, { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "./menu.js";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
      console.log(1);
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
      console.log(2);
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });
      console.log(3);
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      className="nav-bar w-nav"
    >
      <Head>
        <script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5e7cf138d6fc4513ca1fca73"
          type="text/javascript"
          integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
          crossorigin="anonymous"
        ></script>
      </Head>
      <Head>
        <link
          href="https://use.fontawesome.com/releases/v5.0.2/css/all.css"
          rel="stylesheet"
        />
      </Head>
      <Menu state={state} />
      <div className="w-container">
        <Link href="/index">
          <a
            href="index.html"
            aria-current="page"
            className="brand-link w-nav-brand w--current"
          >
            <img
              src="./logo.png"
              width="117"
              srcSet="./images/logo-p-500.png 500w, images/logo.png 640w"
              sizes="117px"
              alt="logo"
              className="image"
            />
          </a>
        </Link>
        <style jsx>{`
          .brand-link {
            width: 100%;
            z-index: 100;
          }
        `}</style>
        <nav role="navigation" className="nav-menu w-nav-menu">
          <Link href="/roster">
            <a className="nav-link w-nav-link">Roster</a>
          </Link>
          <Link href="/music">
            <a className="nav-link w-nav-link">Music</a>
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
        <div
          className="menu-button w-clearfix w-nav-button"
          disabled={disabled}
          onClick={handleMenu}
        >
          <div className="menu-text">MENU</div>
          <div className="menu-icon w-icon-nav-menu"></div>
        </div>
        <style jsx>{`
          .menu-button {
            z-index: 100;
          }
        `}</style>
      </div>
    </div>
  );
}
