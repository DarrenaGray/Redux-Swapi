import React from "react";

const Character = props => {
  return (
    <div className="character">
      <h3>{props.character.name}</h3>
      <p>Height: {props.character.height} cm</p>
      <p>Mass: {props.character.mass} kg</p>
    </div>
  )
};

export default Character;
