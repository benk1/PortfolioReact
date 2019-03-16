import React from "react";
import NavBar from './NavBar';

class Contact extends React.Component {
  state = {
    email: "",
    message: "",
    isSubmitDisabled: true,

    touched: {
      email: false,
      message: ""
    }
  };

  handleBlur = e => {
    let name = e.target.name;
    this.setState({
      touched: { ...this.state.touched, [name]: true }
    });
  };

  validate = email => {
    let errors = {
      email: "",
      isSubmitDisabled: true
    };

    let err = 0;

    if (
      !this.state.email ||
      !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email)
    ) {
      errors.email = " Invalid Email address";
      err += 1;
    }

    errors.isSubmitDisabled = err > 0 ? true : false;

    return errors;
  };

  handleChange = e => {
    e.preventDefault();
    let target = e.target;
    let name = target.name;
    //let value = target.type === "checkbox" ? target.checked : target.value;
    this.setState(
      {
        [name]: e.target.value
      },
      function() {
        this.canSubmit();
      }
    );
  };

  canSubmit() {
    const { email,message } = this.state;
    const errors = this.validate(email);
    const { isSubmitDisabled } = errors;
    this.setState({ isSubmitDisabled });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { email,message } = this.state;
    alert(`Your registration detail: 
         Email: ${email} `);
    this.props.addUser(this.state);
  };

  render() {
    const { email } = this.state;
    const errors = this.validate(email);
    console.log(errors);

    return (
      <div>
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
                <a className="nav-link" href="/projects">
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </nav> */}
        <h3>Contact Me!</h3>
        <div className="contact">
          <div className="icons">
            <a className="nav-link" href="htpp://github.com/benk1">
              <i className="fa fa-github fa-3x" aria-hidden="true" />
              <span className="sr-only">(current)</span>
            </a>

            <a
              className="nav-link"
              href="http://www.linkedin.com/in/bernard-kakengi-ba2003173"
            >
              <i className="fa fa-linkedin fa-2x" aria-hidden="true" />
              <span className="sr-only">(current)</span>
            </a>
          </div>

          <div className="form">
            <input
              type="email"
              name="email"
              value={this.state.email}
              placeholder="Email"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />
            <br/>
            <br />
            <textarea
              rows="10"
              cols="60"
              name="message"
              value={this.state.message}
              placeholder="please write your Message here!"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />
            <br />

            <button
              className={
                this.state.isSubmitDisabled ? "disableSubmit" : "submit"
              }
              disabled={this.state.isSubmitDisabled}
              
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
