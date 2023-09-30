import React from 'react'
import "./project.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
function About() {
    return (
        <div>
            <Container className='custom-container'>
                <h1 className='custom-heading'>About Me</h1>
            </Container>
            <Container>
                <Row>
                    <Col><h1>Shashank Kumar</h1></Col>
                    <Col><Image src="https://media.licdn.com/dms/image/D4D03AQGFCZTlfMvvAg/profile-displayphoto-shrink_800_800/0/1670514666983?e=1701302400&v=beta&t=ZRJDCLAJG1Y53EYXeb_9yIWWUETKyG8-wblPh1vvOtM" alt="Image Description" fluid /></Col>

                </Row>
            </Container>
        </div>
    )
}

export default About
