import React from 'react'
import "../Styles/ProjectCard.scss"

function ProjectCard(props) {
    return (
        <div>
            <div className="project-card-container">
                <div style={{"background-image":"url(https://source.unsplash.com/random)"}} className="project-card-container-image">

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
