import axios from 'axios';

const FETCH_COURSES_ENDPT = "http://localhost:9555/api/v1/courses";
const DELETE_COURSE_ENDPT = "http://localhost:9555/api/v1/courses/";
const ADD_COURSE_ENDPT = "http://localhost:9555/api/v1/courses";

const getCoursesCall = async function() {
  const resp = await axios.get(FETCH_COURSES_ENDPT);
  return resp.data;
}

const deleteCourseCall = async function(id) {
  console.log("Delete Course: ", id);
  const resp = await axios.delete(DELETE_COURSE_ENDPT + id);
  return resp.status;
}

const addCourseCall = async function(course) {
  console.log("Add Course: ", course);
  const resp = await axios.post(ADD_COURSE_ENDPT, course);
  return resp.status;
}

export default {
  async fetchCourses(data = null) {
    return await getCoursesCall();
  },

  async deleteCourse(data) {
    await deleteCourseCall(data.id);
  },

  async addCourse(data) {
    await addCourseCall(data.course);
  }
}