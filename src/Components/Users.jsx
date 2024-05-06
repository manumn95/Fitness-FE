import { Link, Outlet } from "react-router-dom";
import "../Components/style.css";
import logo from "../assets/images/logo-white.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./Footer";
const Users = () => {
  return (
    <div className="user-bg">
      <div className="collapse" id="navbarToggleExternalContent"></div>
      <nav className="navbar navbar-expand-lg navbar ">
        <div className="container">
          <a className="navbar-brand" href="#!">
            <img
              src={logo}
              className="nav-logo"
              style={{ width: "70px" }}
            ></img>
            <span>
              <a className="text-decoration-none text-white fs-5 ms-2" href="/">
                Nutrifit
              </a>
            </span>
          </a>
          <button
            className="navbar-toggler bg-white"
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
                <button
                  className="nav-link active text-white fs-5 hover"
                  aria-current="page"
                  to="#myid"
                ></button>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-white fs-5 hover"
                  aria-current="page"
                  href="/"
                ></a>
              </li>
            </ul>

            <div className="d-flex gap-5 ">
              <i className="bi bi-person-circle fs-4 text-white"> @manumn</i>
              <button className=" btn btn-danger hover">Logout</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container d-flex gap-5">
        <Link className="text-white mt-5 " to="home">
          Fitness Goals
        </Link>
        <Link className="text-white mt-5 " to="">
          Diet Plans
        </Link>
        <Link className="text-white mt-5 " to="">
          History
        </Link>
        <Link className="text-white mt-5 " to="">
          Activities
        </Link>
        <div className="mt-5"></div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Users;
