import {
  Typography,
} from "@material-tailwind/react";
import TripListItem from "./tripListItem/TripListItem";
import { Spinner } from "@material-tailwind/react";
import { useGetAllTrips } from "../../hooks/useTrips";


export default function TripsList() {

  const [trips, setTrips, isFetching] = useGetAllTrips();

  return (
    <section className="py-10 px-8">
      <div className="mx-auto text-center mb-16">

        <Typography variant="h1" className="my-4 text-4xl">
          Catalog Of Our Newest Resorts
        </Typography>
        <Typography className="!font-normal text-gray-500 mx-auto max-w-2xl">
          Travel becomes a strategy for accumulating photographs.
        </Typography>
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
