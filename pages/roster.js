import Header from "../components/header.js";
import Footer from "../components/Footer.js";

export default function Roster() {
  return (
    <div className="artist-page">
      <Header />
      <div className="content-wrapper w-container">
        <h1 className="page-title">
          Our <span className="head-span text-span-2">RoSter</span>
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
              <div className="slide-2 w-slide">
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
        `}
      </style>
    </div>
  );
}
