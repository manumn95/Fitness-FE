import slide1 from "../assets/images/1.webp";
import slide2 from "../assets/images/2.jpg";
import slide3 from "../assets/images/3.webp";
import quotes1 from "../assets/images/quotes1.jpg";
import quotes2 from "../assets/images/quotes2.jpg";
import quotes3 from "../assets/images/quotes3.jpg";
import quotes4 from "../assets/images/quotes4.jpg";
const Home = () => {
  return (
    <>
      <div className="container mt-3">
        <h1 className="text-center text-info">welcome back @manumn</h1>
      </div>
      <div className="mt-4">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={slide1}
                className="d-block w-100"
                alt="..."
                style={{ height: "350px" }}
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src={slide2}
                className="d-block w-100 "
                alt="..."
                style={{ height: "350px" }}
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src={slide3}
                className="d-block w-100 "
                alt="..."
                style={{ height: "350px" }}
              ></img>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container mt-5 mb-5 d-flex gap-2">
          <div className="card" style={{ width: "18rem" }}>
            <img src={quotes1} className="card-img-top" alt="..."></img>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={quotes2} className="card-img-top" alt="..."></img>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={quotes3} className="card-img-top" alt="..."></img>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={quotes4} className="card-img-top" alt="..."></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
