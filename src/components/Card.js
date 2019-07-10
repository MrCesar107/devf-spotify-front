import React from 'react'

const Card = (props) => (
  <div className="card">
    <div class="card-body">
      <p>{ props.content }</p>
    </div>
  </div>
)

export default Card