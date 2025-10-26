import React, { useState } from "react";
import Counter from "./counter";
export default function Counters() {
  let [a, setA] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);
  const handleIncrement = (i) => {
    let oldArr = [...a]
    let index = oldArr.indexOf(i);
    oldArr[index].value = oldArr[index].value + 1;
    console.log(oldArr[index].value)
    setA(a = oldArr)
  };
  const handleDecrement = (i) => {
    let oldArr = [...a]
    let index = oldArr.indexOf(i);
    oldArr[index].value = oldArr[index].value - 1;
    setA(a = oldArr)
  };
  const handleDelete = () => {
    setA()
  }
  let totalVal = 0;
  a.forEach(c => {
    totalVal += c.value;
  })
  return (
    <>
      <p>Total: { totalVal }</p>
      {a.map((c) => {
        return (
          <Counter
            key={c.id}
              onIncrement={() => handleIncrement(c)}
              onDecrement={() => handleDecrement(c)}
              onDelete={() => handleDelete(c)}
              value={c.value}
            />
          
        );
      })}
    </>
  );
}
