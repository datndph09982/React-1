import React from 'react'
import { Route, Redirect } from 'react-router'
import { isAuthenticate } from '.'

const PrivateRoute = ({children}) => {
    return (
        <Route render={()=>{
            return isAuthenticate() ? children : <Redirect to={{pathname: '/signin' }} />
        }} />
            
    )
}

export default PrivateRoute
