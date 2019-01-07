import ActionTypes from "../actionTypes";

const initialState = {
  courses: []
};

export default function(state = initialState, action ) {
  switch( action.type ) {
    case ActionTypes.COURSES_LOADED:
      return {...state, courses: action.courses };
    default:
      return state;
  }
}
