import * as request from './requester'
const BASE_URL = `http://localhost:3030/data/comments`;


const create = (tripId, text) => request.post(BASE_URL, { tripId, text });


const getAll = (tripId) => {

    const params = new URLSearchParams({
        where: `tripId="${tripId}"`,
        load: "author=_ownerId:users", 
    });

    return request.get(`${BASE_URL}?${params.toString()}`);
};



const commentsAPI = {
    create,
    getAll
}

export default commentsAPI