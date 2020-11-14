import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faCodepen, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const links = [
  {id: 1, name: 'Github', icon: faGithub, size: '3x', link: 'https://github.com/ISTEVIEYZ'},
  {id: 2, name: 'LinkedIn', icon: faLinkedin, size: '3x', link: 'https://www.linkedin.com/in/stephen-eisen-13a856a6/'},
];

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="/">
          <div className="logo-first">STEPHEN</div>
          <div className="logo-last">EISEN</div>
        </a>
      </div>
      <ul className="site-links">
        <li><NavLink exact to="/" className="project-link">PROJECTS</NavLink></li>
        <li><NavLink to="/resume" className="docs-link">RESUME</NavLink></li>
        <li><NavLink to="/blogs" className="blogs-link">BLOGS</NavLink></li>
        <li><NavLink to="/about" className="about-link">ABOUT</NavLink></li>
      </ul>
      <ul className="social-links">
        { links.map(link => {
          return (
            <li key={link.id}>
              <a style={{color: "#20232A"}} href={link.link} target="__blank">
                <FontAwesomeIcon  className="social-link" icon={link.icon} size={link.size}/>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;