import axios from 'axios';

const FETCH_COURSES_ENDPT = "http://localhost:8080/api/v1/courses";

const testData = [
  {
    id: "da05755d-9f75-4249-b6cb-0ecc9221067c",
    title: "Astronomy 101",
    summary: "An introduction to astronomy.",
    image: "http://localhost/static/a101.jpg",
    description: "Blah, blah, blah"
  },
  {
    id: "d2c0cedd-d520-4dec-a689-bc97ce56c141",
    title: "Vue JS",
    summary: "Introduction to Vue JS.",
    image: "http://localhost/static/vuejs.jpg",
    description: "Blah, blah, blah"
  }
];

const getCourses = async function() {
  const resp = await axios.get(FETCH_COURSES_ENDPT);
  return resp.data;
}

const sleep = function(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}

export const testFetch = () => {
  console.log("Test Fetch Called");
};

export default {
  async fetchCourses() {
    console.log("FETCHING COURSES");
    return await getCourses();
  },

  // For Development Only
  
}