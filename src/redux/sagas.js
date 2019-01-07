import { call, take, put, takeEvery, all } from 'redux-saga/effects';
import CourseApi from '../api/courses';
import ActionTypes from './actionTypes';

function* loadCourses() {
  const courses = yield call(CourseApi.fetchCourses);
  yield put({type: ActionTypes.COURSES_LOADED, courses});
}

function* addCourse(action) {
  yield call(CourseApi.addCourse, action.payload);
  yield put({type: ActionTypes.FETCH_COURSES});
}

function* deleteCourse(action) {
  yield call(CourseApi.deleteCourse, action.id);
  yield put({type: ActionTypes.FETCH_COURSES});
}

function* watchAddCourse() {
  yield takeEvery(ActionTypes.ADD_COURSE, addCourse);
}

function* watchDeleteCourse() {
  yield takeEvery(ActionTypes.DELETE_COURSE, deleteCourse);
}

function* watchFetchCourses() {
  yield takeEvery(ActionTypes.FETCH_COURSES, loadCourses);
}

export default function* rootSaga() {
  yield all([
    watchFetchCourses(),
    watchAddCourse(),
    watchDeleteCourse()
  ])
}
