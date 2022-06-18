import React from "react";
import Logo from "../assets/logo-endless.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="headerImg" src={Logo} alt="Endless company logo" />
    </div>
  );
};

export default Header;
