import React from 'react'
import { Link } from 'react-router-dom'

export default function ShowProjects(props) {

  const { projects, currentAdmin, destroyProject, history } = props
  return (
    <>
      <h2>PROJECTS</h2>
      <Link to='/new/project'><button>Create a Project</button></Link>
      {/* <Link><button>Create a Pattern</button></Link> */}
      {
        projects.map(project => (
          <React.Fragment key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.title}</Link>
            {
              currentAdmin && currentAdmin.id === project.admin_id && (
                <>
                  <button onClick={() => history.push(`/project/${project.id}/edit`)}>EDIT</button>
                  <button onClick={() => destroyProject(project.id)}>DELETE</button>
                </>
              )
            }
            <br />
          </React.Fragment>

        ))
      }

    </>
  )
}
{/* our edit button just needs to route us to the edit component */ }
{/* we also need to interpolate the id in the route */ }