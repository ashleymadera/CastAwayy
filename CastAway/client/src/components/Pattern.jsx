import React from 'react'
import '../App.css'

export default function Pattern(props) {
  const { patterns, currentAdmin, destroyPattern, history } = props
  return (
    <div className='project-form'>
      <h2>{props.pattern.name}</h2>
    </div>
  )
}
