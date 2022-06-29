import React from "react";

function Main({ sightings, color }) {
  const elephantBox = {
    color: `${color}`,
    boxShadow: `0 0 16px ${color}`,
  };
  return (
    <div className="main-box">
      <div className="sightings" style={elephantBox}>
        <p>Flying Pink Elephant Sightings</p>
        <p>{sightings}</p>
      </div>
    </div>
  );
}

export default Main;
