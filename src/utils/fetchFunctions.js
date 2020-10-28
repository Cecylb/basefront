const axios = require('axios');

export function fetchSearchResult(data) {
    return axios.get(`/api/client/${data.table}/search/${data.field}/${data.query}`).then(function (response) { return response.data })
}

export function fetchTableFields(table) {
    return axios.get(`/api/client/${table}/add`).then(function (response) { return response.data })
}

export function addNewEntity(data) {
    const student = Object.fromEntries(data.entity);
    return axios({
        method: 'POST',
        url: `api/client/${data.table}/add`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(student)
    })
}

export function deleteEntity(data) {
    return axios.delete(`api/client/${data.table}/delete/${data.id}`);
}