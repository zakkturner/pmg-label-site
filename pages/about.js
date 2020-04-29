import Header from "../components/header.js";
import Footer from "../components/footer.js";

export default function About() {
  return (
    <section className="about-page">
      <Header />
      <div className="content-wrapper w-container"></div>
      <div className="section">
        <h1 className="page-title about-header">
          About <span className="head-span text-span-2">Us</span>
        </h1>
        <blockquote className="block-quote">
          The beauty isn&#x27;t in any particular type of art,
          <br /> but the use of art to inspire people, <br />
          to balance love, <br />
          wisdom
          <br /> and taste in a way that is so organic <br />
          and global that it becomes a lifestyle
        </blockquote>
      </div>
      <Footer />
      <style jsx>{`
        .about-page {
          height: 100vh;
        }
      `}</style>
    </section>
  );
}
