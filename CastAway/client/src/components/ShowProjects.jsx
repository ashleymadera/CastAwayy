import React from 'react'
import { Link } from 'react-router-dom'

export default function ShowProjects(props) {

  const { projects, currentAdmin, deleteProject, history } = props
  return (
    <>
      <h2>Projects</h2>
      <Link to='/new/project'><button>Create a Project</button></Link>
      <Link><button>Create a Pattern</button></Link>
      {
        projects.map(project => (
          <React.Fragment key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.image_url}</Link>
            {
              currentAdmin && currentAdmin.id === project.admin_id && (
                <>
                  <button onClick={() => history.push(`/project/${project.id}/edit`)}>edit</button>
                  <button onClick={() => deleteProject(project.id)}>delete</button>
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