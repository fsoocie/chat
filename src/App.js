import React from 'react';
import {Redirect, Route} from "react-router-dom";

import 'styles/index.scss';
import 'App.css';
import Auth from "./pages/auth/auth";
import Home from "./pages/home/home";
import {connect} from "react-redux";

function App({isAuth}) {
  return (
    <div className="wrapper">
        <Route exact path={['/','/login', '/register']}
               render = {() => isAuth? <Redirect to='/im' /> : <Auth />} />
        <Route path='/im' render = {() => isAuth? <Home /> : <Redirect to='/login' />} />
    </div>
  );
}


const mstp = (state) => ({
    isAuth: state.user.isAuth
});

export default connect(mstp, {})(App);
