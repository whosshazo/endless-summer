import React from "react";
import BackgroundImg from "../assets/photo-couch.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img
        className="heroBackground"
        src={BackgroundImg}
        alt="Two friends playing games"
      />

      <div className="heroInfo">
        <p>New Games & Accessories</p>

        <p>
          Monthly packages. <br /> Excitement delivered daily.
        </p>

        <p>
          What's the best way to shop for the latest video games <br /> and
          peripherals? How about never shopping at all? <br /> You'll get new
          stuff on your doorstep - every month.
        </p>

        <button className="getStartedBtn">GET STARTED</button>
      </div>
    </div>
  );
};

export default Hero;
