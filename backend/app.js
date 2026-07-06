const express = require("express");
const OSMReader = require("../map/OSMReader");
const GraphBuilder = require('../map/GraphBuilder');
const RoutingService = require('./services/RoutingService');
const cors = require('cors');

const app = express();

app.use(
    cors({
        origin: 'http://localhost:5173'
    })
);

const reader = new OSMReader('../data/map.osm');

const osmData = reader.read();

const builder = new GraphBuilder(osmData);

console.log("Loading map...");

const graph = builder.build();

console.log(
    `Graph loaded with ${graph.nodes.size} nodes.`
);

const routingService = new RoutingService(graph);

app.use(express.json());

const PORT = 3000;

app.post("/route",(req,res)=>{
    try{
        const { start, end } = req.body;
        
        if(!start || !end){
            return res.status(400).json({
                error:"Start and end coordinates are required."
            });
        }

        const route = routingService.findRoute({
            start,
            end,
            algorithm: "astar"
        });

        console.log(route);
        

        res.json(route);
    }
    catch(error){
        res.status(500).json({
            error:error.message
        });
    }

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});