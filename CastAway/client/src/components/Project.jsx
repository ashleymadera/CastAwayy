import React from 'react'
import { withRouter } from "react-router-dom"


function Project(props) {
  const { project, destroyProject, currentAdmin, history } = props

  return (
    <div>
      <h2>{props.project.title}</h2>
      {
        currentAdmin && currentAdmin.id === project.admin_id && (
          <>
            <button onClick={() => history.push(`/project/${project.id}/edit`)}>EDIT</button>
            <button onClick={() => destroyProject(project.id)}>DELETE</button>
          </>
        )
      }

    </div>
  )
}


export default withRouter(Project)