const DistanceCalculator = require("../map/DistanceCalculator");

class NearestNodeFinder {
    constructor(graph) {
        this.graph = graph;
    }

    findNearestNode(latitude, longitude) {
        let nearestNode = null;
        let minDistance = Infinity;

        for(const node of this.graph.nodes.values()) {
            const distance = DistanceCalculator.calculateDistance(
                latitude,
                longitude,
                node.latitude,
                node.longitude
            );

            if(distance < minDistance) {
                minDistance = distance;
                nearestNode = node;
            }
        }

        return nearestNode.id;
    }
};

module.exports = NearestNodeFinder;