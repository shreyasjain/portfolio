import React from 'react'
import { Nav, Navbar, Container } from "react-bootstrap"
import HomeIcon from '@material-ui/icons/Home';
import "../Styles/Navigation.scss"
import $ from "jquery"

function NavigationBar() {

    $(document).ready(function(){
        // Add smooth scrolling to all links
        $("a").on('click', function(event) {
      
          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
      
            // Store hash
            var hash = this.hash;
      
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 500, function(){
         
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
            });
          } // End if
        });
      });

    return (
        <div>
            <Navbar fixed="top" expand="lg">
                <Navbar.Brand href="#home">
                    <HomeIcon />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#experience">Services</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        {/* <Nav.Link href="#reviews">Reviews</Nav.Link> */}
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Connect</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar
