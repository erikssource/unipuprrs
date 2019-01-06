import { call, take, put, takeEvery, all } from 'redux-saga/effects';
import CourseApi from '../api/courses';
import ActionTypes from './actionTypes';

function* helloSaga() {
  console.log('Hello Saga!');
}

function* loadCourses() {
  console.log("Load Courses Called");
  const courses = yield call(CourseApi.fetchCourses);
  yield put({type: ActionTypes.COURSES_LOADED, courses})
}

export function* watchFetchCourses() {
  while (true) {
    yield take('FETCH');
    console.log("Action Caught");
    yield call(loadCourses);
  }
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchFetchCourses()
  ])
}
