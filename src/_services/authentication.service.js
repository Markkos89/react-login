import { BehaviorSubject } from 'rxjs';

import config from 'config';
import { handleResponse } from '@/_helpers';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() { return currentUserSubject.value }
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
            'username': username,
            'password': password
        }),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            "Content-Type": "application/json; charset=utf8"
        }
    }

    return fetch(`${config.apiUrl}/api/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            console.log("authentication service user obj")
            console.log(user)
            console.log(!user)
            if (user.length > 0) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                currentUserSubject.next(user);
            } else {
                localStorage.removeItem('currentUser');
                currentUserSubject.next(null);
            }

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}