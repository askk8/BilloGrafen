import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './homepage';
import Filmer from './filmer';
import OmOss from './omoss';
import Medlem from './medlem';
import Boka from './boka';
import Login from "./Login";
import Users from "./Users";


const Main = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/filmer" component={Filmer} />
        <Route path="/omoss" component={OmOss} />
        <Route path="/medlem" component={Medlem} />
        <Route path="/boka" component={Boka}/>
        <Route path="/Login" component={Login} />
        <Route path="/Users" component={Users} />
    </Switch>
)

export default Main;