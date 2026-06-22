const Graph = require('./Graph');
const Node = require('./Node');
const Edge = require('./Edge');

// Test the Graph implementation
const graph = new Graph();

// Create nodes
const nodeA = new Node('A', 40.7128, -74.0060);
const nodeB = new Node('B', 34.0522, -118.2437);
const nodeC = new Node('C', 41.8781, -87.6298);
const nodeD = new Node('D', 29.7604, -95.3698);


// Add nodes to the graph
graph.addNode(nodeA);
graph.addNode(nodeB);
graph.addNode(nodeC);
graph.addNode(nodeD);

// Add edges to the graph
graph.addEdge('A', 'B', 10);
graph.addEdge('A', 'C', 15);
graph.addEdge('B', 'D', 20);
graph.addEdge('C', 'D', 25);

// Print the graph
graph.printGraph();
// console.log(graph.getAllNodes());
graph.getAllNodesIds();
