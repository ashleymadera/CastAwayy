import React from 'react'
import { withRouter } from "react-router-dom"


function Project(props) {
  const { project } = props


  // console.log(id)

  return (
    <div>
      <h2>{project.title}</h2>
      {/* {
        project.map((pro) => (
          pro.id === props.match.params.id ?
            <h2>{pro.title}</h2>
            :
            'Nothing found'
        ))} */}

    </div>
  )
}


export default withRouter(Project)