import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';
import image7 from './images/image7.jpg';
import image8 from './images/image8.jpg';
import { Element } from 'react-scroll';

const Projects = () => {
  const projects = [
    { id: 1, height: 400, image: image1, description: 'Slide-5' },
    { id: 2, height: 400, image: image2, description: 'In Progress' },
    { id: 3, height: 400, image: image3, description: 'In Progress' },
    { id: 4, height: 400, image: image4, description: 'In Progress' },
    { id: 5, height: 400, image: image5, description: 'In Progress' },
    { id: 6, height: 400, image: image6, description: 'In Progress' },
    { id: 7, height: 400, image: image7, description: 'In Progress' },
    { id: 8, height: 400, image: image8, description: 'In Progress' },
  ];

  return (
    <Element name="projects" className="element projects">
      <section className="projects">
        <h2>My Projects</h2>
        <div className="project-columns">
          {projects.map(project => (
            <div className="project-box" style={{ backgroundImage: `url(${project.image})`, height: `${project.height}px` }} key={project.id}>
              <Link to={`/project${project.id}`}>
                <div className="project-description">{project.description}</div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
}

export default Projects;
