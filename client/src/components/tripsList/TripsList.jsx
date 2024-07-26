import {
  Typography,
} from "@material-tailwind/react";
// import { useEffect, useState } from "react";
// import tripsAPI from "../../api/trips-api";
import TripListItem from "./tripListItem/TripListItem";
import useFetch from "../../hooks/useFetch";
import { Spinner } from "@material-tailwind/react";


export function TripsList() {
  // const [trips, setTrips] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const result = await tripsAPI.getAll();
  //     setTrips(result);
  //   })();
  // }, []);

  const { data, isFetching } = useFetch("http://localhost:3030/jsonstore/ski-resorts/list", {});
  const trips = Object.values(data);

  return (
    <section className="py-10 px-8">
      <div className="mx-auto text-center mb-16">

        <Typography variant="h1" className="my-4 text-4xl">
          Find What You Need
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

export default TripsList;



// const CONTENTS = [
//   {
//     img: "https://www.material-tailwind.com/image/product-4.png",
//     name: "Linen Suit",
//     price: "$2,500"
//   },
//   {
//     img: "https://www.material-tailwind.com/image/product-3.png",
//     name: "Tweed Suit",
//     price: "$2,300"
//   },
//   {
//     img: "https://www.material-tailwind.com/image/product-5.png",
//     name: "Premium Suit",
//     price: "$1,240"
//   },
// ];