import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";



function App() {
  return (
    <div>
      <NavBar />
      <Home name="Liza" city="New York" color="firebrick" />
      <About bio="I made this!"/>
    </div>
  );
}

export default App;
