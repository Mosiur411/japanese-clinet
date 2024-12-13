
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import './index.css'
import { Provider } from "react-redux";
import { store } from "./apps/store";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <ToastContainer
        position="top-right"
        theme="colored"
        toastClassName={"p-[3px] min-h-[20px] bg-[#2ec946]"}
        icon={true}
      />
    </BrowserRouter>
  </Provider>

)

