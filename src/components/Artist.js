import React from 'react'
import { Link } from 'react-router-dom'

const Artist = (props) => {
  console.log(props)
  return(
    <div className="col-sm-3 artist">
      <Link to={`/artist/${props.data.id}`}>
        <img src={props.data.profile}
             className="mx-auto d-block"
             alt="artist"/>
        <h4 className="name-title">{props.data.name}</h4>
      </Link>
    </div>
  )
}

export default Artist
