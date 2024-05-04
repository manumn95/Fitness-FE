import videobg from "../assets/videos/bg.mp4";
import "../Components/landing.css";
import Navbar from "./Navbar";
const Landingpage = () => {
  return (
    <div className="main">
      <Navbar></Navbar>
      <video src={videobg} autoPlay loop muted></video>
      <div className="content">
        <h1 className="bg-text mt-4 ">Welcome To Nutrifit</h1>
        <p className="bg-para">`Your Fitness Starts Here`</p>
      </div>
    </div>
  );
};

export default Landingpage;
