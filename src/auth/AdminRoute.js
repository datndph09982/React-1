import React from 'react'
import { Route, Redirect } from 'react-router'
import { isAuthenticate } from '.'

const AdminRoute = ({children}) => {
    return (
        <Route render={()=>{
            return isAuthenticate() && isAuthenticate().user.role == 1 ? children : <Redirect to={{pathname: '/signin' }} />
        }} />
            
    )
}

export default AdminRoute
