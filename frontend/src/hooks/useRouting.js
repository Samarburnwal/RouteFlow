import { useState } from "react";
import axios from "axios";
import { findRouteApi } from "../services/routingapi";

function useRouting() {

    const [route, setRoute] = useState(null);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    async function findRoute(
        source,
        destination
    ) {

        setLoading(true);

        setError(null);

        try {
            const result = await findRouteApi({
                start: source,
                end: destination,
                algorithm: "astar"
            });

            setRoute(result);
            // console.log(result);
            
        }
        catch(error) {
            setError(error.message);
        }
        finally {
            setLoading(false);
        }
    }

    return {

        route,

        loading,

        error,

        findRoute

    };
}

export default useRouting;