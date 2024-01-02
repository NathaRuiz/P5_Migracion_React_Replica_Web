import React from "react";

const UserTestimonial = ({opinion, name, profession}) => {
  return (
    <>
      <div className="user text-center flex flex-col items-center justify-evenly md:w-[32%]">
        <div className="starts text-comments-icon">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
        <div className="border w-10 h-[1.7px] mt-[5%] mb-[5%] bg-line-color"></div>
        <p className="opinion text-secondary-letter-color leading-[1.4em] italic">{opinion}</p>
        <p className="name font-bold text-primary-letter-color mt-[3%] not-italic">{name} - {profession}</p>
      </div>
    </>
  );
};

export default UserTestimonial;
