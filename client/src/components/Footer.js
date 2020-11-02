import React from 'react'
import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap'

function Footer ()
{
  return (
    <div className="footer-box">
      <Container className="text-center">
        <Row>
        <Col>
        <div className="footer-caption text-center">THOUGHT EXPERIENCES 2020 |<span style={{color:"red"}}> TERMS </span> | <span style={{color:"red"}}>PRIVACY </span></div>
        </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer