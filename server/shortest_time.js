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


module.exports = {
  dijkstra,
}