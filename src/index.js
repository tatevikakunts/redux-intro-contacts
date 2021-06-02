import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import store from "./store/store";
import {Provider} from "react-redux";
import App from "./components/App";


ReactDOM.render(
<Provider store={store}>
        <App/>
</Provider>,
  document.getElementById('root')
);


