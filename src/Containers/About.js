import React from 'react'
import image from "../Media/mypic.jpg"
import { Container, Row, Col } from 'react-bootstrap'
import "../Styles/About.scss"

function About() {
    return (
        <div id="about" className="custom-container">
            <h1 className="page-main-heading">#ABOUT</h1>
            <Container>
                <Row>
                    <Col sm={8} className="about-col-1 about-text">
                        <p>Hi</p>
                        <p>I am Shreyas Jain. I am a full-stack developer proficient in varied range of latest technologies including React.js, etc. I have 2years of experience as a frontend developer and decent experience as a backend developer too. I am a problem solver and always eager to do challenging tasks.</p>
                        <p>If you still find my tech-stack a bit small, I am flexible to switch between new technologies. For more information, kindly contact me directly. Links provided below.</p>
                        <p>Thanks</p>
                    </Col>
                    <Col sm={4} className="about-col-2 image-column" ><img src={image} /></Col>
                </Row>
            </Container>
            </div>
            )
        }
        
        export default About
