import React from "react";
import ReactPlayer from 'react-player';
import "../Hero.css";
import Video4 from "../../assets/Video4.mp4";
import ProgressBar from "@ramonak/react-progress-bar";
function Hero(){

    return(
        <>
        <div className="row"></div>
        <div className="container">
        <div className="first_container">
        <h2>Module 4: Flood prevention and mitigation</h2>
    <p>1. Risk Assessment and Mapping: Conduct flood risk assessments to identify vulnerable areas. Use flood maps to understand the floodplain and areas at high risk.  <br/></p>

    <p>2. Community Awareness: Educate communities about flood risks and preparedness. Distribute information on evacuation routes, emergency contacts, and safety measures. <br/></p>

    <p>3. Flood Insurance: Encourage residents and businesses in flood-prone areas to obtain flood insurance to protect against financial loss. <br/></p>

    <p>4. Retention Basins: Develop retention or detention basins to temporarily store excess rainwater and reduce the burden on drainage systems.  <br/></p>
        </div>
        
        <div className="sec_container">
        <div className="below">
            <ProgressBar completed={80} className="progressbar"/>
            <p>4/5 Complete</p>
            </div>
            <div className="player-wrapper">
            <ReactPlayer
          className='react-player'
          url={Video4}
           controls="true"
           
            
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
        />

            </div>
             
        </div>
        </div>
        
        </>
    );

}
export default Hero;