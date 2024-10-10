import React from "react";
import "./Home.css";
import VideoBg from "../components/video/background.mp4";
import laptopImage from "../components/imgs/sales.jpeg";


export const Home = () => {
  return (
    <div className="video-container">
      <video autoPlay muted loop className="background-video">
        <source src={VideoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay">
        <h1 className="main-heading">Enjoy Shopping at Enjoy</h1>
        <p className="sub-heading">
          Enjoy shopping, you can return the product to the company and have the
          order delivered on the same day.
        </p>
        <button
          className="shop-now-button"
          onClick={() => (window.location.href = "./Laptop")}
        >
          Shop Now
        </button>


      </div>
      <div className="hero-section">
          <img src={laptopImage} alt="Laptop" className="hero-section" />
          <div className="overLay-2">
          <div className="hero-overlay">
            <h1>Don't Miss Out on Our Exclusive Deals</h1>
            <button onClick={() => (window.location.href = "./sale")}>Discover More</button>
        </div>
        </div>


      </div>

      
    </div>
  );
};

export default Home;
