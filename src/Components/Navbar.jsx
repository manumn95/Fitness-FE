import "../Components/style.css";
import logo from "../assets/images/logo.png";
const Navbar = () => {
  return (
    <>
      <div className="collapse" id="navbarToggleExternalContent"></div>
      <nav className="navbar navbar-expand-lg navbar fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#!">
            <img src={logo} className="nav-logo"></img>
          </a>
          <button
            className="navbar-toggler  nav-bg"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ">
              <li className="nav-item">
                <a
                  className="nav-link active text-white fs-5"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-white fs-5"
                  aria-current="page"
                  href="/"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-white fs-5"
                  aria-current="page"
                  href="/"
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="d-flex gap-5 ">
              <a className="nav-link active text-white fs-5" href="">
                Sign Up
              </a>
              <a className="nav-link active text-white fs-5" href="">
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
