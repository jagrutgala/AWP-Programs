import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Netfilx from "./p9.1_netflix";
import Greet from "./p9.2_greet";
import Institue from "./p9.3_institute";
import ProductMenu from "./p10.1_product";
import LogInOut from "./p11.1_login_out_state";
import EvenOdd from './p11.2_even_odd';
import Cube from './p12.1_number_cube';

ReactDOM.render(<Cube />,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
