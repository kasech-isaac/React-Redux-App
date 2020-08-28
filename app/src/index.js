import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import {animalsReducer} from "./reducers/animalReducer"





 const cuteAnimal = ({ getState }) => next => action => {
  console.log("Dispatching this type of action:", action);
  next(action);
};


let store = createStore(animalsReducer, applyMiddleware(cuteAnimal, thunk));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);