import React from 'react'
import "./ServiceTimesTile.css"

export default function ServiceTimesTile(props) {
  return (
      <div className='serviceTile'>
          <h3>{props.location}</h3>
          <h5><u>SERVICE TIMES</u></h5>
          <p>{props.times}</p>
          <h5><u>REGISTER</u></h5>
    </div>
  )
}
