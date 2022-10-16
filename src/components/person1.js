import React from "react";

function Person1(props) {
  const person1Style = {
    border: "2px solid black",
    borderRadius: "15px",
    margin: "10px",
    color: "#800000",
  };

  return (
    <div style={person1Style}>
      <h1>I am {props.name} </h1>
      <h2>My roll {props.roll} </h2>
    </div>
  );
}

export default Person1;
