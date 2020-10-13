import React from 'react'
import './Banner.css'

function Banner (props)
{
  return(
    <div>
      <div className="banner-general">
        <div className="banner-general-inside">
        {props.caption}
        </div>
      </div>
    </div>
  )
}

export default Banner