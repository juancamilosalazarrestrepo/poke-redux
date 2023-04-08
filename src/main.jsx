import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import { logger } from "./middlewares";
import rootReducer from "./reducers/rootReducer";
import "./index.css";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));

const store = createStore(rootReducer, composedEnhancers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
