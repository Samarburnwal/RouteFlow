class Node {
    constructor(id, latitude = null, longitude = null, metadata = {}) {
        this.id = id;
        this.latitude = latitude;
        this.longitude = longitude;
        this.metadata = metadata;
    }
}

module.exports = Node;