import React from 'react'
import './DeepFocus.css'
import { Container, Col, Row } from 'react-bootstrap'

function DeepFocus ()
{
  return (
    <div>

      <div className="container">
      <div>
      <h3 className="title-style">SERIES 1 : DEEP FOCUS</h3>
      </div>
      <div>
      <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1056964894&color=%23b6b6b6&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style={{fontSize: "10px", color: "#cccccc", lineBreak: "anywhere", wordBreak: "normal" , overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif", fontWeight: "100"}}><a href="https://soundcloud.com/thoughtexperiences" title="Thought Experiences" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>Thought Experiences</a> · <a href="https://soundcloud.com/thoughtexperiences/sets/deep-focus" title="Deep Focus" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>Deep Focus</a></div>
      </div>
      </div>

      <Container>
            <Row>
              <Col lg="6">
                <div className="title-box">
                  <h4 className="title-style">CHAPTER IN BOOKS</h4>
                </div>
                <div className="smallbox-chapters">
                
                <div className="chapter-box"><span className="chapter-style">Chapter Lorem Ipsum P10</span></div>
                <div className="chapter-box"><span className="chapter-style">Chapter Lorem Ipsum P15</span></div>
                <div className="chapter-box"><span className="chapter-style">Chapter Lorem Ipsum P20</span></div>
                </div>
              </Col>
              <Col lg="6">
                <div className="title-box">
                <h4 className="title-style">KEY CONCEPTS AND TERMS</h4>
                </div>

                <div className="text-box">
                  <p className="text-style">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>

              </Col>
            </Row>
          </Container>

    </div>
  )
}
export default DeepFocus