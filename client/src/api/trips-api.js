import * as request from './requester';

const BASE_URL = "http://localhost:3030/data/resorts";

const getAll = async () => {
    const response = await request.get(`${BASE_URL}`);

    const result = Object.values(response);

    return result;
};

const getOne = (tripId) => request.get(`${BASE_URL}/${tripId}`);

const create = (tripData) => request.post(BASE_URL, tripData);

const update = (tripId, tripData) => request.put(`${BASE_URL}/${tripId}`, tripData);

const remove = (tripId) => request.del(`${BASE_URL}/${tripId}`);

const tripsAPI = {
    getAll,
    getOne,
    create,
    update,
    remove
};

export default tripsAPI;