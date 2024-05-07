import { Link, NavLink } from "react-router-dom";
import "../Components/style.css";
import logo from "../assets/images/logo-white.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { counts } from "./Utils/data";
import Footer from "./Footer";
import CountsCard from "./Cards/CountsCard";

const Dashboard = () => {
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
              <Link
                className="text-decoration-none text-white fs-5 ms-2"
                to="home"
              >
                Nutrifit
              </Link>
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

      <navitem className=" container d-flex gap-5  ">
        <NavLink className="nav-link link-hover " to="/">
          Dashboard
        </NavLink>
        <NavLink className="nav-link link-hover " to="/workouts">
          Workouts
        </NavLink>
      </navitem>
      <div></div>

      <div>
        <h1 className="text-center text-white mt-5">Dashboard</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          {counts.map((item, index) => {
            return (
              <div key={index} className="col-md-4">
                <CountsCard key={index} item={item}></CountsCard>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Dashboard;
