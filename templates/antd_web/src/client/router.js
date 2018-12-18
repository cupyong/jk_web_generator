import React from 'react'
import { Route, IndexRedirect,Redirect } from 'react-router'
import Main from '../views/Main/index'
import Login from '../views/Login/index'

export default function routes(store) {
    const validate = function (next, replace, callback) {
        callback()
    }
    return (
        <Route path="/" onEnter={validate}>
            <IndexRedirect to="Login"/>
            <Route component={Main}>
                {/* <Route path="/test" component={test} /> */}
            </Route>
            <Route path="/Login" component={Login} />
            {/* <Route path="/NotFound" component={NotFound} /> */}
            <Redirect from='*' to='/Login' />
        </Route>
    );
}
