import React from 'react'

const Artist = (props) => {
  return(
    <div className="col-sm-3 artist">
      <img src={props.data.profile}
           className="mx-auto d-block"
           alt="artist"/>
      <h4 className="name-title">{props.data.name}</h4>
    </div>
  )
}

export default Artist
