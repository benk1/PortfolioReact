import React from "react";
import { Link } from "react-router-dom";


 function Footer() {
  return (
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
        <i className="fa fa-linkedin fa-2x" aria-hidden="true"/>
        <span className="sr-only">(current)</span>
      </a>
      </div>
    </div>
  )
}
export default Footer;
