import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { getAllProjects, createProject, deleteProject, updateProject, getAProject } from '../services/projects';
import { getAllPatterns, createPattern } from "../services/patterns"
import { getAllAdmins } from "../services/admins"
import Project from "./Project"
import ShowProjects from "./ShowProjects"
import CreateProject from "./CreateProject"
import UpdateProject from "./UpdateProject"
import CreatePattern from './CreatePattern';



export default class Main extends Component {

  state = {
    projects: [],
    patterns: [],
    admins: [],
    // project: {}
  }

  componentDidMount() {
    this.getProjects()
    this.getPatterns()
    this.getAdmins()
    this.getProjects()
  }


  // ============================
  // ========== admin =========
  // ============================

  getAdmins = async () => {
    const admins = await getAllAdmins()
    this.setState({ admins })
  }

  // ============================
  // ========= patterns =========
  // ============================


  getPatterns = async () => {
    const patterns = await getAllPatterns()
    this.setState({ patterns })
  }
  // ============================
  // ========= projects =========
  // ============================

  getAProject = async (id) => {
    const project = await getAProject(`/projects/${id}`)
    this.setState({ project })
  }

  getProjects = async () => {
    const projects = await getAllProjects()
    this.setState({ projects })
    console.log(projects)
  }


  postProjects = async (projectData, patternId) => {
    const newProjects = await createProject(projectData, patternId)
    this.setState(prevState => ({
      projects: [...prevState.projects, newProjects]
    }))
  }

  putProject = async (id, projectData) => {
    const updateProject = await updateProject(id, projectData);
    this.setState(prevState => ({
      projects: prevState.projects.map(project => project.id === id ? updateProject : project)
    }))
  }

  destroyProject = async (id) => {
    await deleteProject(id)
    this.setState(prevState => ({
      project: prevState.projects.filter(project => project.id !== id)
    }))
  }

  render() {
    return (
      <main>

        {/*  // ============================
             // =========== auth ===========
             // ============================ */}
        <Route path='/'></Route>
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

        {/*  // ============================
             // ======= ShowProject ========
             // ============================ */}
        <Route exact path='/projects'
          render={() =>
            (<ShowProjects
              admins={this.state.admins}
              projects={this.state.projects}
              destroyProject={this.props.destroyProject}
            />)
          }
        >
        </Route>

        {/*  // ============================
             // ====== ProjectDetails ======
             // ============================ */}

        <Route exact path='/Project/:project.id' component={Project} >
          <Project project={this.state.projects} />
        </Route>

        {/*  // ============================
             // ====== CreateProject =======
             // ============================ */}

        <Route exact path='/new/project' render={(props) => (
          <CreateProject
            {...props}
            postProject={this.postProjects}
            patterns={this.state.patterns}
          />
        )}>
        </Route>

        {/*  // ============================
             // ======= EditProject ========
             // ============================ */}

        <Route exact path='/project/:id/edit' render={(props) => {
          const projectId = props.match.params.id
          const project = this.state.projects.find(project => project.id === parseInt(projectId))
          return <UpdateProject
            {...props}
            project={project}
            patterns={this.state.patterns}
            putProject={this.putProject} />
        }}>
        </Route>

        {/*  // ============================
             // ====== CreatePattern =======
             // ============================ */}

        <Route exact path='/new/pattern' render={(props) => (
          <CreatePattern
            {...props}
            postPattern={this.postPattern}
          />
        )}>
        </Route>

      </main>
    )
  }
}

