import React from 'react'
import { Container } from "react-bootstrap"
import "../Styles/Contact.scss"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Contact() {
    return (
        <div id="contact" className="custom-container">
            <h1 className="page-main-heading">#CONNECT</h1>
            <Container>
                <div className="contact-section">
                    <div className="contact-description">
                        <p>
                            Believe me, I am way more than my portfolio says about me. So why not connect once?
                        </p>

                        <p>
                            Here are links to my social media handles. I'll be happy to connect..
                        </p>
                    </div>
                    <div className="social-media-links">
                        <a className="social-media-link social-media-link--facebook" href="#"><span className="social-media-icon"><FacebookIcon/></span></a>
                        <a className="social-media-link social-media-link--twitter" href="#"><span className="social-media-icon"><TwitterIcon/></span></a>
                        <a className="social-media-link social-media-link--instagram" href="#"><span className="social-media-icon"><InstagramIcon/></span></a>
                        <a className="social-media-link social-media-link--linkedin" href="#"><span className="social-media-icon"><LinkedInIcon/></span></a>
                        <a className="social-media-link social-media-link--youtube" href="#"><span className="social-media-icon"><YouTubeIcon/></span></a>
                    </div>
                    <div className="contact-description other-contact-details">
                        <h6><strong>Other Contact Details:</strong></h6>
                        <p>Phone: +91-9649344770</p>
                        <p>Email: shreyasjain4all@gmail.com</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Contact
