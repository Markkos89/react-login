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
    // const requestOptions = {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'text/plain'
    //     },
    //     mode: 'no-cors',
    //     dataType: 'json',
    //     body: {
    //         username: username,
    //         password: password
    //     }
    // };
    console.log("username: " + username);
    console.log(typeof username)
    console.log("password: " + password)
    console.log(typeof password)
    const requestOptions = {
        method: 'POST',
        // mode: 'no-cors',
        body: JSON.stringify({
            'username': username,
            'password': password
        }),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            // 'Content-Type': 'application/json'
            "Content-Type": "application/json; charset=utf8"
        }
    }

    return fetch(`${config.apiUrl}/api/users/authenticate`, requestOptions)
        // .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            // currentUserSubject.next(user);

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}