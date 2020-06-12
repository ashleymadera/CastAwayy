import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { loginAdmin, registerAdmin, removeToken, verifyAdmin } from './services/auth'

export default class App extends Component {
  state = {
    currentAdmin: null
  }

  componentDidMount() {
    this.handleVerify()
  }

  handleLoginSubmit = async (loginData) => {
    const currentAdmin = await loginAdmin(loginData);
    this.setState({ currentAdmin });
  }

  handleRegisterSubmit = async (registerData) => {
    const currentAdmin = await registerAdmin(registerData);
    this.setState({ currentAdmin });
  }

  handleLogout = () => {
    this.setState({
      currentAdmin: null
    })
    localStorage.clear();
    removeToken();
  }

  handleVerify = async () => {
    const currentAdmin = await verifyAdmin();
    this.setState({ currentAdmin })
  }

  render() {
    return (
      <div>

        <Header
          currentAdmin={this.state.currentAdmin}
          handleLogout={this.handleLogout}
        />
        <Main
          handleLoginSubmit={this.handleLoginSubmit}
          handleRegisterSubmit={this.handleRegisterSubmit}
          currentAdmin={this.state.currentAdmin}
        />
      </div>
    )
  }
}

