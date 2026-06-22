const shortestPath = require("../shortestPath/ShortestPathEngine");
const zeroHeuristic = require("../heuristics/ZeroHeuristic");

function dijkstra(graph, startNode, endNode) {
    return shortestPath(
        graph,
        startNode,
        endNode,
        zeroHeuristic
    );
}

module.exports = dijkstra;