import React from 'react';
import './auth.scss';
import {Route} from "react-router-dom";

import Login from "../../modules/login/loginContainer";
import Register from "../../modules/register/registerContainer";


const Auth = () => {
    return (
        <section className = 'auth'>
            <div className='auth__content'>
                <Route exact path={['/', '/login']} component={Login}/>
                <Route exact path='/register' component={Register}/>
            </div>
        </section>
    );
};

export default Auth;