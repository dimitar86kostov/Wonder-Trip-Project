import * as request from './requester'
const BASE_URL = `http://localhost:3030/data/comments`;

const getAll = (tripId) => {
    
    const params = new URLSearchParams({
        where: `tripId="${tripId}"`,
        load: "author=_ownerId:users", 
    });

    return request.get(`${BASE_URL}?${params.toString()}`);
};

const getCommentById = (commentId) => request.get(`${BASE_URL}/${commentId}`);

const create = (tripId, text) => request.post(BASE_URL, { tripId, text });

const update = (commentId, commentData) => request.put(`${BASE_URL}/${commentId}`, commentData );



const commentsAPI = {
    create,
    getAll,
    update,
    getCommentById
}

export default commentsAPI