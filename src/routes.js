import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentational/NavigationComponent';
import Home from './presentational/HomeComponent';
import Contact from './presentational/ContactComponent';
import NotFound from './presentational/NotFoundComponent';
import CountryFlagContainer from './containers/FlagContainerComponent';
import CountryDetailsContainer from './containers/CountryDetailsContainerComponent';
import ContinentsContainer from './containers/ContinentsContainerComponent';



export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={Home} />
        <Route path='countries'>
            <IndexRoute component={CountryFlagContainer}/>
            <Route path='country/:id' component={CountryDetailsContainer}/>
        </Route>
        <Route path='continents' component={ContinentsContainer}/>   
        <Route path='contact' component={Contact} />
        <Route path='*' component={NotFound} />
    </Route>
);