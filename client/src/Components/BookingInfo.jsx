import React from 'react'
import FinalBooking from './FinalBooking'
import Navbar from './Navbar'
import TrackCab from './TrackCab'

const BookingInfo = () => {


  return (
   <div>
    <Navbar/>
    <div className="container d-flex flex-column my-5" style={{margin:"auto",padding:"5px"}}>
    <FinalBooking/>
    <TrackCab/>
    </div>
    </div>
  )
}

export default BookingInfo
