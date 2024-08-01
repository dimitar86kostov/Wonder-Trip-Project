import { Link, useParams } from "react-router-dom";
import { useGetOneTrips } from "../../hooks/useTrips";
import Comments from "./comments/Comments";
import { useAuthContext } from "../../contexts/AuthContext";

export default function TripDetails() {
    const { tripId } = useParams();
    const { userId } = useAuthContext();
    const [trip, setTrip] = useGetOneTrips(tripId);

    const isOwner = trip._ownerId === userId;

    return (
        <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"><br />
                        {trip.resort}</h2>
                    <img
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        src={trip.skiMap}
                        className="rounded-lg bg-gray-100"
                    />

                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"><br />
                        {`\n ${trip.numberOfLifts} Lifts _______ ${trip.kmOfSlopes} km. of Slopes`}</h2>
                    <p className="mt-4 text-gray-500">
                        {trip.description}
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">

                        <div key={trip.altitude} className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">{`${trip.altitude} m.`}</dt>
                            <dd className="mt-2 text-sm text-gray-500">Altitude</dd>
                        </div>
                        <div key={trip.bestHotelPrice} className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">{`${trip.bestHotelPrice} € per night.`}</dt>
                            <dd className="mt-2 text-sm text-gray-500">Best Hotel Price</dd>
                        </div>
                        <div key={trip.kmOfSlopes} className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">{trip.numberOfHotels}</dt>
                            <dd className="mt-2 text-sm text-gray-500">Hotels in the resort</dd>
                        </div>
                        <div key={trip.highestPeak} className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">{`${trip.highestPeak} m.`}</dt>
                            <dd className="mt-2 text-sm text-gray-500">Highest Peak</dd>
                        </div>
                        <Link to={`/catalog/${tripId}/edit`}>
                            <button
                                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                type="button">
                                Edit
                            </button>
                        </Link>
                    </dl>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div className="grid-rows-2 gap-2">
                        {<Comments key={trip._id} tripId={tripId} {...trip} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

