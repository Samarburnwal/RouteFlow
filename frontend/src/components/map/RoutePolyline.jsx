import { Polyline } from "react-leaflet";

function RoutePolyline({ route }) {

    if (!route)
        return null;

    const positions = route.coordinates.map(point => [
        point.latitude,
        point.longitude
    ]);


    return (
        <>
            <Polyline
                positions={positions}
            />
        </>
    )
}

export default RoutePolyline;