import { useState } from "react";

function useMapSelection() {

    const [source, setSource] = useState(null);

    const [destination, setDestination] = useState(null);

    function handleMapClick(latlng) {
        console.log("Map clicked", latlng);
        
        const point = {
            latitude: latlng.lat,
            longitude: latlng.lng
        };


        if (!source) {
            setSource(point);
            return;
        }

        if (!destination) {
            setDestination(point);
            return;
        }

        setSource(point);
        setDestination(null);
    }

    function clearSelection() {
        setSource(null);
        setDestination(null);
    }

    return {
        source,
        destination,
        handleMapClick,
        clearSelection
    };
}

export default useMapSelection;