import { useState } from "react";
import videobg from "../assets/videos/bg.mp4";
import "../Components/landing.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Landingpage = () => {
  const [zindex, setZindex] = useState("");
  const handlezindex = (value) => {
    setZindex(value);
  };
  let a = zindex === "z-index" ? "z-index" : "bg-text";
  let b = zindex === "z-index" ? "z-index" : "bg-para";
  return (
    <div className="main">
      <Navbar styles={handlezindex}></Navbar>
      <video src={videobg} autoPlay loop muted></video>
      <div className="content">
        <h1 className={a}>Welcome To Nutrifit</h1>
        <p className={b}>`Your Fitness Starts Here`</p>
        <div></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Landingpage;
