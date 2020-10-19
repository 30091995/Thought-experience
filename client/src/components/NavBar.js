import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <div className="nav-box border-bottom">
      <a className="logo" href="http://thoughtexperiences.com/"><img src="Logo_no_background.svg" alt="TE logo" /></a>
      <div>
        <span className="span-style" style={{paddingRight: "10px"}}>THE BOOK</span>
        <span className="span-style" style={{paddingLeft:"10px"}}>EVENTS</span>
      </div>
      <div className="unlock-content">
      <span>UNLOCK CONTENT</span>
      </div>
        </div>

  )
}

export default NavBar