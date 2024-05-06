import { Link } from "react-router-dom";
import "../Components/style.css";
import logo from "../assets/images/logo.png";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Navbar = (Props) => {
  const [openType, setOpenType] = useState(false);
  const [type, setType] = useState("");
  return (
    <>
      <div
        className="collapse"
        
        id="navbarToggleExternalContent"
      ></div>
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
              <button
                className="nav-link active text-white fs-5 hover"
                onClick={() => {
                  setOpenType(true);
                  setType("signup");
                  Props.styles("z-index");
                }}
              >
                Sign Up
              </button>
              <button
                className="nav-link active text-white fs-5 hover"
                onClick={() => {
                  setOpenType(true);
                  setType("");
                  Props.styles("z-index");
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Signup open={openType} setType={setOpenType} type={type}></Signup>
      <Login open={openType} setType={setOpenType} type={type}></Login>
    </>
  );
};

export default Navbar;
