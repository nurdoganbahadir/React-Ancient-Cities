import React from "react";

const AncientCard = ({ img, name, history }) => {
  return (
    <>
      <div className="cards">
        <div className="on">
          <img src={img} alt="image" className="cards-img"/>
          <h3>{name}</h3>
        </div>
        <div className="arka">
          <p>🏛️{history[0]}</p>
          <p>🏛️{history[1]}</p>
          <p>🏛️{history[2]}</p>
          <p>🏛️{history[3]}</p>
        </div>
      </div>
    </>
  );
};

export default AncientCard;
