import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user, isLogin} = useAuth();
    
    if (isLogin) {
        return <div className="text-center sppiner-sec "><Spinner className=" mt-3" animation="border" variant="dark" /></div>
    }

    return (
        <Route
        {...rest}
        render={({ location })  => user?.email? children
        :<Redirect
            to={{pathname: '/login',
                state:{ from: location }
            }}></Redirect>}
        >
        </Route>
    );
};

export default PrivateRoute;