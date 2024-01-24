import React from 'react';
import './Project1.css';
import slide5 from './images/slide5.jpeg';
import { useNavigate } from 'react-router-dom';


const Project1 = () => {
  const navigate = useNavigate();

  const goBackToProjects = () => {
    navigate('..'); // Adjust the hash to match the ID of your Projects section
  };
  return (
    <div className="project-cont">
      <div className="project-desc">
        <h1>Slide-5</h1>
        <p>Slide-5 is a board game similar to connect-4 where the board is oriented on its corner and you can insert pieces
          from either the top left or the top right. Pieces are pushed down a slot when inserting and pieces can overflow out the bottom.
          <br/>
          <br/>
          For this project, I strongly solved Slide-5 using the Retrograde solver
          and splitting the game into tiers. I used python and C to traverse and solve for all
          tiers and positions. Also designed and implemented the GUI for Slide-5.
          <br/>
          <br/>
          - Tiers solved: 329,462
          <br/>
          - Tier positions solved: 77,834,825,526
          <br/>
          - Designed and implemented the GUI for Slide-5.
          <br/>
          <br/>
          <br/>
          <br/>
          To check out my game, please visit:
          <br/>
          <br/>
                  <a className="slide5-link" href="https://nyc.cs.berkeley.edu/uni/games/slide5/variants" target="_blank" rel="noopener noreferrer">
                     Gamescrafters website
                  </a>

        </p>
        
      </div>
      <div className="project-img">
        <img src={slide5} alt="Project 1" />
      </div>
      <button className="back-button" onClick={goBackToProjects}>Back to Projects</button>
    </div>
  );
};

export default Project1;
