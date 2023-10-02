import React from 'react'
import "./project.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
function Projects() {
  return (
    <>
      {/* <div className='container'>
        <div className='title'><h1>PROJECTS</h1></div>
    </div>
    <Container>
      
      <div className='card-row'>

        <div className="card">
          <div className='pname'>ML-Bootcamp</div>
          <div className='ptxt'>This project contains the basic machine leaning models like Linear regression,KNN,Logistic Regression ,Basic Neural Network etc. written form scratch only using Numpy,Pandas and Matplotlib</div>
        </div>


        <div className="card">
          <div className='pname'>ATLAS</div>
          <div className='ptxt'>ATLAS is the project I have made during Hackfest of IIT(ISM) Dhandbad. This is a web application for managing events conducted by different Clubs and Society of IIT(ISM) Dhanbad. It was made by team of 5 where I have contributed in Database Management Part using Firebase</div>
          <footer>link</footer>
        </div>


        <div className="card">
          <div className='pname'>CloudBurst Prediction System</div>
          <div className='ptxt'>By analyzing meteorological parameters and weather patterns and it with ML can help us in predicting the possibility of cloudbursts. It was the project made during Smart India Hackathon with a team of 6 Where my I have contributed in this project by designing and deploying the ML model in web app using Flask(Python) and streamlit(Python).</div>

        </div>
      </div>
      
    </Container> */}
      <div className='container'>
        <div className='title'><h1>PROJECTS</h1></div>
      </div>
      <div className='space'></div>
      <Container>
        <CardGroup>
          <Card >
            
            <Card.Body>
              <Card.Title>ML-Bootcamp</Card.Title>
              <Card.Text>
                This project contains the basic machine leaning models like Linear regression,KNN,Logistic Regression ,Basic Neural Network etc. written form scratch only using Numpy,Pandas and Matplotlib
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="primary" href="https://github.com/shashankk204/Basic_Machine_Learning_Model/tree/main">GitHub Repo</Button>
            </Card.Footer>
          </Card>

          <Card >
            
            <Card.Body>
              <Card.Title>ATLAS</Card.Title>
              <Card.Text>
                ATLAS is the project I have made during Hackfest of IIT(ISM) Dhandbad. This is a web application for managing events conducted by different Clubs and Society of IIT(ISM) Dhanbad. It was made by team of 5 where I have contributed in Database Management Part using Firebase{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="primary" href="https://github.com/shretimag/ATLAS">GitHub Repo</Button>
            </Card.Footer>
          </Card>


          <Card>
            
            <Card.Body>
              <Card.Title>CloudBurst Prediction System</Card.Title>
              <Card.Text>
                By analyzing meteorological parameters and weather patterns and it with ML can help us in predicting the possibility of cloudbursts. It was the project made during Smart India Hackathon with a team of 6 Where my I have contributed in this project by designing and deploying the ML model in web app using Flask(Python) and streamlit(Python).
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="primary" href="https://github.com/shashankk204/stream_CloudBurst" >GitHub Repo</Button>
            </Card.Footer>
          </Card>

        </CardGroup>
      </Container>

    </>
  )
}

export default Projects
