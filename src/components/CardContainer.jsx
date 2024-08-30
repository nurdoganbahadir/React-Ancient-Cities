import React from "react";
import AncientCard from "./AncientCard";
import { data } from "../helpers/data";

const CardContainer = ({ search }) => {
  const filteredPlayers = data.filter((city) =>
    city.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="card-container">
      {filteredPlayers.map((item) => (
        <AncientCard {...item} />
      ))}
    </div>
  );
};

export default CardContainer;
