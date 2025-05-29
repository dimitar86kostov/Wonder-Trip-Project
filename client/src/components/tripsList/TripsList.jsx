import { useState, useEffect } from "react";
import { Spinner, Typography } from "@material-tailwind/react";
import tripsAPI from "../../api/trips-api";
import TripListItem from "./tripListItem/TripListItem";
import Search from "../search/Search";
import { useGetAllTrips } from "../../hooks/useTrips";

export default function TripsList() {
  const [trips, setTrips] = useState([]);
  const [allTrips, , isFetching] = useGetAllTrips(); // оригиналните
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    if (allTrips.length && trips.length === 0) {
      setTrips(allTrips);
    }
  }, [allTrips]);

  const searchHandler = async (query) => {
    if (!query) {
      setTrips(allTrips);
      return;
    }

    try {
      setSearchLoading(true);
      const data = await tripsAPI.searching(query);
      setTrips(data);
    } catch (error) {
      console.error("Search error:", error);
      setTrips([]);
    } finally {
      setSearchLoading(false);
    }
  };

  return (
    <section className="py-10 px-8">
      <div className="mx-auto text-center mb-16">
        <Typography variant="h1" className="my-4 text-4xl">Catalog</Typography>

        <div className="mx-auto relative flex w-full max-w-[24rem]">
          <Search searching={searchHandler} loading={searchLoading} />
        </div>
      </div>

      <div className="mx-auto container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
          {Array.isArray(trips) && trips.map((trip) => (
            <TripListItem key={trip._id} {...trip} />
          ))}
        </div>
      </div>
    </section>
  );
}
