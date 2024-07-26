
import { useEffect, useState } from "react";
import tripsAPI from "../api/trips-api";

export function useGetAllGames() {
    const [trips, setTrips] = useState({});

    useEffect(() => {
        (
            async () => {
                const result = await tripsAPI.getAll();

                setTrips(result);
            }
        )()
    });

    return [trips, setTrips];
}

export function useGetOneGames(tripId) {
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

export function useCreateGame() {

    const tripCreateHandler = (tripData) => tripsAPI.create(tripData);

    return tripCreateHandler;
}