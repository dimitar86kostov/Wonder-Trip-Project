import { useEffect, useState } from "react";
import commentsAPI from "../api/comments-spi";
import usePersistedState from "./usePersistedState";

export function useCreateComment() {
    const commentCreateHandler = (tripId, comment) => commentsAPI.create(tripId, comment);

    return commentCreateHandler;
}

export function useGetAllComments(tripId) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await commentsAPI.getAll(tripId);

            setComments(result);
        })();
    }, [tripId]);

    return [
        comments,
        setComments
    ];
}