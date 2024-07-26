import * as request from './requester';

const BASE_URL = "http://localhost:3030/jsonstore/ski-resorts";

const getAll = async () => {
    const response = await request.get(`${BASE_URL}/list`);

    const result = Object.values(response);


    return result

};

const getOne = async (tripId) => {
    const result = await request.get(`${BASE_URL}/details/${tripId}`)
    console.log(result);
};

const create = (createdTrip) => request.post(BASE_URL, createdTrip);

// const deleteGame = (tripId) => request.del(BASE_URL, tripId)

const tripsAPI = {
    getAll,
    getOne,
    createGame,
};

export default tripsAPI;