import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  // Utilities

  const openSideMenu = () => {
    document.getElementById("sideMenu").style.width = "100%";
  };

  const closeSideMenu = () => {
    document.getElementById("sideMenu").style.width = "0%";
  };

  // Locationn
  const location = useLocation();

  const navLinks = [
    { title: "Transfer", route: "/transfer" },
    { title: "Project Documentation", route: "/project-documentation" },
  ];
  return (
    <section className={classes.outerContainer}>
      <div className={classes.container}>
        <div className={classes.logoSection}>Integrations Assessment</div>
        <div className={classes.navLinkSection}>
          {navLinks.map((link) => {
            return (
              <Link
                to={link.route}
                key={link.title}
                className={
                  location.pathname.includes(link.route)
                    ? classes.activeLink
                    : undefined
                }
              >
                {link.title}
              </Link>
            );
          })}
        </div>
        <div className={classes.hamburgerMenu}>
          <FontAwesomeIcon icon={faBars} onClick={openSideMenu} />
        </div>
      </div>

      {/* Sidenav */}
      <div className={classes.sideNav} id="sideMenu">
        <div className={classes.sideNavInner}>
          <div>
            <FontAwesomeIcon icon={faXmark} onClick={closeSideMenu} />
          </div>
          {navLinks.map((link) => {
            return (
              <Link
                to={link.route}
                key={link.title}
                className={
                  location.pathname.includes(link.route)
                    ? classes.activeLink
                    : undefined
                }
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Header;
