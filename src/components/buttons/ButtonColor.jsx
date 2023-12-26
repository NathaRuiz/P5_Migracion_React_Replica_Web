import React from "react";
import './ButtonColor.css'

const ButtonColor = ({link, icon}) => {
  return (
    <>
      <button className="button-color">
        <a href={link} target="_blank">
          <i className={icon} ></i>
          DOWNLOAD
          <span></span>
        </a>
      </button>
    </>
  );
};

export default ButtonColor;
