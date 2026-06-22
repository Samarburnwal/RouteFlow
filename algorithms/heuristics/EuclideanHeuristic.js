function euclideanHeuristic(nodeA, nodeB) {

    const dx = nodeA.latitude - nodeB.latitude;
    const dy = nodeA.longitude - nodeB.longitude;

    return Math.sqrt(dx * dx + dy * dy);
}

module.exports = euclideanHeuristic;