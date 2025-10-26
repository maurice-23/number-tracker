import { useState } from "react";
import "./App.css";
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button className="bg-blue-500 m-2 p-2 text-white" onClick={() =>{setCount(count+1)}}>Count {count }</button>
    </>
  )
};
