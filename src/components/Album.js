import React from 'react'
import { Link } from 'react-router-dom'

const Album = (props) => {
  console.log(props)
  return(
    <div className="col-sm-3 album">
      <Link to={`/album/${props.data.id}`}>
        <img src={props.data.coverPage}
            className="mx-auto d-block"
            alt="artist"/>
        <h4 className="name-title">{props.data.name}</h4>
      </Link>
    </div>
  )
}

export default Album
