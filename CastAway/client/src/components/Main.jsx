import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { getAllProjects } from '../services/projects';
import ShowProjects from "./ShowProjects"



export default class Main extends Component {

  state = {
    projects: [],
    patterns: []
  }

  componentDidMount() {
    this.getProjects()
  }

  // ============================
  // ========== Flavors =========
  // ============================

  getProjects = async () => {
    const projects = await getAllProjects()
    this.setState({ projects })
  }

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
        <Route path='/projects'
          render={() => (
            (<ShowProjects
              projects={this.state.projects}
            />)
          )}
        >
        </Route>

      </main>
    )
  }
}

