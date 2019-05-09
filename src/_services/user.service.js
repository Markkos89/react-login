import config from 'config';
import { authHeader, handleResponse } from '@/_helpers';

export const userService = {
    getAll,
    getById,
    getRoles,
    postUser
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/api/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/api/users/${id}`, requestOptions).then(handleResponse);
}

function getRoles(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/api/roles`, requestOptions).then(handleResponse);
}

function postUser(values) {
    const requestOptions = { 
        method: 'POST', 
        headers: Object.assign(authHeader(), { 'Content-Type': 'application/json' }), // creamos un nuevo objeto, copia de authHeader y le agregamos el content-type necesario
        body: JSON.stringify(values) 
    };
    return fetch(`${config.apiUrl}/api/users`, requestOptions).then(handleResponse);
}