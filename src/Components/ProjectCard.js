import React from 'react'
import "../Styles/ProjectCard.scss"


function ProjectCard(props) {

    const handleClick=(e)=>{
        e.preventDefault()
        window.location.href=props.github
    }

    return (
        <div>
            <div className="project-card-container" onClick={handleClick}>
                <div style={{"background-image":`url(${props.link})`}} className="project-card-container-image">

                </div>
                <div className="project-card-container-details">
                    <div class="project-card-container-details-name">
                        <span>{props.title}</span>
                    </div>
                    {/* <div>
                        <button className="pc-github-btn">G</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
