import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from '../App';
import Store from '../store';
import { BrowserRouter,Route } from 'react-router-dom'
import routes from './routes'





ReactDOM.render(<Provider store={Store} ><BrowserRouter route={routes}><Route history= { history}><App/></Route></BrowserRouter></Provider>,document.getElementById('app'));