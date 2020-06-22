import React from "react";
import {Redirect} from "react-router-dom";

function ProtactedRoute({component,...rest}){
    const Component = component;
    const loggedIn = sessionStorage.getItem('loggedIn');

    return loggedIn && loggedIn==="true"?<Component />:<Redirect to={{
        pathname : '/login',
        state : rest.path
        }} />
}
export default ProtactedRoute;