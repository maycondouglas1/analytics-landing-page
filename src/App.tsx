import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Analytics from "./containers/Analytics";
import Hero from "./containers/Hero";
import Newsletter from "./containers/Newsletter";

function App() {
  
  return (
    <div className="App">
      <Navbar /> 
      <Hero />
      <Analytics />
      <Newsletter />
    </div>
  );
}

export default App;
