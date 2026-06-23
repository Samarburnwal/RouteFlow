const PriorityQueue = require('../graph/PriorityQueue');

function shortestPath(graph, startNode, endNode, heuristic) {
    const distances = {};
    const previous = {};
    const visited = new Set();
    const pq = new PriorityQueue();

    for(const nodeId of graph.getAllNodesIds()) {
        // console.log(nodeId);
        
        distances[nodeId] = Infinity;
        previous[nodeId] = null;
    }

    distances[startNode] = 0;
    pq.insert(startNode, 0);

    const goal = graph.getNode(endNode);

    while (!pq.isEmpty()) {

        const { value: currentNode } = pq.extractMin();

        if (visited.has(currentNode))
            continue;

        visited.add(currentNode);

        if (currentNode === endNode)
            break;

        const neighbors = graph.getNeighbors(currentNode);

        for (const edge of neighbors) {

            const newDistance =
                distances[currentNode] + edge.weight;

            if (newDistance < distances[edge.destination]) {

                distances[edge.destination] = newDistance;

                previous[edge.destination] = currentNode;

                const next = graph.getNode(edge.destination);

                const priority =
                    newDistance + heuristic(next, goal);

                pq.insert(edge.destination, priority);
            }
        }
    }

    if (distances[endNode] === Infinity) {
        return {
            distance: Infinity,
            path: []
        };
    }

    const path = [];

    let current = endNode;

    while (current !== null) {
        path.push(current);
        current = previous[current];
    }

    path.reverse();

    return {
        distance: distances[endNode],
        path
    };
}

module.exports = shortestPath;