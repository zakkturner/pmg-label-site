import Head from "next/head";

export default function Footer() {
  return (
    <div class="footer">
      <div class="w-container">
        <a href="#" class="footer-link w-inline-block">
          <img src="images/social-03-white.svg" width="23" alt="" />
        </a>
        <a href="#" class="footer-link w-inline-block">
          <img src="images/social-18-white.svg" width="23" alt="" />
        </a>
        <a href="#" class="footer-link w-inline-block">
          <img src="images/social-16-white.svg" width="23" alt="" />
        </a>
        <a href="#" class="footer-link w-inline-block">
          <img src="images/social-17-white.svg" width="23" alt="" />
        </a>
        <div class="footer-text">
          &copy;Copyright 2020{" "}
          <a href="https://linktr.ee/playoffsmusicgroup">
            Playoffs Music Group
          </a>
        </div>
      </div>
      <Head>
        <script src="./js/webflow.js" type="text/javascript"></script>
      </Head>
      <style jsx>{`
        a {
          color: white;
          transition: 0.4s ease-in-out;
        }
        a:hover {
          color: #ec1c23;
        }
      `}</style>
    </div>
  );
}
