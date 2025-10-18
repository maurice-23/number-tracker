import React from "react";
import "./App.css";
import { useState } from "react";
function Counter(props) {
  // let [count, setCount] = useState(0);
  return (
    <>
      <div className="flex m-4 text-center">
        
        <p>{props.value === 0 ? "Zero" : props.value}</p>
        <button
          onClick={props.onIncrement}
          className="mx-4 bg-blue-500 text-white cursor-pointer font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          Increment
        </button>
        {props.value === 0 ? (
          <button
            className="mx-4 bg-red-300 text-white  font-bold py-2 px-4 rounded "
            disabled
          >
            Decrement
          </button>
        ) : (
          <button
            onClick={props.onDecrement}
            className="mx-4 bg-red-500 text-white cursor-pointer font-bold py-2 px-4 rounded hover:bg-red-700"
          >
            Decrement
          </button>
        )}
        <button
            onClick={props.onDelete}
            className="mx-4 bg-red-500 text-white cursor-pointer font-bold py-2 px-4 rounded hover:bg-red-700"
          >
            Delete
          </button>
      </div>
    </>
  );
}
export default Counter;
