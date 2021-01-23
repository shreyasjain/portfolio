import React from 'react'
import "../Styles/ServiceCard.scss"
import bgImg from "../Media/html.png"

function ServiceCard(props) {
    return (
        <div className="service-card-container">
            <img src={props.imageLink} width="100%"/>
            <p>{props.title}</p>
        </div>
    )
}

export default ServiceCard
