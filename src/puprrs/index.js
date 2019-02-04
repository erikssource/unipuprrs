import { call, put, takeEvery, all} from "redux-saga/effects";
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

export class StoreManager {

  constructor(enableDevTools = false) {
    this.enableDevTools = enableDevTools;
    this.asyncFunctions = {};
    this.sagas = {};
    this.watches = [];
  }

  addAsyncFunc(name, func, targetAction = null) {
    this.asyncFunctions[name] = {
      func: func,
      target: targetAction
    };
  }

  createStore(rootReducer) {
    // Create Sagas
    Object.keys(this.asyncFunctions).forEach( key => {
      this.sagas[key] = function* (payload) {
        const data = yield call(this.asyncFunctions[key].func, payload);
        if (typeof this.asyncFunctions[key].target === "string" && this.asyncFunctions[key].target.length > 0) {
          yield put({type: this.asyncFunctions[key].target, data});
        }
      }.bind(this);
    });

    Object.keys(this.sagas).forEach((key) => {
      this.watches.push(
        function* () {
          yield takeEvery(key, this.sagas[key])
        }.bind(this)
      );
    });

    const watchSaga = function* () {
      let genFuncs = [];
      this.watches.forEach((func) => {
        genFuncs.push(func());
      });
      yield all(genFuncs);
    }.bind(this);

    //TODO: Implment enable Dev Tools

    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(watchSaga);
    return store;
  }
}
