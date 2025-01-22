import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const Cliks = () => {
    setCount(count + 1);
  };

  const RemoveClick = () => {
    setCount(count - 1);
  };

  return (
    <>
      <p>Du har trykket {count} ganger </p>
      <button className="click-button" onClick={Cliks}>
        Trykk her
      </button>
      <button className="click-button" onClick={RemoveClick}>
        Trykk her for å fjerne
      </button>
    </>
  );
}

export default Counter;
