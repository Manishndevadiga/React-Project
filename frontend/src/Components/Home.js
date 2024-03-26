import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get(" http://localhost:5000/group/groups").then((response) => {
      const arr = response.data.groups;

      setCount(arr.length);
    });
  }, []);

  return (
    <>
      <style>
        {`

    body,html {
      margin: 0;
      padding: 0;
      background-color:#1B1A55;
    }
        
        p{
            font-size: 2vw;
        }

    h1{
        font-size: 4vw;
        color: white;
        font-weight: bold;
    }

    .homeContainer {
      margin: 0 auto;
      margin-top:2%;
      display:flex;
      justify-content:space-around;
      height:80vh;
      width: 90%;
      border:1px solid black;
      flex-direction:column;
      background-color:#E7F6F2;
      border:none;
      border-radius: 20px;
    }

    .group1,.group2{
      display:flex;
      flex-direction:row;
      justify-content:space-around;
    }

    .cards{
      width: 20vw;
      height: 30vh;
      border:1px solid black;
      box-shadow: 5px 5px 10px rgba(1, 1, 1, 1);
      border-radius: 10px;
      border:0;
      background-color:#7F27FF;
      text-align:center;
    }

    .cards:hover{
      transform: scale(1.1);
      transition: all .3s ease-in;
    }

    button{
      width: 100px;
      height: 30px;
      border-radius: 10px;
      cursor: pointer;
    }


    @media (max-width: 600px) {

      p{
            font-size: 4vw;
        }

    h1{
        font-size: 10vw;
    }


      .homeContainer {
      height:165vh;
      justify-content: flex-start;

    }

    .group1,.group2{
      flex-direction:column;
      align-items:center;
    }


    .cards{
      width: 50vw;
      height: 30vh;
      margin:10px;

    }
          
          }

        
    `}
      </style>
      <div className="homeContainer">
        <div className="group1">
          <div className="cards card1">
            <h1>{count}</h1>
            <p>GROUPS</p>
          </div>
          <div className="cards card2"></div>
          <div className="cards card3"></div>
        </div>
        <div className="group2">
          <div className="cards card4"></div>
          <div className="cards card5"></div>
          {/* <div className="cards"></div> */}
        </div>
      </div>
    </>
  );
}
