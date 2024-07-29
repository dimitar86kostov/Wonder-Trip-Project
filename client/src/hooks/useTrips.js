
import { useEffect, useState } from "react";
import tripsAPI from "../api/trips-api";

export function useGetAllTrips() {
    const [trips, setTrips] = useState({});
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        (
            async () => {
                const result = await tripsAPI.getAll();

                setTrips(result);
                setIsFetching(false)
            }
        )()
    }, []);

    return [trips, setTrips, isFetching];
}

export function useGetOneTrips(tripId) {
    const [trip, setTrip] = useState({});

    useEffect(() => {
        (async () => {
            const result = await tripsAPI.getOne(tripId);

            setTrip(result);
        })();
    }, [tripId]);

    return [
        trip,
        setTrip
    ];
}

export function useCreateTrip() {
    const create = (tripData) => tripsAPI.create(tripData);

    return {
        create
    };
}