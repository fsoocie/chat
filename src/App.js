import React from 'react';
import {Route} from "react-router-dom";

import 'styles/index.scss';
import 'App.css';
import Auth from "./pages/auth/auth";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="wrapper">
        <Route exact path={['/','/login', '/register']} component={Auth} />
        <Route path='/im' component={Home} />
    </div>
  );
}

export default App;
