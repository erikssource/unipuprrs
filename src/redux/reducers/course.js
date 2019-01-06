import ActionTypes from "../actionTypes";

const initialState = {
  courses: []
};

export default function(state = initialState, action ) {
  console.log("Action Called: ", action.type);
  switch( action.type ) {
    case ActionTypes.ADD_COURSE:
      return state;
    case ActionTypes.COURSES_LOADED:
      return {...state, courses: action.courses };
    default:
      return state;
  }
}
