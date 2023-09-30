import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./project.css"
import altas from "./atlas.jpg"
function Project() {
    return (
        <div>
            <Container className='custom-container'>
                <h1 className='custom-heading'>Projects</h1>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://imageio.forbes.com/specials-images/dam/imageserve/1129869424/960x0.jpg?format=jpg&width=1440" />
                            <Card.Body>
                                <Card.Title>ML-Bootcamp</Card.Title>
                                <Card.Text>
                                    This project contains the basic machine leaning models like Linear regression,KNN,Logistic Regression ,Basic Neural Network etc. written form scratch only using Numpy,Pandas and Matplotlib
                                </Card.Text>
                                <Button variant="danger"><a href="https://github.com/shashankk204/Basic_Machine_Learning_Model">GitHub Repo</a></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={altas} />
                            <Card.Body>
                                <Card.Title>ATLAS</Card.Title>
                                <Card.Text>
                                    ATLAS is the project I have made during Hackfest of IIT(ISM) Dhandbad.
                                    This is a web application for managing events conducted by different Clubs and Society of IIT(ISM) Dhanbad.
                                    It was made by team of 5 where I have contributed in Database Management Part using Firebase


                                </Card.Text>
                                <Button variant="danger"><a href="https://github.com/shretimag/ATLAS">GitHub Repo</a></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://staticimg.amarujala.com/assets/images/2022/08/24/sih_1661300247.png?w=674&dpr=1.0" />
                            <Card.Body>
                                <Card.Title>Cloudburst prediction system</Card.Title>
                                <Card.Text>
                                    By analyzing meteorological parameters and weather patterns and it with ML can help us in predicting the possibility of cloudbursts.
                                    It was the project made during Smart India Hackathon with a team of 6
                                    Where my I have contributed in this project by designing and deploying the ML model in web app using Flask(Python) and streamlit(Python).
                                </Card.Text>
                                <Button variant="danger"><a href="https://github.com/shashankk204/stream_CloudBurst">GitHub Repo</a></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Project
