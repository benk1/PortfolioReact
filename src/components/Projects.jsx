import React, { Component } from "react";
import "font-awesome/css/font-awesome.css";
import NavBar from "./NavBar";
import Footer from './Footer';

class Projects extends Component {
  render() {
    return (
      <div className="big-container">
      <NavBar/>
        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav> */}

        <h3>Code Projects</h3>
        <div className="projects-container">
          <div className="project-1">
            <h5>
              <a
                className="project-link"
                href="https://github.com/benk1/react-crypto-currency-"
              >
                Cryptocurrency
              </a>
            </h5>
            <p>Reactjs App powered by Bootsrap</p>
    <div><i class="fa fa-code fa-2x" aria-hidden="true"></i></div>
            <p>
              This is cryptocurrency Application, implemented using ReactJS, you
              can search any Bitcoin by Name and view the price and rank and
              changes in percentage for the last seven days, you can sort any
              properties as you wish and see immediate result from a real live
              Cryptocurrency API.
            </p>
          </div>

          <div className="project-2">
            <h5>
              <a
                className="project-link"
                href="https://github.com/benk1/counter-App"
              >
                Counter-APP
              </a>
            </h5>
            <p>Reactjs App powered by Bootsrap</p>
            <p>
              A Simple application but powerful application teaching how reacts
              work in all aspects.it is based on counter where you can increase
              or decrease counter while other functionalities are taking place
              while doing that.
            </p>
          </div>

          <div className="project-3">
            <h5>
              <a
                className="project-link"
                href="https://github.com/benk1/CountryArrayInReact"
              >
                ArrayOfCountriesInReact
              </a>
            </h5>
            <p>Reactjs App </p>
            <p>
              This is the project where we are able to search any country in the
              World from a given array, it is implemented using ReactJs. There
              are two buttons where you can choose to search either by Start
              With or include buttons.
            </p>
          </div>

          <div className="project-4">
            <h5>
              <a
                className="project-link"
                href="https://github.com/benk1/FormValidationInReact"
              >
                FormValidationInReact
              </a>
            </h5>
            <p>Reactjs App </p>
            <p>
              This is Form Validation implemented using ReactJs, user can fill
              up the form under given condition for each input and if every
              requirement is met the Submit button will turn green and ready to
              be submitted.
            </p>
          </div>

          <div className="project-5">
            <h5>
              <a
                className="project-link"
                href="https://github.com/benk1/TodoList"
              >
                TodoList
              </a>
            </h5>
            <p>Reactjs App </p>
            <p>
              This is simple TodoList react App where we can add, delete and
              create to do list from Json placeholder backend. API
            </p>
          </div>

          <div className="project-6">
            <h5>
              <a
                className="project-link"
                href="https://github.com/benk1/AccountBalanceInReact"
              >
                AccountBalanceInReact
              </a>
            </h5>
            <p>Reactjs App </p>
            <p>
              This is Account Balance Implemented using ReactJS, the User can
              add income or expenses and the program will calculate the balance
              and dispaly all the transactions accordingly.
            </p>
          </div>

          <div className="project-7">
            <h5>
              <a
                className="project-link"
                href="https://github.com/benk1/Gallery"
              >
                Gallery
              </a>
            </h5>
            <p>Javascript App </p>
            <p>
              This is the Gallery integrify stuff, implemented using HTML, CSS
              and JAVASCRIPT. The Gallery is in slide show form where you can
              click next arrow or next button to view next or previous photo,
              you can view the details of a selected photo by clicking details
              button.
            </p>
          </div>

          <div className="project-8">
            <h5>
              <a
                className="project-link"
                href="https://github.com/benk1/rails_tutorial"
              >
                Rails_Tutorial
              </a>
            </h5>
            <p>Rails App </p>
            <p>Ruby on Rails tutorial application</p>
          </div>

          <div className="project-9">
            <h5>
              <a
                className="project-link"
                href="https://github.com/benk1/DataFetching"
              >
                DataFetching_From_API
              </a>
            </h5>
            <p>Javascript App </p>
            <p>
              This is a project where we can fetch data(Countries) from given
              countries API as url. an App was implemented by pure vanilla
              javascript
            </p>
          </div>

          <div className="project-10">
            <h5>
              <a
                className="project-link"
                href="https://github.com/benk1/tableAssignment"
              >
                TableGenerator
              </a>
            </h5>
            <p>Javascript App </p>
            <p>
              This is a project where we can build any table with given inputs,
              the app is implemeneted using vanilla javascript.
            </p>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Projects;
