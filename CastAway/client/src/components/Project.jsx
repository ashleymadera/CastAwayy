import React from 'react'
import { withRouter } from "react-router-dom"


function Project(props) {
  const project = props.project

  // console.log(id)

  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  )
}


export default withRouter(Project)