import React from "react";
import ReactPlayer from 'react-player';
import "../Hero.css";
import Video3 from "../../assets/Video3.mp4";
import ProgressBar from "@ramonak/react-progress-bar";
function Hero(){

    return(
        <>
        <div className="row"></div>
        <div className="container">
        <div className="first_container">
        <h2>Module 3: Slip, Trip, and Fall Prevention</h2>
    <p> 1. Housekeeping: Maintain clean and clutter-free spaces. Regularly remove obstacles like cables, boxes, and equipment from walkways. <br/></p>

    <p>2. Floor Maintenance: Ensure floors are even, dry, and free from hazards. Repair damaged flooring immediately, and use anti-slip coatings where necessary. <br/></p>
    <p>3. Lighting: Install adequate lighting in all areas, especially stairwells, hallways, and outdoor walkways, to improve visibility and reduce the risk of tripping. <br/></p>

    <p>4. Signage: Use clear, visible signs to warn of potential hazards, such as wet floors or uneven surfaces. "Wet Floor" signs should be placed near spills or during cleaning.  <br/></p>
        </div>
        
        <div className="sec_container">
        <div className="below">
            <ProgressBar completed={60} className="progressbar"/>
            <p>3/5 Complete</p>
            </div>
            <div className="player-wrapper">
            <ReactPlayer
          className='react-player'
          url={Video3}
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