import * as request from './requester';

const BASE_URL = "http://localhost:3030/data/resorts";

const getAll = async () => {
    const response = await request.get(`${BASE_URL}`);

    const result = Object.values(response);

    return result;
};

const getOne = (tripId) => request.get(`${BASE_URL}/${tripId}`);

const create = (tripData) => request.post(BASE_URL, tripData);

// const deleteGame = (tripId) => request.del(BASE_URL, tripId)

const tripsAPI = {
    getAll,
    getOne,
    create
};

export default tripsAPI;