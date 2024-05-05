import "../Components/landing.css";
import logo from "../assets/images/logo-white.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import appstore from "../assets/images/appstore.png";
import playstore from "../assets/images/playstore.png";
import "../Components/style.css";
const Footer = () => {
  return (
    <div>
      <div className="conatiner ">
        <div className="row">
          <div className="col-md-4 p-4">
            <img src={logo} style={{ width: "100px" }}></img>
            <span className="text-white fs-3">Nutrifit</span>
            <p className="ms-5" style={{ color: "lightgrey" }}>
              At Nutrifit, we make group workouts fun, daily food healthy &
              tasty, mental fitness easy with yoga & meditation, Medical &
              lifestyle care hassle-free.#BeBetterEveryDay
            </p>
          </div>
          <div className="col-md-4 p-3 " style={{ color: "lightgrey" }}>
            <form className="p-5 ms-auto">
              <h4 className="text-center mb-4">Contact Us</h4>
              <div className="pt-0 mb-3 rounded">
                <input
                  style={{ width: "100%" }}
                  className="rounded p-2"
                  type="email"
                  placeholder="Email"
                  name="email"
                ></input>
              </div>
              <div className="pt-0 mb-3 rounded">
                <input
                  className="rounded p-2"
                  type="Number"
                  placeholder="Phone"
                  name="email"
                  style={{ width: "100%" }}
                ></input>
              </div>
              <div className="pt-0 mb-3 rounded">
                <textarea
                  className="rounded p-2"
                  type="Number"
                  placeholder="Message"
                  name="email"
                  style={{ width: "100%" }}
                ></textarea>
              </div>
              <div className="pt-0 mb-3 rounded">
                <button
                  className=" btn  text-white border btn-hover rounded"
                  type="Number"
                  placeholder="Phone"
                  name="email"
                  style={{ width: "100%" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-4 mb-md-5 d-flex justify-content-center align-items-center flex-column ">
            <div className="d-flex justify-content-center align-items-center flex-column mt-md-5">
              <img
                className="mt-5 mb-3"
                src={appstore}
                style={{ width: "50%" }}
              ></img>
              <img
                className="mt-2 mb-3"
                src={playstore}
                style={{ width: "50%" }}
              ></img>
            </div>

            <div className="d-flex justify-content-center align-items-center gap-3 text-secondary fs-3">
              <i className="bi bi-facebook  "></i>
              <i className="bi bi-twitter "></i>
              <i className="bi bi-instagram "></i>
              <i className="bi bi-youtube "></i>
              <i className="bi bi-linkedin f"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
