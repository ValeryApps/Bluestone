import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ModalManager } from "./common/modals/ModalManager";
import { configureStore } from "./store/configureStore";
import { ToastContainer } from "react-toastify";

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <ScrollToTop/> */}
      <ModalManager />
      <ToastContainer position="right" />
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
