import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../components/login';
import Home from '../components/home';
import WhatIDo from '../components/whatIDo';
import Skills from '../components/skills';
import About from '../components/about';
import Work from '../components/work';
import Contact from '../components/contact';
import Initial from '../components/initial';
import Error from '../components/error';
// import Transition from "../components/transition";

const routes = () => {
    return (
    <BrowserRouter>
        <Switch>
            {/* <Route exact path='/' component={Login} /> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/whatido" component={WhatIDo} />
            <Route exact path="/about" component={About} />
            {/* <Route exact path="/initial" component={Initial} /> */}
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/contact" component={Contact} />
            <Route render={ () => <Error/> } />
        </Switch>
    </BrowserRouter>
    );
};

export default routes;