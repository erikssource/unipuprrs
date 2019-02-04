import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import rootReducer from './redux/reducers/course';
import ActionTypes from './redux/actionTypes';
import { StoreManager } from './puprrs';
import CourseApi from './api/courses';

import Layout from './components/layout';

const storeManager = new StoreManager(true);
storeManager.addAsyncFunc(ActionTypes.ADD_COURSE, CourseApi.addCourse, ActionTypes.FETCH_COURSES);
storeManager.addAsyncFunc(ActionTypes.DELETE_COURSE, CourseApi.deleteCourse, ActionTypes.FETCH_COURSES);
storeManager.addAsyncFunc(ActionTypes.FETCH_COURSES, CourseApi.fetchCourses, ActionTypes.COURSES_LOADED);

var mountNode = document.getElementById("app");
ReactDOM.render(
  <Provider store={storeManager.createStore(rootReducer)}>
    <Layout />
  </Provider>
  , mountNode);

  