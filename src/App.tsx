import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Analytics from "./containers/Analytics";
import Cards from "./containers/Cards";
import Hero from "./containers/Hero";
import Newsletter from "./containers/Newsletter";

function App() {
  
  return (
    <div className="App">
      <Navbar /> 
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
    </div>
  );
}

export default App;
