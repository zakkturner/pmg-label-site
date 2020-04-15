import React, { Component } from "react";
import Link from "next/link";
import Menu from "./menu.js";
import { gsap } from "gsap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isActive: !state.isActive
    }));
  }

  render() {
    const isActive = this.state.isActive;
    return (
      <div
        data-collapse="medium"
        data-animation="default"
        data-duration="400"
        className="nav-bar w-nav"
      >
        {isActive ? <Menu handleClick={this.handleClick} /> : ""}

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
            onClick={this.handleClick}
          >
            <div className="menu-text">MENU</div>
            <div className="menu-icon w-icon-nav-menu"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
