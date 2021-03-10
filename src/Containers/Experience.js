import React from 'react'
import "../Styles/Experience.scss"
import { Container } from 'react-bootstrap'
import ServiceCard from '../Components/ServiceCard'

function Experience() {
    return (
        <div  id="experience" className="custom-container">
            <h1 className="page-main-heading">#SERVICES</h1>
            <Container>
                <div className="services-content">
                    <ServiceCard title="HTML5" imageLink="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png"/>
                    <ServiceCard title="CSS3" imageLink="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"/>
                    <ServiceCard title="JAVASCTIPT" imageLink="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"/>
                    <ServiceCard title="REACT.JS" imageLink="https://lh3.googleusercontent.com/proxy/xN3N_RDZiot94mVSM0LEv78nlfOx1wvOR2pnAmk0O_cx0Q1pKHASKcGD2xXpkQGUQlKOysJmI3buTvcl2BWOVM9PfZVNAcPFyy_5AQ7J7R47UE0=s0-d"/>
                    <ServiceCard title="JAVA" imageLink="http://assets.stickpng.com/images/58480979cef1014c0b5e4901.png"/>
                    <ServiceCard title="SPRING" imageLink="https://cdn.freebiesupply.com/logos/large/2x/spring-3-logo-png-transparent.png"/>
                    <ServiceCard title="SQL" imageLink="https://icons-for-free.com/iconfiles/png/512/logo+my+query+server+sql+icon-1320184811372606623.png"/>
                    <ServiceCard title="FIREBASE" imageLink="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"/>
                    <ServiceCard title="GIT" imageLink="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"/>
                </div>
            </Container>
        </div>
    )
}

export default Experience
