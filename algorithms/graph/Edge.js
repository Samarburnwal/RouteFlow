class Edge {
    constructor(sourceId, destinationId, weight) {
        this.source = sourceId;
        this.destination = destinationId;
        this.weight = weight;
    }
};

module.exports = Edge;