async function requester(method, url, data) {

    const accessToken = localStorage.getItem('accessToken');

    const options = {};

    if (accessToken) {
        console.log(accessToken);
        options.headers = {
            ...options.headers,
            'X-Authorization': accessToken
        }
    }


    if (method != 'GET') {
        options.method = method;
    }

    if (data) {
        options.headers = {
            ...options.headers,
            'Content-type': 'application/json'
        }

        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    if (response.status === 204) {
        return;
    }

    const result = await response.json();
    if (!response.ok) {
        console.error(result);
        throw result;
    }

    return result;

}

export const get = requester.bind(null, 'GET')
export const post = requester.bind(null, 'POST')
export const put = requester.bind(null, 'PUT')
export const del = requester.bind(null, 'DELETE')