
import { useEffect, useState } from "react";
import tripsAPI from "../api/trips-api";

export function useGetAllTrips() {
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

    const createListHandler = (tripData) => tripsAPI.createAtList(tripData);
    const createDetailsHandler = (tripData) => tripsAPI.createAtDetails(tripData);
    const create = (tripData) => tripsAPI.create(tripData);

    return {
        createListHandler,
        createDetailsHandler,
        create
    };
}