import React from 'react'
import './Paragraphs.css'
import { Container, Row, Col } from 'reactstrap'

function Paragraphs ()
{
  return(
    <div className="big-container-text">
      <div className="small-container-text" >
      <h4 className="center-text">WHAT WE CARE ABOUT</h4>
      <div>
      <p className="container-text">
        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentialy unchanged. It was popularised in the 1960s
        with the release of letraset sheets containing lorem ipsum passages, and more recently with desktop publishing software like aldus pagemaker
        including version of lorem ipsum
      </p>
      </div>
      </div>

      <div className="small-container-text2" >
      <h4 className="center-text">WHAT WE ENVISION</h4>
      <div>
      <p className="container-text">
        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentialy unchanged. It was popularised in the 1960s
        with the release of letraset sheets containing lorem ipsum passages, and more recently with desktop publishing software like aldus pagemaker
        including version of lorem ipsum
      </p>
      </div>
      </div>
      </div>
  )
}

export default Paragraphs