import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
import todo from "./modules/todo";
import user from "./modules/user";

export const history = createBrowserHistory();
// const rootReducer = combineReducers({ bucket, bucket222 });

const rootReducer = combineReducers({
  user,
  todo,
  router: connectRouter(history),
});
const middlewares = [thunk.withExtraArgument({ history })];
const env = process.env.NODE_ENV;
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = applyMiddleware(...middlewares);

const store = initialStore => createStore(rootReducer, enhancer);

export default store();
