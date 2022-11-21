import axios from 'axios';
import * as profileUrls from '../urls';

export const getWorker= () => {
    return axios.get(profileUrls.api, {
        headers: {
            'content-type': `application/xml`
        }
    })
        .then((res) => res.data)
        .catch((err) => console.log('error:', err))
};

export const getListOfWorkers = () => {
    return axios.get(profileUrls.api, {
        headers: {
            'content-type': 'application/xml'
        },
    })
        .then((res) => res)
        .catch((err) => console.log('error:', err))
}

export const createWorker= (userData) => {
    return axios.put(profileUrls.api, userData, {
        headers: {
            'content-type': `application/xml`
        }
    })
        .then((res) => res.data)
        .catch((err) => console.log('error:', err))
};

export const updateWorker= (userData) => {
    return axios.patch(profileUrls.api, userData, {
        headers: {
            'content-type': `application/xml`
        }
    })
        .then((res) => res.data)
        .catch((err) => console.log('error:', err))
};



export const deleteWorker= () => {
    return axios.delete(profileUrls.api,  {
        headers: {
            'content-type': `application/xml`
        }
    })
        .then((res) => res.data)
        .catch((err) => console.log('error:', err))
};

export const deleteWorkerByStatus= (status) => {
    return axios.delete(profileUrls.api, status, {
        headers: {
            'content-type': `application/xml`
        }
    })
        .then((res) => res.data)
        .catch((err) => console.log('error:', err))
};

export const indexing= (coefficient) => {
    return axios.post(profileUrls.api, coefficient, {
        headers: {
            'content-type': `application/xml`
        }
    })
        .then((res) => res.data)
        .catch((err) => console.log('error:', err))
};

export const firing= (id) => {
    return axios.post(profileUrls.api, id, {
        headers: {
            'content-type': `application/xml`
        }
    })
        .then((res) => res.data)
        .catch((err) => console.log('error:', err))
};

