import React from "react";
import Footer from './Footer';
//import { NavLink } from 'react-router-dom';

import NavBar from "./NavBar";

const About = props => {
  return (
    <div className="container">
      <NavBar />
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/projects">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
      <h3>About Me!</h3>

      <div className="circularPhoto" />
      <h3>Welcome To My Code Life Story</h3>
      <div className="about">
        <p>
          I am obsessed with making things happen, and even more interested on
          making things better.In my Software development career, I started
          development based on programming with Ruby Language plus Ruby on Rails
          framework, now looking for a role as a front-end or full-stack
          developer. I participated in different projects as a trainee at
          Sibesonke Ltd in Finland, where I trained and work as a software
          developer using Ruby and Ruby on Rails , building full tracing tool
          for customers in the company using Ruby and Ruby on rails framework. I
          had a great time to do functional and unit testing on the go.{" "}
        </p>

        <p>
          I have good communication skills and adaptability to different working
          environments. I am team player,highly driven and motivated person,
          hardworking, quick to learn with a positive attitude under pressure.
          At the moment i am specializing in front-end development at Integrify
          oy where i am more working with HTML5, CSS, JAVASCRIPT and
          ReactJS/Redux. I have good knowledge of using GIT(version control
          system),Mysql database, good with Regular expressions, using multiple
          editors e.g Visual studio code as one of my favourite at the moment,
          sublime, Atom and many more. As a graduate with a bachelor of
          engineering In Information Technology, I am able and flexible to do
          any IT-related job apart from specialized one above. My experience
          have taught me how to work with different tools and be able to adapt
          to new working environments.{" "}
        </p>

        <p>
          I have team work experience with different projects. I get along with
          different kinds of people and I am eager to learn new things to
          challenge myself. I am also interested in learning foreign languages,
          in this way building my understanding and experience of other cultures
          and communities. Currently I am excellent in Finnish language as i
          have been around the block for some time, apart from that I am fluent
          in written and spoken English .
        </p>
        <p>
          At my spare time, i like to take care of myself by doing different
          kind pf sports activities, one of my favourite is playing football as
          Americans call it soccer, couple of days in a week i like to go to the
          gym to maintain my fitness. During summer time you will always find me
          doing some evening jogging and long walks around the parks as it is
          beautiful out there.
        </p>
      </div>
      <Footer/>
    </div>
  );
};
export default About;
