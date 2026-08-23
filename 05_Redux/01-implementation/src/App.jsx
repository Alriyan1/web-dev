import { useDispatch, useSelector } from "react-redux";
import {
  decreament,
  increament,
  increamentBy,
} from "./redux/features/counterSlice";
import { useState } from "react";
const App = () => {
  const [num, setNum] = useState(5);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(increament());
        }}
      >
        Increament
      </button>
      <button
        onClick={() => {
          dispatch(decreament());
        }}
      >
        Decreament
      </button>
      <input
        onChange={(e) => {
          setNum(e.target.value);
        }}
        type="number"
        value={num}
      />
      <button
        onClick={() => {
          dispatch(increamentBy(Number(num)));
        }}
      >
        Increase by Amount
      </button>
    </div>
  );
};

export default App;
