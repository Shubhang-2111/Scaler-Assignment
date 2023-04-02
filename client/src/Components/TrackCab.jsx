import React,{useState} from 'react'
import axios from 'axios'


const TrackCab = () => {
    const[cabs,setCabs] = useState([])
    const trackCabs=()=>{
        axios.get("http://localhost:3001/track-cab").then((response)=>{setCabs(response.data)})
      }
    

//Show the current info of all the cabs , info will be updated everytime users presses the track button
  return ( 
    <div className="conatiner d-flex flex-column my-3" style={{height:"100vh"}}>
        <button className="btn btn-primary" onClick={trackCabs}> Track</button>
        <table className="table table-bordered" style={{width:"auto",border:"2px solid black"}}>
      <thead>
        <tr>
          <th>Cab id</th>
          <th>Cab Name</th>
          <th>Price per Minute</th>
          <th>Status</th>
          <th>Source</th>
          <th>Destination</th>
          <th>Booking Time</th>
          <th>User</th>
        </tr>
      </thead>
      <tbody>
      {cabs.map((cab) => (
          <tr key={cab.cab_id}>
            <td>{cab.cab_id}</td>
            <td>{cab.cab_name}</td>
            <td>{cab.price}</td>
            <td>{cab.status}</td>
            <td>{cab.source}</td>
            <td>{cab.destination}</td>
            <td>{cab.booking_time}</td>
            <td>{cab.user_id}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default TrackCab
