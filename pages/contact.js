import Header from "../components/header.js";
import Footer from "../components/Footer.js";

export default function Contact() {
  return (
    <div className="subpage-background">
      <Header />
      <div className="section">
        <div className="content-wrapper w-container">
          <h1 className="page-title">Get in touch</h1>
          <div className="div-block-5">
            <h3 className="heading-4">Social Media</h3>
            <div className="text-block contact-text">
              Facebook Instagram etc
            </div>
            <h3 className="heading-4">Phone</h3>
            <div className="text-block-2 contact-text">317-490-8135</div>
            <h3 className="heading-4">Email</h3>
            <div className="text-block-3 contact-text">daveemail@gmail.com</div>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>
        {`
          .subpage-background {
            height: 100vh;
          }
        `}
      </style>
    </div>
  );
}
