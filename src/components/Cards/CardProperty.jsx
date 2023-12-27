import React from "react";

const CardProperty = ({title, name}) => {

  return (
    <>
    <div className="property">
      <div className={`property-container bg-${name}-icon-background`}>
        <i className={`fa fa-${name} text-${name}-icon`}></i>
      </div>
      <p>{title}</p>
    </div>
    </>
  );
};

export default CardProperty;
