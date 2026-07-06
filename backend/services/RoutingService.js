const aStar = require('../../algorithms/astar/AStar');
const dijkstra = require('../../algorithms/dijkstra/Dijkstra');
const NearestNodeFinder = require('../../routing/NearestNodeFinder');
const PathConverter = require('../../routing/PathConverter');

class RoutingService {

    constructor(graph) {

        this.graph = graph;

        this.finder = new NearestNodeFinder(graph);

        this.converter = new PathConverter(graph);

    }

    findRoute({start, end, algorithm}) {
        const startNode = this.finder.findNearestNode(
            start.latitude,
            start.longitude
        );

        const endNode = this.finder.findNearestNode(
            end.latitude,
            end.longitude
        );

        let result;

        if (algorithm === "dijkstra") {
            result = dijkstra(this.graph, startNode, endNode);
        }
        else if (algorithm === "astar") {
            result = aStar(this.graph, startNode, endNode);
        }
        else {
            throw new Error("Unsupported routing algorithm.");
        }

        const coordinates = this.converter.convert(result.path);

        return {

            distance: Number(result.distance.toFixed(2)),

            coordinates,

            nodePath: result.path

        };
    }
}

module.exports = RoutingService;