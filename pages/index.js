import Header from "../components/header.js";
import Link from "next/link";
import Hero from "../components/hero/Hero";
import ReactFullpage from "@fullpage/react-fullpage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Roster from "../components/roster/Roster.js";
// import "../public/styles/main.scss";

export default function Index() {
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
        autoScrolling={false}
        navigation={true}
        anchors={["Home", "Roster", "Music", "Gamefilm", "Contact"]}
        navigationTooltips={["Home", "Roster", "Music", "Gamefilm", "Contact"]}
        slidesNavigation={true}
        showActiveTooltip={true}
        render={({ state, fullpageApi }) => {
          return (
            <>
              <Hero />
              <Roster />
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
      <div className="music-player">
        <iframe
          src="https://open.spotify.com/embed/album/0lqjB8qpldQeT0SS7UVFsx"
          width="400"
          height="80"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
          className="w-inline-block"
        ></iframe>
      </div>
    </>
  );
}
