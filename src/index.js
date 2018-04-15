import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import ApiFilters from './components/filterText';
import configureStore from './store/configStore';



const store = configureStore();

const jsx = (
  <Provider store={store}>
    <ApiFilters/>
  </Provider>
);

render(jsx, document.getElementById("root"));
