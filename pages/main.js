import Header from "../components/header.js";
import Link from "next/link";
import ReactFullpage from "@fullpage/react-fullpage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// import "../public/styles/main.scss";

export default function Main() {
  const gameFilmData = [
    {
      id: 1,
      name: "Orange Beanie - Nice to Meet Me",
      url: "https://www.youtube.com/embed/PE0CafPKZr0",
    },
    {
      id: 2,
      name: "Orange Beanie - Mathbook",
      url: "https://www.youtube.com/embed/oyWMkP1BfHo",
    },
    {
      id: 3,
      name: "Orange Beanie - Designer Hubcaps",
      url: "https://www.youtube.com/embed/kxFlk4bTCVo",
    },
    {
      id: 4,
      name: "Orange Beanie - No Lease",
      url: "https://www.youtube.com/embed/uaALo5vvIuc",
    },
    {
      id: 5,
      name: "Orange Beanie - They 2",
      url: "https://www.youtube.com/embed/JSWGjf37hEs",
    },
    {
      id: 6,
      name: "Jerry Owens - Young Has Been",
      url: "https://www.youtube.com/embed/1qX-6RRImoY",
    },
    {
      id: 7,
      name: "Jerry Owens - Lonely",
      url: "https://www.youtube.com/embed/hEfr5DB4v8g",
    },
    {
      id: 8,
      name: "Jerry Owens - Edge of Madness",
      url: "https://www.youtube.com/embed/_n56k4TW3j4",
    },
    {
      id: 9,
      name: "Jerry Owens - Mundane Funday",
      url: "https://www.youtube.com/embed/3NAhy9yZfr8",
    },
  ];

  return (
    <>
      <Header />
      <ReactFullpage
        autoScrolling={true}
        navigation={true}
        anchors={["Home", "Roster", "Music", "Gamefilm", "Contact"]}
        navigationTooltips={["Home", "Roster", "Music", "Gamefilm", "Contact"]}
        slidesNavigation={true}
        showActiveTooltip={true}
        render={({ state, fullpageApi }) => {
          return (
            <>
              <section className="hero section">
                <div className="hero-container w-container">
                  <h1 className="hero-heading">
                    PlayOffS
                    <br />
                    Music <span className="head-span text-span-2">Group</span>
                  </h1>
                  {/* <Link href="/roster">
                    <a className="button big w-button">View our Roster</a>
                  </Link>
                  <Link href="/music">
                    <a className="button big w-button">Check Out Our Music</a>
                  </Link> */}
                </div>
              </section>
              <div className="artist-page section">
                <div className="content-wrapper w-container">
                  <h1 className="page-title">
                    Our <span className="head-span text-span-2">Roster</span>
                  </h1>
                  <div className="section-2">
                    <div className="w-layout-grid grid">
                      <div
                        id="w-node-c2d8d88ac434-49055390"
                        className="artist-box"
                      >
                        <div className="div-block-2">
                          <h2 className="heading">Orange Beanie</h2>
                        </div>
                      </div>
                      <div
                        id="w-node-584f6c6cbeae-49055390"
                        className="artist-box taco"
                      >
                        <div className="div-block-2">
                          <h2 className="heading">Jerry Owens</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      data-animation="slide"
                      data-duration="500"
                      data-infinite="1"
                      className="slider w-slider"
                    >
                      <div className="w-slider-mask">
                        <div className="slide w-slide">
                          <div className="div-block-3">
                            <h2 className="heading-2">
                              Orange <br />
                              Beanie
                            </h2>

                            <div className="div-block-4">
                              <a
                                href="#"
                                className="footer-link w-inline-block"
                              >
                                <img
                                  src="images/social-03-white.svg"
                                  width="23"
                                  alt=""
                                />
                              </a>
                              <a
                                href="#"
                                className="footer-link w-inline-block"
                              >
                                <img
                                  src="images/social-18-white.svg"
                                  width="23"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="slide-2 w-slide bio-slide">
                          <div className="div-block-3">
                            <h2 className="heading-2">Orange Beanie</h2>
                            <div className="social-links">
                              <a href="https://www.instagram.com/orangebeanie/">
                                <FontAwesomeIcon
                                  icon={faInstagram}
                                  width="20"
                                />
                              </a>
                              <a href="https://www.instagram.com/orangebeanie/">
                                <FontAwesomeIcon icon={faFacebook} width="20" />
                              </a>
                              <a href="https://twitter.com/OrangeBeanie_">
                                <FontAwesomeIcon icon={faTwitter} width="20" />
                              </a>
                            </div>
                            <div className="bio-container">
                              <p>
                                Orange Beanie is an emerging artist from
                                Indianapolis, IN. Due to his charismatic stage
                                presence and personality he’s been dubbed an
                                Odd-Ball and predominantly makes energetic music
                                for other Odd-Balls to enjoy. However that
                                doesn’t mean he’s a one trick pony, he can’t be
                                boxed in artistically and he’s eager to prove
                                it.
                              </p>
                            </div>

                            <div className="div-block-4">
                              <a
                                href="#"
                                className="footer-link w-inline-block"
                              >
                                <img
                                  src="images/social-03-white.svg"
                                  width="23"
                                  alt=""
                                />
                              </a>
                              <a
                                href="#"
                                className="footer-link w-inline-block"
                              >
                                <img
                                  src="images/social-18-white.svg"
                                  width="23"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="slide-3 w-slide">
                          <div className="div-block-3">
                            <h2 className="heading-2">
                              Jerry
                              <br />
                              Owens
                            </h2>
                            <div className="div-block-4">
                              <a
                                href="#"
                                className="footer-link w-inline-block"
                              >
                                <img
                                  src="images/social-03-white.svg"
                                  width="23"
                                  alt=""
                                />
                              </a>
                              <a
                                href="#"
                                className="footer-link w-inline-block"
                              >
                                <img
                                  src="images/social-18-white.svg"
                                  width="23"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="slide-4 w-slide bio-slide">
                          <div className="div-block-3">
                            <h2 className="heading-2">Jerry Owens</h2>
                            <div className="social-links">
                              <a href="https://www.instagram.com/taco_prince3/">
                                <FontAwesomeIcon
                                  icon={faInstagram}
                                  width="20"
                                />
                              </a>
                              <a href="https://www.facebook.com/YoJerryOwens/">
                                <FontAwesomeIcon icon={faFacebook} width="20" />
                              </a>
                              <a href="https://twitter.com/taco_prince3">
                                <FontAwesomeIcon icon={faTwitter} width="20" />
                              </a>
                            </div>
                            <div className="bio-container">
                              <p>
                                What is the Jerry Owens Experience? It's a
                                meditation. You may start with an inner
                                turbulence that boils through your body, but the
                                heat will transcend. It will transpire. It will
                                transgress. By the time it is supposed to reach
                                your toes, by the time you reach the last track
                                of the tape, it will have evaporated from you
                                and just be part of the air you breathe. It's
                                effortless in capturing the atmosphere, the
                                turmoil, the sensations.
                              </p>
                              <p>
                                It is a familiar road under your tires. (Old
                                Days) It is a park bench on a cloudy day, or a
                                windowsill for the rain. (Edge of madness) It is
                                harder and harder head bopping at the concert.
                                (Newbie) It is an experience that makes you
                                remember how wonderful music can be. (Dura)
                              </p>
                            </div>

                            <div className="div-block-4">
                              <a
                                href="#"
                                className="footer-link w-inline-block"
                              >
                                <img
                                  src="images/social-03-white.svg"
                                  width="23"
                                  alt=""
                                />
                              </a>
                              <a
                                href="#"
                                className="footer-link w-inline-block"
                              >
                                <img
                                  src="images/social-18-white.svg"
                                  width="23"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="left-arrow w-slider-arrow-left">
                        <div className="w-icon-slider-left"></div>
                      </div>
                      <div className="w-slider-arrow-right">
                        <div className="w-icon-slider-right"></div>
                      </div>
                      <div className="w-slider-nav w-round"></div>
                    </div>
                  </div>
                </div>

                <style jsx>
                  {`
                    #fp-nav ul li a span,
                    .fp-slidesNav ul li a span {
                      background: #fff !important;
                    }
                    .content-wrapper {
                      margin-top: 0;
                    }

                    .artist-page {
                      height: 100vh;
                    }
                    .div-block-3 {
                      display: flex;
                      flex-direction: column;
                    }
                    .bio-slide {
                      background-color: #000;
                    }

                    .bio-slide .heading-2 {
                      margin: 50px auto;
                    }

                    .social-links {
                       {
                        /* width: 25%; */
                      }
                      margin-bottom: 25px;
                      height: auto;
                      z-index: 2000;
                      display: flex;
                      justify-content: space-around;
                    }

                    .social-links a {
                      margin-right: 10px;
                      color: #fff;
                      transition: 0.4s ease-in-out;
                    }
                    .social-links a:hover {
                      color: #ec1c23;
                    }
                  `}
                </style>
              </div>
              <section className="music-page section">
                <div className="content-wrapper w-container">
                  <h1 className="page-title">
                    Latest <span className="head-span text-span-2">Albums</span>
                  </h1>
                </div>
                <div>
                  <div className="content w-container">
                    <div className="collection-list-wrapper w-dyn-list">
                      <div className="collection-list w-dyn-items">
                        <div className="w-dyn-item">
                          <div className="featured-track w-row">
                            <div className="w-col w-col-4">
                              <iframe
                                src="https://open.spotify.com/embed/album/2XPv8kMDaDzpOKT8rOEfXF?theme=white"
                                width="200"
                                height="280"
                                frameborder="0"
                                allowtransparency="true"
                                allow="encrypted-media"
                                className="w-inline-block"
                              ></iframe>
                            </div>
                            <div className="w-col w-col-8">
                              <div className="small-grey-text">Jerry Owens</div>
                              <h2 className="featured-title">Young Has Been</h2>
                              <p>2019</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="collection-list-wrapper-2 w-dyn-list">
                      <div className="collection-list w-dyn-items">
                        <div className="w-dyn-item">
                          <div className="featured-track w-row">
                            <div className="w-col w-col-4">
                              <iframe
                                src="https://open.spotify.com/embed/album/1XKYqX42urtlhtnLBEksD8?theme=white"
                                width="200"
                                height="280"
                                frameborder="0"
                                allowtransparency="true"
                                allow="encrypted-media"
                                className="w-inline-block"
                              ></iframe>
                            </div>
                            <div className="w-col w-col-8">
                              <div className="small-grey-text">
                                Orange Beanie
                              </div>
                              <h2 className="featured-title">Young Dad EP</h2>
                              <p>2018</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <style jsx>
                  {`
                    .collection-list-wrapper {
                      width: 100%;
                    }
                    .collection-list-wrapper-2 {
                      width: 100%;
                    }
                    .content {
                      padding: 0 20px;
                      align-items: flex-start;
                    }
                  `}
                </style>
              </section>

              <section className="gamefilm-page section">
                <div className="content-wrapper w-container">
                  <h1 className="page-title">
                    Game <span className="head-span text-span-2">Film</span>
                  </h1>
                  <div className="w-dyn-list list-container">
                    {gameFilmData.map((vid) => (
                      <div className="w-dyn-items grid-cell w-row">
                        <div className="collection-item w-dyn-item w-col w-col-4">
                          <h3 className="heading-3">{vid.name}</h3>

                          <iframe
                            width="300"
                            height="215"
                            src={`${vid.url}`}
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <style jsx>
                  {`
                    body {
                      height: 100vh;
                    }
                    .list-container {
                      display: grid;
                      grid-template-columns: 33% 33% 33%;
                      grid-gap: 1rem;
                      justify-content: center;
                      align-content: center;
                    }
                    .collection-item {
                      width: 100%;
                      display: flex;
                      flex-direction: column;
                      justfy-content: center !important;
                      align-content: center;
                    }
                    .grid-cell {
                      display: flex;

                      justify-content: center;
                      align-content: center;
                    }
                    .heading-3 {
                      font-family: Graduate, sans-serif;
                      width: 100%;
                      text-align: center;
                    }
                    iframe {
                      align-self: center;
                    }
                    @media only screen and (max-width: 768px) {
                      .list-container {
                        display: grid;
                        grid-template-columns: 1fr;
                        grid-gap: 1rem;
                        justify-content: center;
                        align-content: center;
                      }
                    }
                    @media only screen and (min-width: 769px) and (max-width: 1024px) {
                      .list-container {
                        display: grid;
                        grid-template-columns: 50% 50% !important;
                        grid-gap: 1rem;
                        justify-content: center;
                        align-content: center;
                      }
                    }
                  `}
                </style>
              </section>
              <div className="subpage-background section">
                <div className="section">
                  <div className="content-wrapper w-container">
                    <h1 className="page-title">
                      Get in{" "}
                      <span className="head-span text-span-2">Touch</span>
                    </h1>
                    <div className="div-block-5">
                      <h3 className="heading-4">Social Media</h3>
                      <div className="text-block contact-text">
                        <div className="social-links">
                          <a href="https://www.instagram.com/playoffsmusicgroup/">
                            <FontAwesomeIcon icon={faInstagram} width="20" />
                          </a>
                          <a href="https://www.facebook.com/lordblessedem/?__tn__=%2Cd%2CP-R&eid=ARATEgoCh23b-m84t6_tR19IXYyc0qrTPgVqvJWcsv_iWpe-z95Jl_2PZm2dD1XApAHFI1HiFgjWPqw9/">
                            <FontAwesomeIcon icon={faFacebook} width="20" />
                          </a>
                          <a href="https://twitter.com/OrangeBeanie_">
                            <FontAwesomeIcon icon={faTwitter} width="20" />
                          </a>
                        </div>
                      </div>
                      <h3 className="heading-4">Phone</h3>
                      <div className="text-block-2 contact-text">
                        317-490-8135
                      </div>
                      <h3 className="heading-4">Email</h3>
                      <div className="text-block-3 contact-text">
                        deward099@icloud.com
                      </div>
                    </div>
                  </div>
                </div>

                <style jsx>
                  {`
                    .subpage-background {
                      height: 100vh;
                    }
                    .social-links {
                      width: 25%;
                      margin: 0 auto;
                      margin-bottom: 25px;
                      height: auto;
                      z-index: 2000;
                      display: flex;
                      justify-content: space-around;
                    }

                    .social-links a {
                      margin-right: 10px;
                      color: #fff;
                      transition: 0.4s ease-in-out;
                    }
                    .social-links a:hover {
                      color: #ec1c23;
                    }
                  `}
                </style>
              </div>
            </>
          );
        }}
      />
    </>
  );
}
