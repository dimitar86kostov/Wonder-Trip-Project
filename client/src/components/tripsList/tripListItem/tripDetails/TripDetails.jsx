import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { Button } from "@material-tailwind/react";

export default function TripDetails() {
    const [trip, setTrip] = useState([]);
    const { tripId } = useParams()

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:3030/jsonstore/ski-resorts/ski-resorts/details/${tripId}`)
            const result = await response.json();

            setTrip(result)
        })();
    }, []);


    const data = [
        {
            imageLink:
                "https://www.matterhornparadise.ch/ZBAG/05-skifahren/ski/01-nord/2205/image-thumb__2205__lightbox/ZBAG%20Ski%20Nord%20Lukas%20Solo-33.jpg",
        },
        {
            imageLink:
                "https://www.travelandleisure.com/thmb/wAqGdol8_AsJJ40bKfjU_O3EHGk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-header-zermatt-switzerland-ZERMATT0123-08b7127082434b9f83db57251c051c1b.jpg",
        },
        {
            imageLink:
                "https://www.travelandleisure.com/thmb/9E4X3yYM27bYCHvuEaWF1k2tvDw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-matterhorn-lake-stellisee-ZERMATT0123-48b97d7a588247848810a1a4a040d3e8.jpg",
        },
        {
            imageLink:
                "https://www.matterhornparadise.ch/ZBAG/05-skifahren/freeride-heliski/1433/image-thumb__1433__lightbox/Freeride%20%2817%29.png",
        },
       

    ];


    // const keys = Object.keys(trip.gallery);
    // const pics = Object.values(trip.gallery);
    const picsArr = trip.gallery;

    return (
        <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <img
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        src={trip.skiMap}
                        className="rounded-lg bg-gray-100"
                    />
                    <video className="h-full w-full rounded-lg" controls autoPlay muted>
                        <source src="https://cdn.pixabay.com/video/2017/01/18/7418-200092486_large.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

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
                            <dt className="font-medium text-gray-900">{`${trip.kmOfSlopes} km.`}</dt>
                            <dd className="mt-2 text-sm text-gray-500">Slopes</dd>
                        </div>
                        <div key={trip.highestPeak} className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">{`${trip.highestPeak} m.`}</dt>
                            <dd className="mt-2 text-sm text-gray-500">Highest Peak</dd>
                        </div>
                    </dl>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    {data.map(({ imageLink }, index) => (
                        <div key={index}>
                            <img
                                className="h-40 max-w-full rounded-lg object-cover object-center md:h-60"
                                src={imageLink}
                                alt=""
                            />
                        </div>
                    ))}
                </div>

                {/* <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8"> */}

                {/*                   
                    <img
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        src={picsArr[1]}
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        src={picsArr[2]}
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        alt="Side of walnut card tray with card groove and recessed card area."
                        src={picsArr[3]}
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        src={picsArr[4]}
                        className="rounded-lg bg-gray-100"
                    /> */}
                {/* </div> */}
            </div>
        </div>
    )
}

