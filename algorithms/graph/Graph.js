const Edge = require('./Edge');

class Graph {
    constructor() {
        this.nodes = new Map();
        this.adjList = new Map();
    }

    // ---------- Node Methods ----------

    addNode(node) {
        if (this.nodes.has(node.id)) {
            throw new Error(`Node ${node.id} already exists.`);
        }

        this.nodes.set(node.id, node);
        this.adjList.set(node.id, []);
    }

    hasNode(id) {
        return this.nodes.has(id);
    }

    getNode(id) {
        return this.nodes.get(id) || null;
    }

    getAllNodes() {
        return [...this.nodes.values()];
    }

    getAllNodesIds() {
        return [...this.nodes.keys()];
    }

    // ---------- Edge Methods ----------

    addEdge(edge, bidirectional = true) {

        if (!this.nodes.has(edge.source) ||
            !this.nodes.has(edge.destination)) {

            throw new Error('nothing is here');
        }

        this.adjList
            .get(edge.source)
            .push(edge);

        if (bidirectional) {

            this.adjList
                .get(edge.destination)
                .push(
                    new Edge(
                        edge.destination,
                        edge.source,
                        edge.weight
                    )
                );

        }
    }

    hasEdge(source, destination) {
        return this.adjList
            .get(source)
            .some(edge => edge.destination === destination);
    }

    getEdges(nodeId) {
        if (!this.hasNode(nodeId)) {
            throw new Error(`Node ${nodeId} doesn't exist.`);
        }

        return this.adjList.get(nodeId);
    }

    getNeighbors(nodeId) {
        return this.getEdges(nodeId);
    }

    // ---------- Utility ----------

    printGraph() {
        for (const [nodeId, edges] of this.adjList) {
            const str = edges
                .map(edge => `${edge.destination} (${edge.weight})`)
                .join(", ");

            console.log(`${nodeId} -> ${str}`);
        }
    }
}

module.exports = Graph;