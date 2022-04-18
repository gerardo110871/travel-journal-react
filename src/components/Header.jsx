import React from 'react'
import World from '../images/Fill-213.png'

function Header() {
  return (
    <div className="header">
        <img className="img" src={World} alt="world is good" />
        <h2>my travel journal</h2>
    </div>
  )
}

export default Header