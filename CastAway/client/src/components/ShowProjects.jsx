import React, { useState, useEffect } from 'react'
import { Link, Route } from 'react-router-dom'
import Project from "./Project"
import { getAllPatterns, deletePattern } from '../services/patterns'
import ShowPatterns from './ShowPatterns'
import Pattern from './Pattern'

export default function ShowProjects(props) {

  const { projects, currentAdmin, desttoyPattern, destroyProject, history } = props
  const [patternList, setList] = useState([])

  useEffect(() => {
    const getPatternList = async (e) => {
      const resp = await getAllPatterns()
      setList(resp)
    }
    getPatternList()
  }, [])


  return (
    <>
      <div className='project-page'>
        <h2>PROJECTS</h2>
        <>
          <Link to='/new/project'><button>CREATE A PROJECT</button></Link>
          <br />
          <Link to='/new/pattern'><button>CREATE A PATTERN</button></Link>
        </>
      </div>
      <br />
      <div className='project-list'>
        {
          projects.map((project) => (
            <React.Fragment key={project.id}>
              <div >
                <Link to={!currentAdmin ? '/' : `/projects/${project.id}`}>{project.title}
                  <br />
                  <img src={project.image_url}
                    alt="image"
                    height='60px' />
                </Link>
              </div>
              <br />
            </React.Fragment>
          ))
        }

      </div>
      <Route path="/projects">
        <ShowPatterns results={patternList}
        />
      </Route>
      <Route exact path={`/pattern/${patternList.id}`} render={(props) => (
        <Pattern
          pattern={props.patternList.find((p) => (
            parseInt(props.match.params.id) === p.id
          )) || {}}
          currentAdmin={currentAdmin}
          destroyPattern={props.destroyPattern}
        />
      )} >
      </Route>
    </>
  )
}


// {
//   currentAdmin && currentAdmin.id === project.admin_id && (
//     <>
//       <button onClick={() => history.push(`/project/${project.id}/edit`)}>EDIT</button>
//       <button onClick={() => destroyProject(project.id)}>DELETE</button>
//     </>
//   )
// }
