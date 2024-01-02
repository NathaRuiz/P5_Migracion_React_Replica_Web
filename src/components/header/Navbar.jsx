import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Logo from "./Logo";
import ButtonBorder from "../buttons/ButtonBorder";

const Navbar = () => {
  const location = useLocation();

  const [navbarVisible, setNavbarVisible] = useState(false);

  const  handleOpenClick = ()=>{
    setNavbarVisible(true);
  }
  const  handleCloseClick = ()=>{
    setNavbarVisible(false);
  }

  return (
    <div className="nav-container flex">
      <nav className="font-sans flex justify-between w-full">
        <Logo></Logo>
        <ul className={`nav-items flex sm:items-center md:justify-around w-auto gap-5 md:mr-6 ${navbarVisible ? 'visible' : ''}`}>
        <div className="close" onClick={handleCloseClick}>
          <i className="fa fa-times"></i>
        </div>
          <li
            className={`font-bold text-sm ${
              location.pathname === "/description" &&
              "text-tertiary-letter-color"
            }`}
          >
            <Link to="/description">DESCRIPTION</Link>
          </li>
          <li className="hover:text-tertiary-letter-color font-bold text-sm">
            <Link>FEATURES</Link>
          </li>
          <li
            className={`font-bold text-sm ${
              location.pathname === "/screens" && "text-tertiary-letter-color"
            }`}
          >
            <Link to="/screens">SCREENS</Link>
          </li>
          <li>
            <div className="drop-down-menu">
              <button className=" flex items-center gap-1 drop-down-button hover:text-tertiary-letter-color font-bold text-sm">
                EXTRA
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="drop-down-menu-content bg-primary-background font-bold text-sm z-0">
                <a
                  href="#"
                  className="hover:text-tertiary-letter-color text-primary-letter-color"
                >
                  ARTICLE DETAILS
                </a>
                <a href="#" className="hover:text-tertiary-letter-color">
                  TERMS CONDITION
                </a>
                <a href="#" className="hover:text-tertiary-letter-color">
                  PRIVACY POLICY
                </a>
              </div>
            </div>
          </li>
          <li className="z-10">
            <ButtonBorder url={"https://factoriaf5.org/"} title={"DOWNLOAD"} color={"FF556E"}/>
          </li>
        </ul>
      </nav>
      <div className="open" onClick={handleOpenClick}>
        <i className="fa fa-bars"></i>
      </div>
    </div>
  );
};

export default Navbar;
