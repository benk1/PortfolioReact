import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from './Footer';

const Home = props => {
  console.log(props);
  return (
    <>
      <NavBar />
      <div className="kilimanjaro">
        <div className="text">
          <h3>
            <span className="highlighted">Hey! I'm Bernard!</span>
          </h3>
          <p>
            I am a front-end developer, I really enjoy developing Apps using
            front-end Technologies, since my graduation in University of applied
            science in Finland-Helsinki, I have been involved in multiple IT
            projects, but this time I am in a phase of my career where I want to be very
            close to the user and this is to why i pursue this phase of
            front-end development.Beyond the web-development I am currently
            enjoying web-designing as well.These are technologies I have been involved with so far:
            <ul>
              <li>HTML / CSS</li>
              <li>Javascript / ES6</li>
              <li>Node.js/Express/MongoDB</li>
              <li>Typescript/Flow-Type checking</li>
              <li>React / Redux</li>
              <li>Ruby / Ruby on Rails</li>
              <li>MySQL</li>
              <li>Flexbox / Bootstrap / Reactstrap</li>
              <li>Sass</li>
              <li>Linux OS</li>
              <li>Git/Github</li>
              <li>Regular Expressions</li>
            </ul>
            <h4>Check out what I have been up to:</h4>
          </p>

          <div className="Links">
            <NavLink to="/about">
              <button type="button" className="btn btn-primary">
                ABOUT
              </button>
            </NavLink>

            <NavLink to="/projects">
              <button type="button" className="btn btn-primary">
                PROJECTS
              </button>
            </NavLink>

            <NavLink to="/contact">
              <button type="button" className="btn btn-primary">
                CONTACT
              </button>
            </NavLink>
           
          </div>
        </div>
        <Footer/>
      </div>
     
    </>
  );
};
export default Home;
