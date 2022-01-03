import React from 'react'
import {Redirect} from 'react-router-dom'

const ProtectedRoute = ({component: Component, ...rest}) => {
    <Route
    {...rest}
    render={props => localStorage.getItem("token") ? (
        <Component {...props} />
    ) : (
        <Redirect to={{pathname: "/", state: {from: props.location}}} />
    )}
}

export default ProtectedRoute
