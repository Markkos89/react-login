import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { authenticationService } from '@/_services';

export const PrivateRoute = ({ component: Component, roles, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = authenticationService.currentUserValue;
        
        if (!currentUser) // old times: if (currentUser.length == 0) {   
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} /> // not logged in so redirect to login page with the return url
        
        if (roles && roles.indexOf(currentUser.role) === -1) {// check if route is restricted by role            
            return <Redirect to={{ pathname: '/'}} />// role not authorised so redirect to home page
        }

        return <Component {...props} />// authorised so return component
    }} />
)