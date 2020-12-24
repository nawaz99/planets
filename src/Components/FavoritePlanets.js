import React from "react";

const FavoritePlanets = ({ favorites }) => {
  let myfavorites = [];
  favorites.map((favorite) => {
    if (favorite.isFavourite) {
    myfavorites = [...myfavorites,favorite];
    }
    return null;
  });

  return (
    <div className="favorites">
      <h1>FAVORITE PLANETS {myfavorites.length}</h1>
      <ul>
        {myfavorites.map((favorite, index) => {
          return <li key={index}>{favorite.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default FavoritePlanets;
