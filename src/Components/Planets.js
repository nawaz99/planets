import React from "react";

const Planets = ({ planets, AddtoFavorites }) => {
  return (
    <div className="planets">
      <h1>PLANETS LIST</h1>
      <ul>
        {planets.map((planet) => {
          return (
            <div key={planet.id} className="planet">
              <li key={planet.id}>{planet.name}</li>
              <li onClick={() => AddtoFavorites(planet.id)}>
                {planet.isFavourite ? "Remove favorites" : "Add favorites"}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Planets;
