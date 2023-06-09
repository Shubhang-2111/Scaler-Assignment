const {dijkstra} = require('./shortest_time')
require('dotenv').config();

const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
const mysql = require('mysql')

// for local host we can use mysql database  
//create connection to the database

// const db = mysql.createConnection({
//   user: "root",
//   host: 'localhost',
//   password: '',
//   database: 'cab-booking',
// })

// below is the connection to a sample online database running on freemysqldatabase 
// NOTE if you use below database then booking time may vary  from your machine time
// Please do not try to change the structure of database !

const db = mysql.createConnection({
  user: "sql12610464",
  host: 'sql12.freesqldatabase.com',
  password: 'iBHgmB3Rz1', 
  database: 'sql12610464',
})

// show the list of cabs from mysql databse
app.get("/get-cabs",(req,res)=>{
  db.query(
      "SELECT * FROM cabs",
      (err,result)=>{
          if(err)
          console.log(err)
          else
              res.send(result)
      })
  })

// calculate shortest time/path between two node
  app.post('/shortest-path', (req, res) => {
    const node1 = req.body.node1;
    const node2 = req.body.node2;
  
    // Implement shortest path algorithm to calculate the shortest path between node1 and node2
    const shortestPath = dijkstra(node1, node2);
  
    // Return the shortest path as a response
    res.json({ shortestPath });
  });

// mark a cab as booked on the request of the user
app.post("/book-cab",(req,res)=>{
    const cab_id = req.body.cab_id
    const source = req.body.source
    const destination = req.body.destination
    const userId = req.body.userId
db.query(
    `UPDATE cabs SET source = "?", destination = "?", status = "BOOKED" , booking_time = NOW() , user_id = "?" WHERE cab_id = ?;`,
    [source,destination,userId,cab_id],
    (err,result)=>{
        if(err)
        console.log(err)
        else
            res.send("Value Inserted")
    })
 
})

//show the latest status of the cabs
app.get("/track-cab",(req,res)=>{
  db.query("SELECT * FROM cabs",
      (err,result)=>{
          if(err)
          console.log(err)
          else
              res.send(result)
      })
  })

  app.post("/change-price",(req,res)=>{
    const cab_id = req.body.cab_id
    const newPrice = req.body.newPrice
db.query(
    `UPDATE cabs SET price = ? WHERE cab_id = ?;`,
    [newPrice,cab_id],
    (err,result)=>{
        if(err)
        console.log(err)
        else
            res.send("Value Inserted")
    })
 
})

 
// once the server starts all the values of database will be reset to inital values
app.listen(3001, () => {
  console.log('Server started on port 3001'),
  db.query(
    "UPDATE cabs SET source = DEFAULT, destination = DEFAULT, status = DEFAULT,booking_time = NULL , user_id = NULL "),
    console.log("Values Reseted")
});


