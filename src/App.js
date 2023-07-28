import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Parallax from './Parallax';
import Contact from './Contact';

// Import your project components
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import Project5 from './Project5';
import Project6 from './Project6';
import Project7 from './Project7';
import Project8 from './Project8';
// ... import all your project components

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/project4" element={<Project4 />} />
          <Route path="/project5" element={<Project5 />} />
          <Route path="/project6" element={<Project6 />} />
          <Route path="/project7" element={<Project7 />} />
          <Route path="/project8" element={<Project8 />} />
          {/* ... include all your project routes */}
          <Route path="/" element={
            <>
              <About />
              <AboutMe />
              <Projects />
              <Parallax />
              <Contact />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
