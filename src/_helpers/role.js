import config from 'config';
import { authHeader, handleResponse } from '@/_helpers';

export const Role = {
    Admin: 'Admin',
    User: 'User',
    getAll
}

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/api/roles`, requestOptions).then(handleResponse);
}