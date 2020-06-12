import React from 'react'
import { Link } from 'react-router-dom'

export default function ShowPatterns(props) {

  const { patterns, currentAdmin, deletePattern, history } = props
  return (
    <>
      <hr />
      <h2>Pattern</h2>
      {
        patterns.map(pattern => (
          <React.Fragment key={pattern.id}>
            <Link to={`/patterns/${pattern.id}`}>{pattern.name}</Link>
            {
              currentAdmin && currentAdmin.id === pattern.admin_id && (
                <>
                  <button onClick={() => history.push(`/pattern/${pattern.id}/edit`)}>Edit</button>
                  <button onClick={() => deletePattern(pattern.id)}>Delete</button>
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
