import React from 'react'
import "./contact.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Contact() {
  return (
    <>
      <div className='container'>
        <div className='title'>
          <h1>Contact Me</h1>
        </div>

        <div className='txt-link'>

          <Row className="justify-content-md-center">
            <Col md="4">
              <p className='pc1'>Send Me A Mail</p>
              <p className='pc2'>I'm always looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you ASAP!</p>
            </Col>
          </Row>
          <Row >
            <div className='mail-link'>

              
              <a className='mail-button' href="mailto:shashankk204@gmail.com?subject=Portfolio_contact_card">Drop A Mail</a>
              
            </div>
            
          </Row>

        </div>
      </div>

    </>
  )
}

export default Contact
