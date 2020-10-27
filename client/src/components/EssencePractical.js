import React from 'react'
import './EssencePractical.css'
import './SoundWidget'
import SoundWidget from './SoundWidget'

function EssencePractical ()
{
  return(
    <div>
          <div className="caption-container">
          <h5 className="caption-style">HEADPHONES WORK BETTER :) </h5>
          </div>
          <div>    
          <h3 className="essence-style">ESSENCE AND PRACTICAL APPLICATION</h3>
          </div>
          <div className="cont">
          <SoundWidget section={process.env.REACT_APP_INTRODUCTION} />
          <SoundWidget section={process.env.REACT_APP_INTRODUCTION2} />
          </div>
            
    </div>
  )
}

export default EssencePractical