import React from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import AboutMe from './AboutMe';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
