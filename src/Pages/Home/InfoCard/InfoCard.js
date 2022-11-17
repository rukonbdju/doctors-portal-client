import React from "react";

const InfoCard = ({bgClass, cardTitle, image }) => {
  return (
    <div className={`card lg:card-side ${bgClass} shadow-xl`}>
      <figure className="">
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
