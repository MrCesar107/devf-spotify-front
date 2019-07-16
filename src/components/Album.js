import React from 'react'

const Album = (props) => {
  return(
    <div className="col-sm-3 album">
      <img src={props.data.coverPage}
           className="mx-auto d-block"
           alt="artist"/>
      <h4 className="name-title">{props.data.name}</h4>
    </div>
  )
}

export default Album
