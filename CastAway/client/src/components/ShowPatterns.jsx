import React from 'react'
import { Link } from 'react-router-dom'

export default function ShowPatterns(props) {

  const { patterns, currentAdmin, destroyPattern, history } = props
  return (
    <>
      <div className='patterns'>
        <h2>PATTERNS</h2>
        {props.results.map((result, id) =>
          <div>
            <Link to={`/pattern/${result.id}`}>
              <h3>{result.name}</h3>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}



        // patterns.map(pattern => (
        //   <React.Fragment key={pattern.id}>
        //     <Link to={`/patterns/${pattern.id}`}>{pattern.name}</Link>
        //     {
        //       currentAdmin && currentAdmin.id === pattern.admin_id && (
        //         <>
        //           <button onClick={() => history.push(`/pattern/${pattern.id}/edit`)}>Edit</button>
        //           <button onClick={() => deletePattern(pattern.id)}>Delete</button>
        //         </>
        //       )
        //     }
        //     <br />
        //   </React.Fragment>
        // ))