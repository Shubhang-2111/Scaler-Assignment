const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
const mysql = require('mysql')

const db = mysql.createConnection({
  user: "root",
  host: 'localhost',
  password: '',
  database: 'cab-booking',
})

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

function dijkstra(start, end) {
    const graph = {
        A: { B: 5, C: 7 },
        B: { A: 5, E: 20, D: 15 },
        C: { A: 7, D: 5, E: 35 },
        D: { B: 15, C: 5, F: 20 },
        E: { B:20 ,C: 35, F: 10 },
        F: { D: 20, E: 10 }
      };
    const distances = {};
    const visited = {};
    const previous = {};
    const queue = [];
    
    for (const node in graph) {
      distances[node] = Infinity;
      previous[node] = null;
    }
    
    distances[start] = 0;
    queue.push(start);
    
    while (queue.length > 0) {
      let current = null;
      let shortestDistance = Infinity;
      
      // Find node with shortest distance from start
      for (const node of queue) {
        if (distances[node] < shortestDistance && !visited[node]) {
          shortestDistance = distances[node];
          current = node;
        }
      }
      
      visited[current] = true;
      queue.splice(queue.indexOf(current), 1);
  
      for (const neighbor in graph[current]) {
        const distance = distances[current] + graph[current][neighbor];
        if (distance < distances[neighbor]) {
          distances[neighbor] = distance;
          previous[neighbor] = current;
          if (!visited[neighbor]) {
            queue.push(neighbor);
          }
        }
      }
    }
    
    const path = [end];
    let node = end;
    while (node !== start) {
      node = previous[node];
      path.unshift(node);
    }
    
    return distances[end];
  }

  app.post('/shortest-path', (req, res) => {
    const node1 = req.body.node1;
    const node2 = req.body.node2;
  
    // Implement shortest path algorithm to calculate the shortest path between node1 and node2
    const shortestPath = dijkstra(node1, node2);
  
    // Return the shortest path as a response
    res.json({ shortestPath });
  });
  
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

app.get("/track-cab",(req,res)=>{
  db.query("SELECT * FROM cabs",
      (err,result)=>{
          if(err)
          console.log(err)
          else
              res.send(result)
      })
  })
 
app.listen(3001, () => {
  console.log('Server started on port 3001'),
  db.query(
    "UPDATE cabs SET source = DEFAULT, destination = DEFAULT, status = DEFAULT,booking_time = NULL , user_id = NULL "),
    console.log("Values Reseted")
});


