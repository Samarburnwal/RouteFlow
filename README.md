# 🛣️ RouteFlow

A high-performance route optimization platform built using **OpenStreetMap**, **Graph Algorithms**, **React**, and **Node.js**.

RouteFlow constructs a road network graph from OpenStreetMap (OSM) data and computes the shortest path between two locations using graph search algorithms like **Dijkstra** and **A\***. The computed route is visualized interactively on a map using **React Leaflet**.

---

## 📸 Demo

<img width="1918" height="910" alt="image" src="https://github.com/user-attachments/assets/bc52e779-66d6-4e5d-a5cf-2d9df6c12b13" />


---

## ✨ Features

- 🗺️ Interactive map built with React Leaflet
- 📍 Select source and destination by clicking on the map
- 🛣️ Shortest path computation using graph algorithms
- ⚡ A* Search Algorithm
- 📈 Dijkstra's Algorithm
- 🌍 OpenStreetMap (.osm) data parsing
- 🔗 Custom graph construction from road network
- 📌 Route visualization using Leaflet polylines
- 🧩 Modular frontend and backend architecture

---

## 🏗️ Project Architecture

```
                User
                  │
                  ▼
          React Frontend
                  │
      ┌───────────┴───────────┐
      ▼                       ▼
 Map Interaction         Route Panel
      │
      ▼
 Express REST API
      │
 Routing Service
      │
 ┌────┴────┐
 ▼         ▼
A*     Dijkstra
      │
      ▼
 Road Network Graph
      │
      ▼
 OpenStreetMap (.osm)
```

---

## 🚀 Tech Stack

### Frontend

- React 19
- Vite
- Tailwind CSS
- React Leaflet
- Axios

### Backend

- Node.js
- Express.js

### Algorithms

- Dijkstra
- A* Search
- Priority Queue (Min Heap)
- Graph Data Structure

### GIS

- OpenStreetMap
- XML Parsing
- Haversine Distance

---

## 📂 Project Structure

```
RouteFlow/

├── backend/
│
│   ├── algorithms/
│   │   ├── astar/
│   │   ├── dijkstra/
│   │   ├── graph/
│   │   └── shortestPath/
│   │
│   ├── map/
│   │   ├── OSMReader.js
│   │   ├── GraphBuilder.js
│   │   ├── DistanceCalculator.js
│   │   └── NearestNodeFinder.js
│   │
│   ├── services/
│   │   └── RoutingService.js
│   │
│   └── app.js
│
├── frontend/
│
│   ├── components/
│   │   ├── layout/
│   │   └── map/
│   │
│   ├── hooks/
│   │
│   ├── services/
│   │
│   ├── pages/
│   │
│   └── App.jsx
│
└── README.md
```

---

## ⚙️ How It Works

### 1. Parse OSM Data

The application reads an `.osm` file and extracts:

- Nodes
- Roads (Ways)
- Road metadata

---

### 2. Build Graph

Every road is converted into a graph.

- Intersections → Graph Nodes
- Roads → Weighted Edges

Edge weights are calculated using the **Haversine Formula**.

---

### 3. User Interaction

The user selects:

- Source
- Destination

by clicking on the map.

---

### 4. Routing

The frontend sends

```json
POST /route
```

```json
{
    "start": {
        "latitude": 23.63,
        "longitude": 85.52
    },
    "end": {
        "latitude": 23.62,
        "longitude": 85.51
    },
    "algorithm": "astar"
}
```

The backend:

1. Finds nearest graph nodes
2. Runs A* (or Dijkstra)
3. Converts graph nodes back to geographic coordinates
4. Returns the route

---

### 5. Visualization

The frontend renders

- Source Marker
- Destination Marker
- Route Polyline

using React Leaflet.

---

## 📌 Current Features

- [x] OSM Reader
- [x] Graph Builder
- [x] Priority Queue
- [x] Graph Data Structure
- [x] Dijkstra Algorithm
- [x] A* Algorithm
- [x] Routing REST API
- [x] React Frontend
- [x] Interactive Map
- [x] Source & Destination Selection
- [x] Route Visualization

---

## 🚧 Planned Features

- [ ] Algorithm selector (A* / Dijkstra)
- [ ] Route statistics panel
- [ ] ETA calculation
- [ ] Clear Route
- [ ] Fit map to route
- [ ] Turn-by-turn navigation
- [ ] Driver simulation
- [ ] Traffic simulation
- [ ] Multiple waypoints
- [ ] Route history
- [ ] Live GPS support

---

## 🖥️ Running the Project

### Backend

```bash
cd backend

npm install

node app.js
```

Backend runs on

```
http://localhost:3000
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

## 📚 Concepts Used

- Graph Theory
- Shortest Path Algorithms
- Heuristic Search
- Geographic Information Systems (GIS)
- OpenStreetMap
- REST APIs
- React Hooks
- Modular Software Architecture

---

## 🤝 Contributing

Contributions are welcome!

Feel free to open issues or submit pull requests to improve RouteFlow.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Samar Burnwal**

If you found this project helpful, consider giving it a ⭐ on GitHub.
