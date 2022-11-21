import axios from 'axios';

const domainUrl = 'http://localhost:8080/workers';

let convert = require('xml-js');

export const getListOfWorkers = async (limit, pages) => {
    const getWorkersList = `${domainUrl}?limit=${limit}&page=${pages}`;
    const res = await axios.get(getWorkersList, {})
    return convert.xml2json(res.data, {compact: true, spaces: 4})
}


export const createWorker = (userData) => {
    let url = `${domainUrl}`
    return axios.put(domainUrl, userData, {})
        .then((res) => res.data)
        .catch((err) => console.log('error:', err))
};
// export const updateWorker= (userData) => {
//     return axios.patch(profileUrls.api, userData, {
//         headers: {
//             'content-type': `application/xml`
//         }
//     })
//         .then((res) => res.data)
//         .catch((err) => console.log('error:', err))
// };
//
//
//
// export const deleteWorker= () => {
//     return axios.delete(profileUrls.api,  {
//         headers: {
//             'content-type': `application/xml`
//         }
//     })
//         .then((res) => res.data)
//         .catch((err) => console.log('error:', err))
// };
//
// export const deleteWorkerByStatus= (status) => {
//     return axios.delete(profileUrls.api, status, {
//         headers: {
//             'content-type': `application/xml`
//         }
//     })
//         .then((res) => res.data)
//         .catch((err) => console.log('error:', err))
// };
//
// export const indexing= (coefficient) => {
//     return axios.post(profileUrls.api, coefficient, {
//         headers: {
//             'content-type': `application/xml`
//         }
//     })
//         .then((res) => res.data)
//         .catch((err) => console.log('error:', err))
// };
//
// export const firing= (id) => {
//     return axios.post(profileUrls.api, id, {
//         headers: {
//             'content-type': `application/xml`
//         }
//     })
//         .then((res) => res.data)
//         .catch((err) => console.log('error:', err))
// };

