import { useParams } from "react-router-dom";
import { useGetOneTrips } from "../../hooks/useTrips";
import Comments from "./comments/Comments";

export default function TripDetails() {
    const { tripId } = useParams();

    const [trip, setTrip] = useGetOneTrips(tripId);

    return (
        <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
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
                        {/* {Object.entries(trip).forEach((feature, i) => (
                            <div key={feature[0][1]} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">{feature[1][0]}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature[1][1]}</dd>
                            </div>
                        ))} */}
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
                    </dl>
                </div>
                <div className="p-10 grid grid-rows-2 gap-2">
                    {<Comments key={trip._id} />}
                </div>
            </div>
        </div>
    )
}

