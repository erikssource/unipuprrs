import ActionTypes from './actionTypes';

export function addCourse(payload) { 
  return {
    type: ActionTypes.ADD_COURSE,
    payload: {
      id: null,
      title: payload.title,
      summary: payload.summary,
      image: payload.image,
      description: payload.description
    }
  };
};

export function deleteCourse(id) {
  return {
    type: ActionTypes.DELETE_COURSE,
    id: id
  };
};

export function fetchCourses() {
  return {
    type: ActionTypes.FETCH_COURSES
  };
};