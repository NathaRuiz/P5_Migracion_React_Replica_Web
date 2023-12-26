import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import Logo from "./Logo";
import ButtonBorder from "../buttons/ButtonBorder";


const Navbar = () => {
  return (
    <nav className="font-sans md:flex justify-between w-full">
        <Logo></Logo>
        <ul className="xs:w-full md:flex items-center justify-around w-full sm:w-auto md:w-auto gap-5 mr-6">
            <li className="hover:text-tertiary-letter-color font-bold text-sm">
                <Link to="/description">DESCRIPTION</Link>
            </li>
            <li className="hover:text-tertiary-letter-color font-bold text-sm">
                <Link>FEATURES</Link>
            </li>
            <li className="hover:text-tertiary-letter-color font-bold text-sm">
                <Link to="/screens">SCREENS</Link>
            </li>
            <li>
                <div className="drop-down-menu">
                    <button className=" flex items-center gap-1 drop-down-button hover:text-tertiary-letter-color font-bold text-sm">
                    EXTRA
                    <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="drop-down-menu-content bg-primary-background font-bold text-sm z-0">
                    <a href="#" className="hover:text-tertiary-letter-color text-primary-letter-color">ARTICLE DETAILS</a>
                    <a href="#" className="hover:text-tertiary-letter-color">TERMS CONDITION</a>
                    <a href="#" className="hover:text-tertiary-letter-color">PRIVACY POLICY</a>
                    </div>
                </div>
            </li>
            <li className="z-10">
                <ButtonBorder/>
            </li>
        </ul>
        
    </nav>
  );
};

export default Navbar;
