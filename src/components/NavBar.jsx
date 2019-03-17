import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <header style={headerStyle}>
      
        <Link style={linkStyle} to={process.env.PUBLIC_URL + "/"}>
          Home
        </Link>{" "}
        |{" "}
        <Link style={linkStyle}to={process.env.PUBLIC_URL + "/about"}>
          About
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to={process.env.PUBLIC_URL + "/projects"}>
          Projects
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to={process.env.PUBLIC_URL + "/contact"}>
          Contact
        </Link>{" "}
        {" "}
        {" "}
      </header>
    </div>
  );
}

const headerStyle = {
  background: "#000000",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "20px"
};
export default NavBar;
