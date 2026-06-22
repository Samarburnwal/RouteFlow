const GraphBuilder = require("./GraphBuilder");
const OSMReader = require("./OSMReader");

const reader = new OSMReader("../data/map.osm");

const osmData = reader.read();

// console.log("Nodes:", osmData.nodes.length);
// console.log("Ways:", osmData.ways.length);
// console.log("Relations:", osmData.relations.length);
// console.log(osmData.ways[0]);

const obj = new GraphBuilder(osmData);
obj.createNodeMap();


const graph = obj.build();

let maxDegree = 0;
let nodeId = null;

for (const [id, neighbors] of graph.adjList) {
    if (neighbors.length > maxDegree) {
        maxDegree = neighbors.length;
        nodeId = id;
    }
}

console.log(nodeId, maxDegree);