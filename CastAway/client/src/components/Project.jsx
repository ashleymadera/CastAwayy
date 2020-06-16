import React from 'react'
import { withRouter } from "react-router-dom"


function Project(props) {
  const { project, destroyProject, currentAdmin, history } = props

  return (
    <div>
      <h2 className='project-form'>{props.project.title}</h2>
      <img className='image' src={props.project.image_url} alt="project image" />

      {
        currentAdmin && currentAdmin.id === project.admin_id && (
          <div className='admin-buttons'>
            <h4>Garment Type</h4>
            <p>{props.project.garment_type}</p>
            <button onClick={() => history.push(`/project/${project.id}/edit`)}>EDIT</button>
            <button onClick={() => destroyProject(project.id)}>DELETE</button>
          </div>
        )
      }
      <br />
      <div className='instructions'>
        <h4>Instructions</h4>
        <p >{props.project.instruction}</p>
      </div>

    </div>
  )
}


export default withRouter(Project)