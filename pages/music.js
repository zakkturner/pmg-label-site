import Header from "../components/header.js";
import Footer from "../components/footer.js";

export default function Music() {
  return (
    <section className="music-page">
      <Header />

      <div className="content-wrapper w-container">
        <h1 className="page-title">
          Latest <span className="head-span text-span-2">Albums</span>
        </h1>
      </div>
      <div className="section">
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
                    <div className="small-grey-text">Orange Beanie</div>
                    <h2 className="featured-title">Young Dad EP</h2>
                    <p>2018</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
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
  );
}
