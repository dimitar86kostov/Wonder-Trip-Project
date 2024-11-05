import { useEffect, useState } from "react";
import commentsAPI from "../api/comments-api";

export function useCreateComment() {
    const createHandler = (tripId, comment) => commentsAPI.create(tripId, comment);

    return createHandler;
}

export function useEditComment() {
    const editingComment = (commentId, commentData) => commentsAPI.update(commentId, commentData);

    return editingComment;
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

export function useGetCommentById(commentId) {
    const [comment, setComment] = useState({
        text: "",
    });

    useEffect(() => {
        (async () => {
            const comment = await commentsAPI.getCommentById(commentId);
console.log(comment);

            setComment(comment);
        })();
    }, []);

    return {comment};

}