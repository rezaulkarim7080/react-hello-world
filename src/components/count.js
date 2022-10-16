import React, { useState } from "react";

// function Count() {
//   const [count, setCount] = useState(0);
//   //   const handleIncrease = () => {
//   //     setCount(count + 1);
//   //   };

//   return (
//     <div>
//       <h1>Count : {count}</h1>
//       {/* <button onClick={handleIncrease}>Increase</button> */}
//       <button onMouseEnter={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setCount(count - 1)}>Decrease</button>
//     </div>
//   );
// }

function MovieCount(props) {
  const [count, setCount] = useState(0);
  const Addclick = () => {
    setCount(count + 1);
  };
  const Deleteclick = () => {
    setCount(count - 1);
  };
  // Internal css
  const btnStyle = {
    color: "red",
    padding: "10px",
    fontSize: "22px",
    margin: "5px",
  };
  const MovieCountstyle = {
    color: "rgb(237, 127, 0)",
  };
  return (
    <div>
      <h1 style={{ color: "red" }}>{props.guenra}</h1>
      <h1 style={MovieCountstyle}>MovieCount : {count}</h1>
      <button style={btnStyle} onClick={Addclick}>
        Add movies
      </button>
      <button style={btnStyle} onClick={Deleteclick}>
        Delete movies
      </button>
    </div>
  );
}

// export default Count;
export default MovieCount;
