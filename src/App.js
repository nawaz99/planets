import React, { useState } from "react";
import "./App.css";
import planets from "./data";
import Planets from "./Components/Planets";
import FavoritePlanets from "./Components/FavoritePlanets";

const App = () => {
  const [data, setData] = useState(planets);

  const AddtoFavorites = (id) => {
    let mydata = [...data];
    mydata.map((v) => {
      if (v.id === id) {
        v.isFavourite = !v.isFavourite;
      }
      return null;
    });
    setData(mydata);
  };

  return (
    <div className="container">
      <Planets planets={data} AddtoFavorites={AddtoFavorites} />
      <FavoritePlanets favorites={data} />
    </div>
  );
};

export default App;
