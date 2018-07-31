import React from "react";

import devtoolsEnhancer from "remote-redux-devtools";

/* ROUTER É UM COMPONENTE ONDE FICARAO AS REFERENCIAS DE TODAS AS PAGINAS DA APLICAÇÃO */
import Router from "./Router";

import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./reducers";

/* PASSAREMOS UMA REDUCER PARA A createStore(REDUCER) */
const store = createStore(rootReducer, devtoolsEnhancer());

/* TODO COMPONENTE QUE PRECISA TER ACESSO A ALGO DO REDUX, PRECISA ESTAR DENTRO DO PROVIDER - QUE PROVISIONARÁ A STORE */
const SeriesApp = prop => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default SeriesApp;