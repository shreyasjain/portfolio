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
                        <p>I am Shreyas Jain. I am a MERN-stack web-developer proficient in wide range of latest technologies including React.js and Redux, etc. I have 3+ years of experience as a frontend developer and decent experience as a backend developer too. I am a keen problem solver and always eager to do challenging tasks.</p>
                        <p>Apart from technical stuffs, I love to travel, trek, and do tasks that require pushing limits. I like working with happy teams.</p>
                        <p>If you still find my tech-stack small, I am flexible to switch between new technologies. If interested, contact me directly and thank me later :p Links provided below.</p>
                        <p>Thanks</p>
                    </Col>
                    <Col sm={4} className="about-col-2 image-column" ><img src={image} /></Col>
                </Row>
            </Container>
            </div>
            )
        }
        
        export default About
