import React from 'react'
import "./skill.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cplus from "./c++.svg"
function Skill() {
  return (
    <>
    <div className='container'>
        <h1>Skills</h1>
    </div>
      <Container >
      <Row className='row'><div>Languages: C++/C, Python </div></Row>
      <Row className='row'><div>Machine Learning(Python libraries): Pandas,Numpy Matplotlib,srteamlit,Skitlearn</div></Row>
      <Row className='row'><div>Databases:MongoDB,Firebase</div></Row>
      <Row className='row'><div>Front End: HTML, JS, CSS, React Js</div></Row>
      <Row className='row'><div>Back End: Flask(Python)</div></Row>
      <Row className='row'><div>Web 3.0: Solidity</div></Row>
      
      
      
      
      
      
      </Container>
    </>
  )
}

export default Skill
