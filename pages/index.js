import Header from "../components/header.js";

export default function Index() {
  return (
    <section className="hero">
      <Header />
      <div className="hero-container w-container">
        <h1 className="hero-heading">
          PlayOffS
          <br />
          Music <span className="text-span">Group</span>
        </h1>
        <a href="music.html" className="button big w-button">
          View our Artist
        </a>
        <a href="tour.html" className="button big w-button">
          Check Out Our Music
        </a>
      </div>
    </section>
  );
}
