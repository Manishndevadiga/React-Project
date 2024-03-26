import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Group() {
  const [group, setGroup] = useState([]);

  useEffect(() => {
    axios.get(" http://localhost:5000/group/allGroups").then((response) => {
      setGroup(response.data.groups);

      console.log(group);
    });
  }, []);

  return (
    <>
      <style>{`


      h1{
        text-align: center;
      }
    .table {
      border-collapse: collapse;
      width: 100%;
      height:40vh;
    }
    
    .table th,
    .table td {
      font-size:1vw;
      border: 1px solid #ddd;
      padding: 5px;
      text-align: center;
    }
    
    .table th {
      background-color: #f2f2f2;
    }
    
    @media (max-width: 1500px) {
            h1 {
              font-size: 24px;
            }

          .table th,
          .table td {
           font-size:2vw;
    }
          }

    `}</style>

      <div>
        <h1>GROUP DETAILS</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Head</th>
              <th scope="col">Place</th>
            </tr>
          </thead>
          <tbody>
            {group.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.head}</td>
                <td>{data.place}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
