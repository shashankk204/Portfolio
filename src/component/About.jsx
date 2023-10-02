import React from 'react'
import me from "./me.png"
import "./About.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function About() {
  return (
    <>
    <Container >

      <Row>
        <h1>
          ABOUT ME
        </h1>
      </Row>
      <Row>
       <Col md={7}>
          Hello Everybody I Am <p className='name'>shashank Kumar</p>
          WEB 3.0 Developer
          I have a strong interest in Web 3.0. It's all about exciting new ways to use the internet. I'm diving into topics like blockchain and smart contracts, which make things safer and more fair. They also give people more control over their own stuff online. The metaverse is like a big, cool virtual world we can explore. I'm really enthusiastic about this fresh approach to using the internet!
        </Col>
        <Col>
        {/* <div className='me'>
          <img className='sk' src={me} alt="MyPic" />
        </div> */}
       </Col>
      
      </Row>
      
      
      
    </Container>
    
    </>
  )
}

export default About
