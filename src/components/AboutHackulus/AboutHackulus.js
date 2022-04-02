import React from "react";
import './AboutHackulus.scss'

const AboutHackulus = React.forwardRef((props, ref) => {
    return(
        <div ref={ref} className="AboutHackulus">
            <h4 className="AboutHackulusText"><b>Hackulus</b> is a 24hr hackathon organised by <b>Society for Industrial and Applied Mathematics (SIAM VIT)</b>.</h4>
            <h4 className="AboutHackulusText">The event would have multiple tracks and expects to see participants from all parts of the country.</h4>
            <h4 className="AboutHackulusText">It aims to spotlight unique and innovative ideas to real world problems within <b>24hrs</b> of constant mentorship and guidance by experts in leading technical domains such as <b>Web development, App development and Machine Learning</b>.</h4>
            <h4 className="AboutHackulusText">It also aims to provide an <b>opportunity to beginners</b> who are not familiar with hackathons by providing a separate beginner round.</h4>
        </div>
    )
})

export default AboutHackulus;