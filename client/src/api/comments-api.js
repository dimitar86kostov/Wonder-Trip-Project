import * as request from './requester'
const BASE_URL = `http://localhost:3030/data/comments`;

const getAll = (tripId) => {

    const params = new URLSearchParams({
        where: `tripId="${tripId}"`,
        load: "author=_ownerId:users",
    });

    return request.get(`${BASE_URL}?${params.toString()}`);
};

const getCommentById = async (commentId) => {
    const response = await fetch(`http://localhost:3030/data/comments/${commentId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch comment');
    }
    return response.json();
}

const create = (tripId, text) => request.post(BASE_URL, { tripId, text });

const update = (commentId, commentData) => request.put(`${BASE_URL}/${commentId}`, commentData);

const remove = (commentId) => request.del(`${BASE_URL}/${commentId}`);

//Replies

const createReply = (commentId, replyData) =>
  request.post(`${BASE_URL}/${commentId}/replies`, replyData);

const editReply = (commentId, replyId, text) =>
  request.put(`${BASE_URL}/${commentId}/replies/${replyId}`, { text });

const deleteReply = (commentId, replyId) =>
  request.del(`${BASE_URL}/${commentId}/replies/${replyId}`);




const commentsAPI = {
    create,
    getAll,
    update,
    getCommentById,
    remove,
    createReply,
    editReply,
    deleteReply
}

export default commentsAPI