import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Analytics from "./containers/Analytics";
import Hero from "./containers/Hero";

function App() {
  
  return (
    <div className="App">
      <Navbar /> 
      <Hero />
      <Analytics />
    </div>
  );
}

export default App;
