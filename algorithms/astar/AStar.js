const shortestPath = require("../shortestPath/ShortestPathEngine");
const euclideanHeuristic = require("../heuristics/EuclideanHeuristic");

function aStar(graph, startNode, endNode) {
    return shortestPath(
        graph,
        startNode,
        endNode,
        euclideanHeuristic
    );
}

module.exports = aStar;