import React from "react";
import AncientCard from "./AncientCard";

const CardContainer = ({ data }) => {
  return (
    <div className="card-container">
      {data.map((item) => (
        <AncientCard {...item} />
      ))}
    </div>
  );
};

export default CardContainer;
