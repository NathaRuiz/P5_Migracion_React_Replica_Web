import React from "react";
import './ButtonColor.css'

const ButtonColor = ({link, icon, title}) => {
  return (
    <>
      <button className="button-color">
        <a href={link} target="_blank">
          <i className={icon} ></i>
          {title}
          <span></span>
        </a>
      </button>
    </>
  );
};

export default ButtonColor;
