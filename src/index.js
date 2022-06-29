import React from "react";
import ReactDOM from "react-dom/client";
import Courses from "./pages/courses/Courses";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Lessons from "./components/lessons/Lessons";
import Login from "./pages/login/Login";
import { AuthProvider } from "./context/AuthProvider";
import Layout from "./components/layout/Layout";
import AuthGuard from "./components/authGuard/AuthGuard";
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route element={<Layout />}>
            {/* public routes */}
            <Route path="/login" element={<Login />} />

            {/* protected routes */}
            <Route element={<AuthGuard />}>
              <Route path="/" element={<Courses />} />
            </Route>
            <Route element={<AuthGuard />}>
              <Route path="/courses" element={<Courses />} />
            </Route>
            <Route element={<AuthGuard />}>
              <Route path="/lessons/:courseID" element={<Lessons />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
