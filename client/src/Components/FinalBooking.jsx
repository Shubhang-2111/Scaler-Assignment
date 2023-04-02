import React from "react";
import axios from "axios";
import ShowCab from "./ShowCab";
import { useState } from "react";
const FinalBooking = () => {
  const [userId, setUserId] = useState('')
  const [node1, setNode1] = useState('');
  const [node2, setNode2] = useState('');
  const [shortestPath, setShortestPath] = useState('');
  const [showCabDetails,setShowCabDetails] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the user input to the backend server
      const response = await axios.post('http://localhost:3001/shortest-path', {
        node1,
        node2,
      });

      // Set the shortest path returned from the backend server
      setShortestPath(response.data.shortestPath);
    } catch (error) {
      console.log(error);
    }

    setShowCabDetails(true)
  };

  // here user will enter the details of user email , source and destination
  return (
    <div className="container d-flex flex-row" style={{margin:"auto"}}>
      <div className="container">
      <h2>Enter details of your journey</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
      <label htmlFor="inputField">Email:</label>
      <input type="text" className="form-control" id="inputField" value={userId} onChange={(e)=>{setUserId(e.target.value)}}/>
      <label htmlFor="inputField">Source:</label>
      <input type="text" className="form-control" id="inputField" placeholder="A,B,C,D,E,F" value={node1} onChange={(e)=>{setNode1(e.target.value)}} />
      <label htmlFor="inputField">Destination:</label>
      <input type="text" className="form-control" id="inputField" placeholder="A,B,C,D,E,F" value={node2} onChange={(e)=>{setNode2(e.target.value)}} />
      </div>
      <button type="submit" className="btn btn-primary my-3">Show Cab details</button>

      </form>
      {shortestPath && (
        <div>
          <p>Estimated Time between {node1} and {node2}: {shortestPath} minutes</p>
        </div>
      )}

      </div>
     <div className="container">
     <ShowCab shortest_time={shortestPath} source={node1} destination={node2} userId={userId}/>
        </div>
    </div>
  );
};

export default FinalBooking;