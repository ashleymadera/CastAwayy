import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';


export default class Main extends Component {
  render() {
    return (
      <main>
        hello
        <Route path='/admin/login' render={(props) => (
          <Login
            {...props}
            handleLoginSubmit={this.props.handleLoginSubmit}
          />
        )} />
        <Route path='/admin/register' render={(props) => (
          <Register
            {...props}
            handleRegisterSubmit={this.props.handleRegisterSubmit}
          />
        )} />
      </main>
    )
  }
}

