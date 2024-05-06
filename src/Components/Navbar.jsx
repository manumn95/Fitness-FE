import { Link } from "react-router-dom";
import "../Components/style.css";
import logo from "../assets/images/logo.png";
import { useState } from "react";
import Login from "./Login";

const Navbar = (Props) => {
  const [openType, setOpenType] = useState(false);
  return (
    <>
      <div className="collapse" id="navbarToggleExternalContent"></div>
      <nav className="navbar navbar-expand-lg navbar fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#!">
            <img src={logo} className="nav-logo"></img>
            <span>
              <a className="text-decoration-none text-white fs-5" href="">
                Nutrifit
              </a>
            </span>
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
                <Link
                  className="nav-link active text-white fs-5 hover"
                  aria-current="page"
                  to="#myid"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-white fs-5 hover"
                  aria-current="page"
                  href="/"
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="d-flex gap-5 ">
              <Link
                className="nav-link active text-white fs-5 hover"
                to="/Signup"
              >
                Sign Up
              </Link>
              <button
                className="nav-link active text-white fs-5 hover"
                onClick={() => {
                  setOpenType(true);
                  Props.styles("z-index");
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Login open={openType} setType={setOpenType}></Login>
    </>
  );
};

export default Navbar;
