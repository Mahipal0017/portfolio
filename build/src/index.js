import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import Routes from './routes/routes';
import './index.scss';
// import * as firebase from 'firebase';

// var config = {
//     apiKey: "AIzaSyArdj452mX1ZMBsl9FsaSqr9_HAY05SWds",
//     authDomain: "findthemahi.firebaseapp.com",
//     databaseURL: "https://findthemahi.firebaseio.com",
//     projectId: "findthemahi",
//     storageBucket: "findthemahi.appspot.com",
//     messagingSenderId: "1058606501232"
//   };

// firebase.initializeApp(config);

const app = (
    <Provider store={store}>
        <Routes />
    </Provider>
)

ReactDOM.render(
    app , 
    document.getElementById('root'));

