import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Booking() {
    const tripId = useParams();
    
    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:3030/jsonstore/ski-resorts/ski-resorts/details/${id}`)
            const result = await response.json();
            
            console.log(result);
        })();
    }, []);
    return (
        <video className="h-full w-full rounded-lg" controls autoPlay muted>
            <source src="https://cdn.pixabay.com/video/2017/01/18/7418-200092486_large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}