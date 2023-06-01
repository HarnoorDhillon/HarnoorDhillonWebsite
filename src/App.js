import React from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Parallax from './Parallax';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <AboutMe />
      <Projects />
      <Parallax />
      <Contact />
    </div>
  );
}

export default App;
