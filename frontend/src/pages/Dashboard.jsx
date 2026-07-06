import MainLayout from "../components/layout/MainLayout";
import MapView from "../components/map/MapView";
import useMapSelection from "../hooks/useMapSelection";
import useRouting from "../hooks/useRouting";
import { useEffect } from "react";

function Dashboard() {
    const {

        source,
        destination,
        handleMapClick,
        clearSelection

    } = useMapSelection();

    const {

        route,
        loading,
        error,
        findRoute

    } = useRouting();

    useEffect(() => {

        if (!source || !destination)
            return;

        console.log("Calling backend...");

        const loadRoute = async () => {
            await findRoute(source, destination);
        };

        loadRoute();

        console.log(route);

    }, [source, destination]);
    
    return (
        <MainLayout>
            <MapView 
                onMapClick={handleMapClick}

                source={source}

                destination={destination}

                route={route}
            />
        </MainLayout>
    );
}

export default Dashboard;