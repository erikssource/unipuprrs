# unipuprrs
Example educational website frontend using rrs (react, redux, saga). Demo only.

So if you have stumbled accross this repo for some reason and are curious about what is going on here. I'm working on an NPM module to simplify using react, redux, and saga together.

As it stands the main feature is that the need to write saga functions is eliminated. In the below example, I've defined three async actions by assigning an async function (2nd parameter) to an action (1st parameter) and then specifying an action to get invoked using the output (if any) from the async function.

```javascript
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
```
For example, the FETCH_COURSES action will invoke the function CourseApi.fetchCourses which will result in an array of data that acts as the payload for the regular (synchronous) action COURSES_LOADED which is handled by a reducer just like normal.

Anyhow, I've just started and I'm hoping to eliminate more boilerplate code than just the saga functions.
