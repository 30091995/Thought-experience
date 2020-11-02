import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Registration.css'

function Registration ()
{
  return (
    <div>
      <Container className="text-center">
        <Row>
          <Col>
            <div className="box-for-title"><h5 className="style">UNLOCK CONTENT</h5></div>
          </Col>
        </Row>
          <Row>
            <Col>
            <span className="style" style={{fontWeight: "400"}}>
              Email address
            </span>
            </Col>
          </Row>
            <Row>
            <Col>
            <form> 
            <input className="input-text-style" type="text" placeholder="e-mail" />
            <br />
            <div className="box-label">
            <input className="style-check" type="checkbox" id="read" name="read" value="read" />
            <label for="read">By clicking Unlock Content, you agree to our <br />
            <span style={{fontStyle: "italic", color: 'red'}}>Privacy Policy</span> and our <span style={{fontStyle: "italic", color: 'red'}}>Terms of Use.</span></label>
            </div>
            <br />
            <button className="button-style" type="submit"><span className="button-text">UNLOCK CONTENT</span></button>
            </form>
            </Col>
           </Row>
      </Container>

    </div>
  )
}

export default Registration