import ActionTypes from './actionTypes';

export function addCourse(payload) { 
  return {
    type: ActionTypes.ADD_COURSE,
    payload: {
      id: null,
      title: payload.title,
      summary: payload.summary,
      description: payload.description
    }
  };
};

export function fetchCourses() {
  return {
    type: 'FETCH'
  };
};