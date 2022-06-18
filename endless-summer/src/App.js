import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Guide from "./components/Guide";
import Logo from "../src/assets/logo-endless.svg";

function App() {
  return (
    <div className="endlessApp">

    <Header></Header>

      <Hero></Hero>

      <Guide></Guide>
    </div>
  );
}

export default App;
