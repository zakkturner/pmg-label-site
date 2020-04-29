import Header from "../components/header.js";
import Footer from "../components/footer.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

export default function Roster() {
  return (
    <div className="artist-page">
      <Header />
      <div className="content-wrapper w-container">
        <h1 className="page-title">
          Our <span className="head-span text-span-2">Roster</span>
        </h1>
        <div className="section-2">
          <div className="w-layout-grid grid">
            <div id="w-node-c2d8d88ac434-49055390" className="artist-box">
              <div className="div-block-2">
                <h2 className="heading">Orange Beanie</h2>
              </div>
            </div>
            <div id="w-node-584f6c6cbeae-49055390" className="artist-box taco">
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
                    <a href="#" className="footer-link w-inline-block">
                      <img src="images/social-03-white.svg" width="23" alt="" />
                    </a>
                    <a href="#" className="footer-link w-inline-block">
                      <img src="images/social-18-white.svg" width="23" alt="" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="slide-2 w-slide bio-slide">
                <div className="div-block-3">
                  <h2 className="heading-2">Orange Beanie</h2>
                  <div className="social-links">
                    <a href="https://www.instagram.com/orangebeanie/">
                      <FontAwesomeIcon icon={faInstagram} width="20" />
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
                      Orange Beanie is an emerging artist from Indianapolis, IN.
                      Due to his charismatic stage presence and personality he’s
                      been dubbed an Odd.Ball and predominantly makes energetic
                      music for other Odd.Balls to enjoy L. However that doesn’t
                      mean he’s a one trick pony, he can’t be boxed in
                      artistically and he’s eager to prove it.
                    </p>
                  </div>

                  <div className="div-block-4">
                    <a href="#" className="footer-link w-inline-block">
                      <img src="images/social-03-white.svg" width="23" alt="" />
                    </a>
                    <a href="#" className="footer-link w-inline-block">
                      <img src="images/social-18-white.svg" width="23" alt="" />
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
                    <a href="#" className="footer-link w-inline-block">
                      <img src="images/social-03-white.svg" width="23" alt="" />
                    </a>
                    <a href="#" className="footer-link w-inline-block">
                      <img src="images/social-18-white.svg" width="23" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="slide-4 w-slide bio-slide">
                <div className="div-block-3">
                  <h2 className="heading-2">Jerry Owens</h2>
                  <div className="social-links">
                    <a href="https://www.instagram.com/taco_prince3/">
                      <FontAwesomeIcon icon={faInstagram} width="20" />
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
                      What is the Jerry Owens Experience? It's a meditation. You
                      may start with an inner turbulence that boils through your
                      body, but the heat will transcend. It will transpire. It
                      will transgress. By the time it is supposed to reach your
                      toes, by the time you reach the last track of the tape, it
                      will have evaporated from you and just be part of the air
                      you breathe. It's effortless in capturing the atmosphere,
                      the turmoil, the sensations.
                    </p>
                    <p>
                      It is a familiar road under your tires. (Old Days) It is a
                      park bench on a cloudy day, or a windowsill for the rain.
                      (Edge of madness) It is harder and harder head bopping at
                      the concert. (Newbie) It is an experience that makes you
                      remember how wonderful music can be. (Dura)
                    </p>
                  </div>

                  <div className="div-block-4">
                    <a href="#" className="footer-link w-inline-block">
                      <img src="images/social-03-white.svg" width="23" alt="" />
                    </a>
                    <a href="#" className="footer-link w-inline-block">
                      <img src="images/social-18-white.svg" width="23" alt="" />
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
      <Footer />
      <style jsx>
        {`
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
  );
}
