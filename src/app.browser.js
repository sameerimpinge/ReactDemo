/**
 * React Starter Kit for Firebase and GraphQL
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */
// apiKey: 'AIzaSyAsuqpqt29-TIwBAu01Nbt5QnC3FIKO4A4',
// authDomain: 'react-firebase-graphql.firebaseapp.com',
// databaseURL: 'https://fir-a953d.firebaseio.com/',
// projectId: 'react-firebase-graphql',
// storageBucket: 'react-firebase-graphql.appspot.com',
// messagingSenderId: '564620986275',
/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import firebase from '@firebase/app';
import Database from '@firebase/database';
import firestore from '@firebase/firestore';

import createHistory from 'history/createBrowserHistory';

import App from './components/App';
import auth from './auth';
import routes from './routes';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp({
  apiKey: "AIzaTuU",
  authDomain: "beam-8750c.firebaseapp.com",
  databaseURL: "https://beam-8750c.firebaseio.com",
  projectId: "beam-8750c",
  storageBucket: "beam-8750c.appspot.com",
  messagingSenderId: "185202319547"
});

var app = firebase.app();
var db = firebase.firestore(app);
console.log("app", app)
var database = firebase.database(app);

var data = firebase.database().ref("order_location/");
// data.on('value', snapshot => {
//   // this.setState({usercount: snapshot.val()});
//   console.log("firebase val " + JSON.stringify(snapshot.val()));
// });


// console.log("data list", data);



const history = createHistory();
const render = props =>
  new Promise((resolve, reject) => {
    try {
      ReactDOM.render( <
        App { ...props
        }
        history = {
          history
        }
        />,
        document.getElementById('root'),
        resolve(props),
      );
    } catch (err) {
      reject(err);
    }
  });

const resolve = promise =>
  promise.then(({
      user,
      location
    }) =>
    routes.resolve({
      pathname: location.pathname,
      location,
      user,
      render,
    }),
  );

let promise;

auth.onAuthStateChanged(user => {
  if (!promise) {
    promise = Promise.resolve({
      user,
      location: history.location
    });
    history.listen(location => {
      promise = resolve(promise.then(x => ({ ...x,
        location
      })));
    });
  }
  promise = resolve(promise.then(x => ({ ...x,
    user
  })));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
