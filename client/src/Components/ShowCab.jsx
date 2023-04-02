import React,{useState,useEffect} from 'react'
import axios from 'axios'
const ShowCab = ({shortest_time,source,destination,userId}) => {
    const [cabs,setCabs] = useState([])
    const [selected_cab,setSelectedCab] = useState({})
    const [selected, setSelected] = useState(false)

    // call to server for showing the available cabs
    const showCabs=()=>{
        axios.get("http://localhost:3001/get-cabs").then((response)=>{setCabs(response.data)})
      }
    // call to server for booking a cab
      const bookCab=()=>{
        alert("Do you want to continue ? ")
        axios.post("http://localhost:3001/book-cab",{
         cab_id: selected_cab.cab_id,
         source: source,
         destination:destination,
         userId: userId
        }).then(()=>{console.log(userId)})
      }

      // whenever a cab is booked it will change the status of the cab in showCabs using useEffect
      useEffect(() => {
        
        showCabs()

      }, [bookCab]); 
    
    
      const handleCabSelect = (cab) => {
        setSelectedCab(cab);
        setSelected(true)
      };

  //It will show the list of cabs and their details fetched from the database
  return (
    <div className="container">
        <table className="table table-bordered" style={{border:"2px solid black"}}>
      <thead>
        <tr>
          <th>Cab id</th>
          <th>Cab Name</th>
          <th>Price per Minute</th>
          <th>Estimated Cost</th>
          <th>Status</th>
          <th>Select</th>
        </tr>
      </thead>
      <tbody>
      {cabs.map((cab) => (
          <tr key={cab.cab_id}>
            <td>{cab.cab_id}</td>
            <td>{cab.cab_name}</td>
            <td>{cab.price}</td>
            <td>Rs.{Math.round(cab.price * shortest_time)}</td>
            <td>{cab.status =="BOOKED" ? 'Booked' : 'Available'}</td>
            <td>
              <button className="btn btn-primary"
                disabled={cab.status=="BOOKED"}
                onClick={() => handleCabSelect(cab)}
              >
                {cab.status=="BOOKED" ? 'Booked' : 'Select'}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    { selected ? <p>Selected Cab is : {selected_cab.cab_name} with price Rs.{Math.round(selected_cab.price * shortest_time)} </p> : <p>No Cab Selected</p>}
    <button className='btn btn-primary' onClick={bookCab}> Confirm Booking</button>
    </div>
  )
}

export default ShowCab
