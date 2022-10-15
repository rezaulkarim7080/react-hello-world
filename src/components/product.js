import React from "react";
//import '../stylesheets/product.css';---> for imorting external css

const Product = (props) => {
  const btn = {
    fontSize: "20px",
    padding: "10px",
  };
  const productstyle = {
    border: "2px solid black",
    borderRadius: "10px",
    backgroundColor: "lightgray",
    color: "black",
    margin: "15px",
    padding : "10px",
    height: "200px",
    width: "200px",
    float: "left",
  };
  return (
    <div style={productstyle}>
      <h2>{props.productName}</h2>
      <h1>{props.productprice}</h1>
      <button style={btn}>Buy Now</button>
    </div>
  );
};

export default Product;
