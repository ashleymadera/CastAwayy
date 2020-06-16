import React from 'react'

export default function Pattern(props) {
  const { patterns, currentAdmin, destroyPattern, history } = props
  return (
    <div>
      <h2>{props.pattern.name}</h2>
    </div>
  )
}
