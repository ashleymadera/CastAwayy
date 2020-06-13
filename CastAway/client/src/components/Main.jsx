import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { getAllProjects, createProject, deleteProject } from '../services/projects';
import { getAllPatterns } from "../services/patterns"
import ShowProjects from "./ShowProjects"
import CreateProject from "./CreateProject"



export default class Main extends Component {

  state = {
    projects: [],
    patterns: []
  }

  componentDidMount() {
    this.getProjects()
    this.getPatterns()
  }



  getPatterns = async () => {
    const patterns = await getAllPatterns()
    this.setState({ patterns })
  }
  // ============================
  // ========== projects=========
  // ============================

  getProjects = async () => {
    const projects = await getAllProjects()
    this.setState({ projects })
    console.log(projects)
  }

  postProjects = async (projectData) => {
    const newProjects = await createProject(projectData)
    this.setState(prevState => ({
      projects: [...prevState.projects, newProjects]
    }))
  }

  // putProject = async (id, projectData) => {
  //   const updatedProject = await updateProject(id, projectData);
  //   this.setState(prevState => ({
  //     projects: prevState.projects.map(project => project.id === id ? updatedProject : project)
  //   }))
  // }

  destroyProject = async (id) => {
    await deleteProject(id)
    this.setState(prevState => ({
      project: prevState.projects.filter(project => project.id !== id)
    }))
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
          render={() =>
            (<ShowProjects
              projects={this.state.projects}
              destroyProject={this.props.destroyProject}
            />)
          }
        >
        </Route>
        <Route path='/new/project' render={(props) => (
          <CreateProject
            {...props}
            postProject={this.postProjects}
          />
        )}>
        </Route>

      </main>
    )
  }
}

