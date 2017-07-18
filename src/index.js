import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyD-nmvs60GTV51xt3aEiOXpqL8SxONhw_8",
    authDomain: "parking-booking-system-16683.firebaseapp.com",
    databaseURL: "https://parking-booking-system-16683.firebaseio.com",
    projectId: "parking-booking-system-16683",
    storageBucket: "",
    messagingSenderId: "1045815455185"
};
firebase.initializeApp(config);


ReactDOM.render(<App />, root);
registerServiceWorker(); 