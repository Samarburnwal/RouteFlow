class PathConverter {

    constructor(graph) {
        this.graph = graph;
    }

    convert(path) {
        const coordinates = [];

        for (const nodeId of path) {
            const node = this.graph.getNode(nodeId);

            if(node === null) continue;

            coordinates.push({
                latitude: node.latitude,
                longitude: node.longitude
            });
        }

        return coordinates;
    }

}

module.exports = PathConverter;