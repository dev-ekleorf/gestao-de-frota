import React, {useContext} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {AuthContext} from './AuthContext';

export const RotaPrivada = (props) => {
    const {component: RouteComponent,...other} = props;
    const {usuario} = useContext(AuthContext);

    return(
        <Route
            {...other}
            render={(routeProps)=>
                !!usuario ? (
                    <RouteComponent {...routeProps}/>
                ): (
                    <Redirect to="/tela_login" />
                )
            }
        />
    );
};