import React from "react";
import '../../views/Home.css'
import '../Cards/CardProperty.css'

const CardProperty = ({title, name}) => {

  return (
    <>
    <div className="property">
      <div className={`property-container ${name}-card-style`}>
        <i className={`fa fa-${name} `}></i>
      </div>
      <p>{title}</p>
    </div>
    </>
  );
};

export default CardProperty;
