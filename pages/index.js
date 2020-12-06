import Header from "../components/header.js";
import Link from "next/link";

export default function Index() {
  return (
    <section className="hero">
      <Header />
      <div className="hero-container w-container">
        <h1 className="hero-heading">
          PlayOffS
          <br />
          Music <span className="head-span text-span-2">Group</span>
        </h1>
        <Link href="/roster">
          <a className="button big w-button">View our Roster</a>
        </Link>
        <Link href="/music">
          <a className="button big w-button">Check Out Our Music</a>
        </Link>
      </div>
    </section>
  );
}
