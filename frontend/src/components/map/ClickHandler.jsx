import { useMapEvents } from "react-leaflet";

function ClickHandler({ onMapClick }) {

    useMapEvents({

        click(event) {
            onMapClick(event.latlng);
        }

    });

    return null;
}

export default ClickHandler;