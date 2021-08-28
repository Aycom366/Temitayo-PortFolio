import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import hamburger from "../../images/icons/hamburger.svg";
import closeNav from "../../images/icons/close.svg";
import { useGlobalContext } from "../../context";

function NavBar() {
  const { isNavOpen, setIsNavOpen, isMoved } = useGlobalContext();
  return (
    <header>
      <nav className={`nav ${isMoved && "small"} container`}>
        <section className="nav-logo-mobile">
          <div className="logoContainer">
            <Link
              onClick={() => setIsNavOpen(false)}
              aria-label="homepage"
              to="/"
            >
              <img src={logo} alt="Bamigboye" />
            </Link>
          </div>
          <div className="harmburger">
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              aria-expanded="true"
              className="harmburgerContainer"
            >
              <img src={isNavOpen ? closeNav : hamburger} alt="HamBurger" />
            </button>
          </div>
        </section>
        <section
          className={`${
            isNavOpen ? "navLinks-container showNavs" : "navLinks-container"
          }`}
        >
          <NavLink
            onClick={() => setIsNavOpen(false)}
            exact
            activeClassName="links--active"
            aria-current="page"
            className="links"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setIsNavOpen(false)}
            aria-current="location"
            activeClassName="links--active"
            className="links"
            to="/portfolio"
          >
            PortFolio
          </NavLink>
          <NavLink
            onClick={() => setIsNavOpen(false)}
            aria-current="location"
            activeClassName="links--active"
            className="links"
            to="/contact"
          >
            Contact Me
          </NavLink>
        </section>
      </nav>
    </header>
  );
}

export default NavBar;
