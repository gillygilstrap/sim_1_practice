import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter as Router} from 'react-router-dom';
import store from './store';
import {Provider} from 'react-redux';


ReactDOM.render(

<Provider store={store}>    
    <Router>
        <App />
    </Router> 
</Provider>    

, document.getElementById('root'));

serviceWorker.unregister();



