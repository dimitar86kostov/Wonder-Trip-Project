import * as request from './requester';

const BASE_URL = "http://localhost:3030/data/resorts";

const getAll = async () => {
    const response = await request.get(`${BASE_URL}/list`);

    const result = Object.values(response);


    return result

};

const getOne = async (tripId) => {
    const result = await request.get(`${BASE_URL}/details/${tripId}`)
    console.log(result);
};

const createAtList = (tripData) => request.post(`${BASE_URL}/list`, tripData);
const createAtDetails = (tripData) => request.post(`${BASE_URL}/details`, tripData);
const create = (tripData) => request.post(BASE_URL, tripData);

// const deleteGame = (tripId) => request.del(BASE_URL, tripId)

const tripsAPI = {
    getAll,
    getOne,
    createAtList,
    createAtDetails,
    create
};

export default tripsAPI;