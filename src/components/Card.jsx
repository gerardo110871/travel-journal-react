import React from 'react'
import Icon from '../images/Fill-location.png'

function Card(props) {
  return (
    <div className="card--">

      <img className="card--img" src={props.card.imageUrl} alt='location for items'></img>

      <div className="card--info">

        <div className="card--location">
          <img className='icon' src={Icon} alt='location icon'></img>

          <p>{props.card.location}</p>
          <a href={props.card.googleMapsUrl}>View On Google Maps</a>
        </div>
      <h1>
        {props.card.title}
      </h1>
      <h5>{props.card.startDate} - {props.card.endDate}</h5>
      <p>{props.card.description}</p>
      </div>
    </div>

  )
}

export default Card