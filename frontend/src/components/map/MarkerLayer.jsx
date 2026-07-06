import { Marker, Popup } from "react-leaflet";

function MarkerLayer({ source, destination }) {
    return (
        <>

            {source && (
                <Marker
                    position={[
                        source.latitude,
                        source.longitude
                    ]}
                >
                    <Popup>
                        Source
                    </Popup>
                </Marker>
            )}

            {destination && (
                <Marker
                    position={[
                        destination.latitude,
                        destination.longitude
                    ]}
                >
                    <Popup>
                        Destination
                    </Popup>
                </Marker>
            )}

        </>
    );
}

export default MarkerLayer;