const GraphBuilder = require("./GraphBuilder");
const OSMReader = require("./OSMReader");
const dijkstra = require("../algorithms/dijkstra/Dijkstra");
const NearestNodeFinder = require("../routing/NearestNodeFinder");
const PathConverter = require('../routing/PathConverter');
const RoutingService = require('../backend/services/RoutingService');

const reader = new OSMReader("../data/map.osm");

const osmData = reader.read();

// console.log("Nodes:", osmData.nodes.length);
// console.log("Ways:", osmData.ways.length);
// console.log("Relations:", osmData.relations.length);
// console.log(osmData.ways[0]);

const obj = new GraphBuilder(osmData);
obj.createNodeMap();


const graph = obj.build();



// const result = dijkstra(
//     graph,
//     "9269792207",
//     "2813193613"
// );

// console.log(graph.hasNode("2682149472"));
// console.log(graph.nodes.has("2682149472"));

// console.log(obj.nodeMap.has("2682149472"));

// console.log(result);

// let count = 0;

// let count = 0;

// for (const id of graph.getAllNodesIds()) {
//     console.log(id);

//     if (++count == 100)
//         break;
// }

// const finder = new NearestNodeFinder(graph);

// const id = finder.findNearestNode(
//     22.630350,
//     83.521600
// );

// console.log(id);

const routingService = new RoutingService(graph);

const route = routingService.findRoute({

    start: {
        latitude: 23.6303213,
        longitude: 85.5215878
    },

    end: {
        latitude: 23.6400000,
        longitude: 85.5300000
    },

    algorithm: "astar"

});

console.log(route);