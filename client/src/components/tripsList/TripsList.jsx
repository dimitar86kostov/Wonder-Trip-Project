import {
  Typography,
} from "@material-tailwind/react";
import TripListItem from "./tripListItem/TripListItem";
import { Spinner } from "@material-tailwind/react";
import { useGetAllTrips } from "../../hooks/useTrips";
import Search from "../search/Search";
import tripsAPI from "../../api/trips-api";


export default function TripsList() {

  const [trips, setTrips, isFetching] = useGetAllTrips();

  const searchHandler = (query) => {
    const data = tripsAPI.searching(query);

  }

  return (
    <section className="py-10 px-8">
      <div className="mx-auto text-center mb-16">
        <Typography variant="h1" className="my-4 text-4xl">
          Catalog 
        </Typography>

        <div className="mx-auto relative flex w-full max-w-[24rem]">
          <Search searching={searchHandler} />
        </div>
      </div>

      <div className="mx-auto container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
          {isFetching
            ? <Spinner style={{ width: '1300px', margin: '100px auto' }} className="h-16 w-16 items-center text-gray-900/50" />
            : trips.map((trip) => (<TripListItem
              key={trip._id}
              {...trip}
            />))
          }
        </div>
      </div>
    </section>
  );
}
