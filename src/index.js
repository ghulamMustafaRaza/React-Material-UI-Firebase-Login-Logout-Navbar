import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as firebase from "firebase";

var config = {
    // firebase config here
};
firebase.initializeApp(config);


ReactDOM.render(<App />, root);
registerServiceWorker(); 