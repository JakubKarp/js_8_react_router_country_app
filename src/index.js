import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import { getCountries } from './actions/actions-countries';
import DevTools from './DevTools';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import './country.css';


render(
    <div>
        <Provider store={store}>
            <Router history={hashHistory} routes={routes} />
        </Provider>
        <DevTools store={store}/>
    </div> ,
document.getElementById('root')
);

store.dispatch(getCountries());