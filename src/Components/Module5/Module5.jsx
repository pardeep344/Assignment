import React from "react";
import ReactPlayer from 'react-player';
import "../Hero.css";
import Video5 from "../../assets/Video5.mp4";
import ProgressBar from "@ramonak/react-progress-bar";
function Hero(){

    return(
        <>
        <div className="row"></div>
        <div className="container">
        <div className="first_container">
        <h2>Module 5: Tsunami strategies are crucial for minimizing the devastating effects</h2>
    <p> 1. Tsunami Hazard Mapping: Develop detailed maps of coastal areas to identify zones at risk of tsunamis. These maps should include inundation zones, evacuation routes, and safe areas. <br/></p>

    <p>2. Risk Assessment: Conduct risk assessments to understand the potential impact of tsunamis on communities, infrastructure, and the environment. This includes assessing the likelihood of a tsunami and the vulnerability of the area. <br/></p>

    <p>3. Tsunami Warning Centers: Establish and maintain tsunami warning centers that monitor seismic activity and ocean conditions. These centers should provide timely warnings to at-risk areas.<br/></p>

    <p>4. Public Alert Systems: Implement public alert systems, including sirens, text messages, radio broadcasts, and social media alerts, to quickly notify residents of an impending tsunami. <br/></p>
        </div>
        
        <div className="sec_container">
        <div className="below">
            <ProgressBar completed={100} className="progressbar"/>
            <p>5/5 Complete</p>
            </div>
            <div className="player-wrapper">
            <ReactPlayer
          className='react-player'
          url={Video5}
           controls="true"
           
            
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
        />

            </div>
             
        </div>
        </div>
        {/* <div className="row"></div> */}
        </>
    );

}
export default Hero;