import React from 'react'

function SoundWidget (props)
{
  return (
  <div>
    <iframe width="85%"height="166" scrolling="no" frameBorder="no" allow="autoplay" src={props.section}></iframe><div style={{fontSize: "10px", color: "#cccccc",lineBreak: "anywhere",wordBreak: "normal", overflow: "hidden", whiteSpace: "nowrap",textOverflow: "ellipsis", fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif", fontWeight: "100"}}><a href="https://soundcloud.com/thoughtexperiences" title="Thought Experiences" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>Thought Experiences</a> · <a href="https://soundcloud.com/thoughtexperiences/what-are-thought-experiences-i" title="What Are Thought Experiences - I" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>What Are Thought Experiences - I</a></div>
    </div>
  )
}

export default SoundWidget