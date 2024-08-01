import { Link } from 'react-router-dom';

export { Link } from 'react-router-dom'

export default function TripCard(trip) {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                    <div
                        className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                        <img
                            src={trip.imageUrl}
                            alt={trip.resort} />
                    </div>
                    <div className="p-6">
                        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {trip.resort}
                        </h5>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            {trip.description}
                        </p>
                    </div>
                    <div className="p-6 pt-0">

                        <Link to={`/catalog/${trip._id}/details`}>
                            <button
                                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                type="button">
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

// <a href="#buttons-with-link">
// <button
//   class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
//   type="button">
//   Filled
// </button>
// </a>
// <a href="#buttons-with-link">
// <button
//   class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85]"
//   type="button">
//   Gradient
// </button>
// </a>
// <a href="#buttons-with-link">
// <button
//   class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]"
//   type="button">
//   Outlined
// </button>
// </a>
// <a href="#buttons-with-link">
// <button
//   class="px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
//   type="button">
//   Text
// </button>
// </a>