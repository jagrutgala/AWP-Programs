/*
p11.1_login_out_state.js
Author: Jagrut Gala
Date: 20-09-2021
Practical: 11
Objective: Write a program in react js to Given a stateless functional component, add state to it.Display Message{ You are currently logged In/Out} use if else and state
*/

import React from 'react';
import ReactDOM from 'react-dom';

class LogInOut extends React.Component {
    constructor() {
        super();
        this.state= {
            login: false,
        };
    }

    logClick= ()=> {
        console.log("click");
        this.setState({login: !this.state.login})
    }

    render() {
        return (
            <div>
                <h1>You are {this.state.login? <span>Log Out</span>: <span>Log In</span>}</h1>
                <button onClick={this.logClick}>{this.state.login? <span>Log Out</span>: <span>Log In</span>}</button>
                <p>{this.state.login}</p>
            </div>
        )
    }
}

export default LogInOut;