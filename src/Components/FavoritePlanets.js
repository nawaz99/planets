import React from "react";

const FavoritePlanets = ({ favorites }) => {
  console.log(favorites);
  const myfavorites = [];
  favorites.map((favorite) => {
    if (favorite.isFavourite) {
      myfavorites.unshift(favorite);
    }
    return null;
  });

  return (
    <div className="favorites">
      <h1>FAVORITE PLANETS {myfavorites.length}</h1>
      <ul>
        {myfavorites.map((favorite) => {
          return <li>{favorite.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default FavoritePlanets;
