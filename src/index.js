import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './Demo';
import Test from './Test';
import Welcome from './Welcome';
import reportWebVitals from './reportWebVitals';
import Posts from './Posts';
import Demo2 from './Demo2';
import App1 from './App1';
import {StyleRoot} from 'radium';
import Contact from './Contact';
import NameForm from './NameForm';
import Appmain from './Appmain';
import {BrowserRouter as Router} from "react-router-dom";
import Country from './Country';
import Testing from './Testing';
import Mapex from './Mapex';
import Myhook from './Myhook';
import Counter from './Counter';
import Hookdate from './Hookdate';

ReactDOM.render(
  <React.StrictMode>
     <Myhook></Myhook>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
