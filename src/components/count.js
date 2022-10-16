import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  //   const handleIncrease = () => {
  //     setCount(count + 1);
  //   };

  return (
    <div>
      <h1>Count : {count}</h1>
      {/* <button onClick={handleIncrease}>Increase</button> */}
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default Count;
