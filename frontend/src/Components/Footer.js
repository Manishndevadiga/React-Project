import React from "react";
import Header from "./Header";

export default function Footer() {
  return (
    <>
      <style>{`
    .footer {
        margin-top:10px;
        background-color: #1D2B53;
        color: white;
        height:40vh;
        text-align: center;
        padding: 10px;
    }
    
  `}</style>
      <div className="footer">
        <h1>Footer</h1>
        <p>This is the footer of the website</p>
      </div>
    </>
  );
}
