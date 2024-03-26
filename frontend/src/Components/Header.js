import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <style>{`
.container1{
  background-color: #3F0071;
  width:100%;
  height: 10vh;
  color:white;
}

a{
  text-decoration: none;
  color:white;
}

a:hover{
  color:rgb(93, 93, 163);
}

ul{
  color:white;
  list-style-type: none;
  margin: 0;
  padding-top: 20px;
  font-size: 2vh;
  overflow: hidden;
  display:flex;
  justify-content:space-around;
  align-items:center;
}
  

  `}</style>
      <div className="container1">
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/groupData">GROUP</NavLink>
          </li>
          <li>
            <NavLink to="/blog">BLOG</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
