import React from 'react'
import { render } from 'react-dom'
import App from './Components/App'
import { Provider } from "react-redux";
import configureStore from "./redux/store";

const store = configureStore().store;

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
