
import { useEffect, useState } from "react";
import tripsAPI from "../api/trips-api";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from 'react-router-dom'

export function useGetAllTrips() {
    const [trips, setTrips] = useState({});
    const [isFetching, setIsFetching] = useState(true);
    const { logout } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        (
            async () => {
                try {
                    const result = await tripsAPI.getAll();

                    setTrips(result);
                    setIsFetching(false)
                } catch (err) {
                    console.error(err.message);

                    if (err.message === 'Invalid access token') {
                        logout();

                        console.log("Session is restored!");

                        navigate('/');
                        return;
                    }
                }
            }
        )()
    }, []);

    return [trips, setTrips, isFetching];
}

export function useGetOneTrips(tripId) {
    const [trip, setTrip] = useState({
        resort: '',
        country: '',
        imageUrl: '',
        altitude: '',
        kmOfSlopes: '',
        numberOfLifts: '',
        numberOfHotels: '',
        bestHotelPrice: '',
        highestPeak: '',
        skiMap: '',
        description: ''
    });

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

export function useDeleteTrip() {
    const remove = (tripId) => tripsAPI.remove(tripId);

    return { remove };
}