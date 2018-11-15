import "regenerator-runtime/runtime";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers/index";
import rootSagas from "../sagas/rootSagas";

function configureStore(preloadState = {}) {
  let composeEnhancers = compose;
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  if (process.env.NODE_ENV === "development" && typeof window !== "undefined") {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancers;
  }


  const store = createStore(
    rootReducer,
    preloadState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSagas);

  return {
    ...store,
    runSaga: sagaMiddleware.run
  };
}

export default configureStore();