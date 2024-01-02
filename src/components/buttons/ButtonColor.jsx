import React from "react";
import './ButtonColor.css'

const ButtonColor = ({url, hasIcon=true , icon="none", title}) => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };
  return (
    <>
      <button className="button-color" onClick={() => openLink(url)}>
         
        { hasIcon && (
            <i className={icon} ></i>      
        )}
          
          {title}
        
      </button>
    </>
  );
};

export default ButtonColor;
