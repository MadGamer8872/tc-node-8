import { useState } from "react";

export const Counter = (props) => {
  const [count, setCount] = useState(33);
  const [char, setChar] = useState(String.fromCharCode(33));

  const handleClick = () => {
    let newCount = count + 1;
    setCount(newCount);
    setChar(String.fromCharCode(newCount));
  };

  return (
    <div>
      <h2>{char}</h2>
      <button onClick={handleClick}>{count}</button>
    </div>
  );
};
