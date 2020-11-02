import React from 'react'
import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <div className="footer-box">
      <Container className="text-center">
        <Row>
          <Col lg="12">
            <div>
              <div className="footer-caption">THOUGHT EXPERIENCES 2020 |<span style={{ color: "red" }}> TERMS </span> | <span style={{ color: "red" }}>PRIVACY </span></div>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Footer