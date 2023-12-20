import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="font-sans">
        <ul>
            <li className="hover:text-tertiary-letter-color font-bold text-sm">
                <Link>DESCRIPTION</Link>
            </li>
            <li className="hover:text-tertiary-letter-color font-bold text-sm">
                <Link>FEATURES</Link>
            </li>
            <li className="hover:text-tertiary-letter-color font-bold text-sm">
                <Link>SCREENS</Link>
            </li>
            <li>
                <div className="drop-down-menu ">
                    <button className="drop-down-button hover:text-tertiary-letter-color font-bold text-sm">
                    EXTRA
                    <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="drop-down-menu-content bg-primary-background font-bold text-sm">
                    <a href="#" className="hover:text-tertiary-letter-color">ARTICLE DETAILS</a>
                    <a href="#" className="hover:text-tertiary-letter-color">TERMS CONDITION</a>
                    <a href="#" className="hover:text-tertiary-letter-color">PRIVACY POLICY</a>
                    </div>
                </div>
            </li>
        </ul>
        <button className="button-border hover:text-tertiary-letter-color font-bold text-sm"><a target="_blank" href="https://factoriaf5.org/">DOWNLOAD</a></button>
    </nav>
  );
};

export default Navbar;
