const Graph = require('../algorithms/graph/Graph');
const Node = require('../algorithms/graph/Node');
const Edge = require('../algorithms/graph/Edge');
const DistanceCalculator = require('./DistanceCalculator');

class GraphBuilder {

    constructor(osmData) {
        this.osmData = osmData;
    }

    createNodeMap() {
        const nodeMap = new Map();

        for (const node of this.osmData.nodes) {
            nodeMap.set(node.id, node);
        }

        return nodeMap;
    }

    build() {
        const graph = new Graph();

        this.nodeMap = this.createNodeMap();

        for(const way of this.osmData.ways) {
            this.processWay(graph, way);
        }

        return graph;
    }

    processWay (graph, way) {
        if (!this.isRoad(way)) {
            return;
        }

        this.createEdgesForWay(graph, way);
    }

    createEdgesForWay(graph, way) {
        const nodeRefs = way.nd || [];

        if (nodeRefs.length < 2) {
            return;
        }

        const oneWay = this.getTagValue(way, "oneway") === "yes";

        for (let i = 0; i < nodeRefs.length - 1; i++) {
            const from = this.nodeMap.get(nodeRefs[i].ref);
            const to = this.nodeMap.get(nodeRefs[i + 1].ref);

            if (!from || !to) {
                continue;
            }

            this.ensureNodeExists(graph, from);
            this.ensureNodeExists(graph, to);

            const weight = DistanceCalculator.calculateDistance(
                parseFloat(from.lat),
                parseFloat(from.lon),
                parseFloat(to.lat),
                parseFloat(to.lon)
            );

            graph.addEdge(

                new Edge(
                    from.id,
                    to.id,
                    weight
                ),

                !oneWay

            );

            
        }
    }

    getTagValue(way, key) {
        for (const tag of way.tag || []) {
            if (tag.k === key) {
                return tag.v;
            }
        }

        return null;
    }

    isRoad(way) {
        const DRIVABLE_HIGHWAYS = new Set([
            "motorway",
            "trunk",
            "primary",
            "secondary",
            "tertiary",
            "residential",
            "service",
            "living_street",
            "unclassified"
        ]);

        const highway = this.getTagValue(way, "highway");

        return DRIVABLE_HIGHWAYS.has(highway);
    }

    ensureNodeExists(graph, osmNode) {

        if (graph.hasNode(osmNode.id))
            return;

        graph.addNode(
            new Node(
                osmNode.id,
                parseFloat(osmNode.lat),
                parseFloat(osmNode.lon)
            )
        );
    }
};

module.exports = GraphBuilder;