import { MapContainer, TileLayer } from "react-leaflet";
import ClickHandler from "./ClickHandler";
import MarkerLayer from "./MarkerLayer";
import RoutePolyline from "./RoutePolyline";

function MapView({ onMapClick, source, destination, route }) {
        
    return (
        <div className="h-full w-full">
            <MapContainer
                center={[23.6303, 85.5216]}
                zoom={14}
                className="h-full w-full"
            >
                <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <ClickHandler
                    onMapClick={onMapClick}
                />

                <MarkerLayer
                    source={source}
                    destination={destination}
                />

                <RoutePolyline
                    route={route}
                />
            </MapContainer>
        </div>
    );
}

export default MapView;