import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import Layout from './components/layout';

var mountNode = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>
  , mountNode);

  