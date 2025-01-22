import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const Cliks = () => {
    setCount(count + 1);
  };
  return (
    <>
      <p>Du har trykket {count} ganger </p>
      <button onClick={Cliks}>Trykk her</button>
    </>
  );
}

export default Counter;
