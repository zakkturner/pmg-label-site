import Header from "../components/header.js";
import Footer from "../components/footer.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div className="subpage-background">
      <Header />
      <div className="section">
        <div className="content-wrapper w-container">
          <h1 className="page-title">
            Get in <span className="head-span text-span-2">Touch</span>
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
            <div className="text-block-2 contact-text">317-490-8135</div>
            <h3 className="heading-4">Email</h3>
            <div className="text-block-3 contact-text">
              deward099@icloud.com
            </div>
          </div>
        </div>
      </div>
      <Footer />
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
  );
}
