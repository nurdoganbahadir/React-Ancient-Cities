import React from "react";

const AncientCard = ({ img, name, history }) => {
  return (
    <>
      <div className="cards">
        <div className="on">
          <img src={img} alt="image" />
          <h3>{name}</h3>
        </div>
        <div className="arka"></div>
      </div>
    </>
  );
};

export default AncientCard;
