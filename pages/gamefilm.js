import Header from "../components/header.js";
import Footer from "../components/footer.js";

const gameFilmData = [
  {
    id: 1,
    name: "Orange Beanie - Nice to Meet Me",
    url: "https://www.youtube.com/embed/PE0CafPKZr0"
  },
  {
    id: 2,
    name: "Orange Beanie - Mathbook",
    url: "https://www.youtube.com/embed/oyWMkP1BfHo"
  },
  {
    id: 3,
    name: "Orange Beanie - Designer Hubcaps",
    url: "https://www.youtube.com/embed/kxFlk4bTCVo"
  },
  {
    id: 4,
    name: "Orange Beanie - No Lease",
    url: "https://www.youtube.com/embed/uaALo5vvIuc"
  },
  {
    id: 5,
    name: "Orange Beanie - They 2",
    url: "https://www.youtube.com/embed/kxFlk4bTCVo"
  },
  {
    id: 6,
    name: "Jerry Owens - Young Has Been",
    url: "https://www.youtube.com/embed/1qX-6RRImoY"
  },
  {
    id: 7,
    name: "Jerry Owens - Lonely",
    url: "https://www.youtube.com/embed/hEfr5DB4v8g"
  },
  {
    id: 8,
    name: "Jerry Owens - Edge of Madness",
    url: "https://www.youtube.com/embed/_n56k4TW3j4"
  },
  {
    id: 9,
    name: "Jerry Owens - Mundane Funday",
    url: "https://www.youtube.com/embed/3NAhy9yZfr8"
  }
];

const GameFilm = () => {
  return (
    <section className="gamefilm-page">
      <Header />
      <div className="content-wrapper w-container">
        <h1 className="page-title">
          Game <span className="head-span text-span-2">Film</span>
        </h1>
        <div className="w-dyn-list list-container">
          {gameFilmData.map(vid => (
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

      <Footer />
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
  );
};

export default GameFilm;
