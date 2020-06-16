import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { getAllProjects, createProject, deleteProject, updateProject, getAProject } from '../services/projects';
import { getAllPatterns, createPattern, updatePattern, deletePattern } from "../services/patterns"
import { getAllAdmins } from "../services/admins"
import Project from "./Project"
import ShowProjects from "./ShowProjects"
import CreateProject from "./CreateProject"
import UpdateProject from "./UpdateProject"
import CreatePattern from './CreatePattern';
import UpdatePattern from './UpdatePattern';
import ShowPatterns from './ShowPatterns'



class Main extends Component {

  state = {
    projects: [],
    patterns: [],
    admins: [],
    project: {}
  }

  componentDidMount() {
    this.getProjects()
    this.getPatterns()
    this.getAdmins()
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

  postPatterns = async (patternData) => {
    const newPatterns = await createPattern(patternData)
    this.setState(prevState => ({
      patterns: [...prevState.patterns, newPatterns]
    }))
  }
  putPattern = async (id, patternData) => {
    const updatedPattern = await updatePattern(id, patternData);
    this.setState(prevState => ({
      patterns: prevState.patterns.map(pattern => pattern.id === id ? updatedPattern : pattern)
    }))
  }

  destroyPattern = async (id) => {
    await deletePattern(id)
    this.setState(prevState => ({
      pattern: prevState.patterns.filter(pattern => pattern.id !== id)
    }))
  }

  // ============================
  // ========= projects =========
  // ============================

  getAProject = async (id) => {
    const project = await getAProject(id)
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
    const editProject = await updateProject(id, projectData);
    this.setState(prevState => ({
      projects: prevState.projects.map(project => project.id === id ? editProject : project)
    }))
  }

  destroyProject = async (id) => {
    await deleteProject(id)
    this.setState(prevState => ({
      projects: prevState.projects.filter(project => project.id !== id)
    }), () => this.props.history.push('/projects'))

  }

  render() {
    return (
      <main>

        {/*  // ============================
             // =========== auth ===========
             // ============================ */}
        <Route exact path='/'>
          (<ShowProjects
            currentAdmin={this.props.currentAdmin}
            admins={this.state.admins}
            projects={this.state.projects}
            destroyProject={this.props.destroyProject}
          />)
        </Route>
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
              currentAdmin={this.props.currentAdmin}
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

        <Route path='/projects/:id' render={(props) => (
          <Project
            {...props}
            project={this.state.projects.find((p) => (
              parseInt(props.match.params.id) === p.id
            )) || {}}
            currentAdmin={this.props.currentAdmin}
            destroyProject={this.destroyProject}
          />
        )} >

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
            postPattern={this.postPatterns}
          // patterns={this.state.patterns}
          />
        )}>
        </Route>

        {/*  // ============================
             // ==== Edit/Update Pattern ===
             // ============================ */}

        <Route exact path='/pattern/:id/edit' render={(props) => {
          const patternId = props.match.params.id
          const pattern = this.state.patterns.find(pattern => pattern.id === parseInt(patternId))
          return <UpdatePattern
            {...props}
            pattern={pattern}
            patterns={this.state.patterns}
            putPattern={this.putPattern} />
        }}>
        </Route>

      </main>
    )
  }
}

export default withRouter(Main)