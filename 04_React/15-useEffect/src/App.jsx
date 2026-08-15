import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(
    function () {
      console.log("use effect is running...");
    },
    [num],
  );

  return (
    <div>
      <h1>num1 = {num}</h1>
      <h1>num2 = {num2}</h1>
      <button
        onMouseEnter={() => {
          setNum(num + 1);
        }}
        onMouseLeave={() => {
          setNum2(num2 + 10);
        }}
      >
        click
      </button>
    </div>
  );
};

export default App;
