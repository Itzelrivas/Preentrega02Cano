import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDFSeTx3hJ-03gUJWX_-oyZ5HU4fb_rdMM",
  authDomain: "pancho-ross.firebaseapp.com",
  projectId: "pancho-ross",
  storageBucket: "pancho-ross.appspot.com",
  messagingSenderId: "241212270503",
  appId: "1:241212270503:web:83048c427cb00dc78e7882"
};
initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
