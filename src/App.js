import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Aboutme from "./components/AboutHarish"
import Contactme from "../src/components/ContactMe"
import video from "./assets/background.mp4"
import Skills from "./components/Skills"


function App() {
  return (
    <div className="App">
      <div className="video-container">
        <video loop id="myVideo" className="background" src={video} autoPlay muted preload="auto"></video>
        <div className="overlay"></div>
      </div>
      <Navbar/>
      <Home/>
      <Aboutme/>
      <Projects/>
      <Skills/>
      <Contactme/>
    </div>
  );
}

export default App;
