import React from "react";
import { NavLink, Link } from "react-router-dom";
import SocialMedia from "../SocialMedia";

function Footer() {
  const getYear = () => {
    let year = new Date().getFullYear();
    return year;
  };
  return (
    <footer className="footer">
      <div className="foot container">
        <div className="footer-container">
          <div className="footer-left">
            <div className="logoContainer">
              <Link aria-label="homepage" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32">
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"
                  />
                </svg>
              </Link>
            </div>
            <div className="footer-container-links">
              <NavLink exact aria-current="page" className="links" to="/">
                Home
              </NavLink>
              <NavLink
                aria-current="location"
                className="links"
                to="/portfolio"
              >
                PortFolio
              </NavLink>
              <NavLink aria-current="location" className="links" to="/contact">
                Contact Me
              </NavLink>
            </div>
          </div>
          <div className="footer-right">
            <SocialMedia />
          </div>
        </div>
        <p className="copy">
          &copy;
          <span> {getYear()}</span> Temitayo. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
