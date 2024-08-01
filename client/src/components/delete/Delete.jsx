import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    IconButton,
    Typography,
    Input,
} from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { useGetOneTrips } from "../../hooks/useTrips";

export default function Delete() {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen((cur) => !cur);

    const { tripId } = useParams();
    const trip = useGetOneTrips(tripId);

    console.log(trip[0].resort);
    return (
        <section className="grid place-items-center h-screen">
            <Button onClick={handleOpen}>Open Modal</Button>
            <Dialog className="p-4" size="md" open={open} handler={handleOpen}>
                <DialogHeader className="justify-between">
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/012/042/292/small/warning-sign-icon-transparent-background-free-png.png"
                        alt="exclamation"
                        className="w-10 h-10"
                    />
                    <IconButton
                        color="gray"
                        size="sm"
                        variant="text"
                        onClick={handleOpen}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </DialogHeader>
                <DialogBody className="overflow-y-scroll">
                    <Typography color="blue-gray" className="mb-1 font-bold">
                        Delete
                    </Typography>
                    <Typography
                        variant="paragraph"
                        className="font-normal text-gray-600 max-w-lg"
                    >
                        Are you sure you want to delete {trip[0].resort} and all related comments?
                        This action cannot be undone.
                    </Typography>
                    <div>
                        <Typography
                            variant="small"
                            className="mt-6 mb-2 text-gray-600 font-normal"
                        >
                            Please type{" "}
                            <strong className="text-gray-900">
                                &quot;Delete {trip[0].resort}&quot;
                            </strong>{" "}
                            to confirm.
                        </Typography>
                        <div className="flex flex-col md:flex-row gap-2">
                            <Input
                                color="gray"
                                label="Delete"
                                size="lg"
                                className="w-full md:max-w-lg"
                            />
                            <Button color="gray" className="w-full lg:max-w-[15rem]">
                                I understand, delete this post
                            </Button>
                        </div>
                    </div>
                </DialogBody>
            </Dialog>
        </section>
    );
}
