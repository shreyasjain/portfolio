import React from 'react'
import "../Styles/Portfolio.scss"
import NavigationBar from "../Components/NavigationBar"
import Home from './Home'
import Education from './Education'
import About from './About'
import Experience from './Experience'
import Contact from './Contact'
import Projects from './Projects'
import Reviews from './Reviews'

function Portfolio() {
    return (
        <div>
            <NavigationBar/>
            <Home/>
            <Experience/>
            <Projects/>
            {/* <Reviews/> */}
            <About/>
            <Contact/>
        </div>
    )
}

export default Portfolio