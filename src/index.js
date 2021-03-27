import "./assets/sass/style.react.scss";

import { persistor, store } from "./redux/store";

import App from "./App";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals  from "./reportWebVitals";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Router>{" "}
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
