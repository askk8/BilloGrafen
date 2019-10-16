import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './homepage';
import Filmer from './filmer';
import OmOss from './omoss';
import Medlem from './medlem';



const Main = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/filmer" component={Filmer} />
        <Route path="/omoss" component={OmOss} />
        <Route path="/medlem" component={Medlem} />
    </Switch>
)

export default Main;