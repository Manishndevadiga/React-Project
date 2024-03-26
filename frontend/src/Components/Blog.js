import React, { useState, useEffect } from "react";
import Header from "./Header";

export default function Blog() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("updated count", count);
  }, [count]);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <>
      <style>{`

   button {
        background-color: #54B435;
        color: white;
        width:100px;
        height:40px;
        text-align: center;
        padding: 10px;
        margin-left: 20px;
        border-radius: 10px;
        border: 0;
    }

    button:hover{
        background-color: #82CD47;
        color: white;
    }

    .box{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
    }
    h2{
        text-align: center;
    }
    
  `}</style>

      <div className="box">
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <h2>{count}</h2>
    </>
  );
}
