import React from 'react';
import {render} from 'react-dom';
import App from './components/App/App.jsx';
import base from './components/shared/base.scss'
import grid from './components/shared/grid.scss'



render( <App />, document.getElementById('mounting-point') );
