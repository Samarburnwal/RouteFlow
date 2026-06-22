const fs = require("fs");
const { XMLParser } = require("fast-xml-parser");

class OSMReader {

    constructor(filePath) {
        this.filePath = filePath;

        this.parser = new XMLParser({
            ignoreAttributes: false,
            attributeNamePrefix: "",
            isArray: (name) => {
                return name === "node" ||
                    name === "way" ||
                    name === "relation" ||
                    name === "tag" ||
                    name === "nd";
            }
        });
    }

    read() {
        const xml = fs.readFileSync(this.filePath, "utf8");
        const data = this.parser.parse(xml);
        return {
            nodes: data.osm.node || [],
            ways: data.osm.way || [],
            relations: data.osm.relation || []
        };
    }

}

module.exports = OSMReader;