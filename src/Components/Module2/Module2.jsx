import React from "react";
import ReactPlayer from 'react-player';
import "../Hero.css";
import Video1 from "../../assets/Video2.mp4";
import ProgressBar from "@ramonak/react-progress-bar";
function Hero(){

    return(
        <>
        <div className="row"></div>
        <div className="container">
        <div className="first_container">
        <h2>Module 2: Fire Safety Practices</h2>
       <p> 1. Smoke Alarms: Install smoke alarms on every level of a building, especially near sleeping areas. Test them monthly and replace batteries at least once a year.</p><br/>
        <p>2. Fire Extinguishers: Keep accessible fire extinguishers in key areas like kitchens, garages, and workplaces. Know how to use them (PASS: Pull, Aim, Squeeze, Sweep).</p><br/>
        <p>3. Escape Plans: Develop and practice a fire escape plan with all occupants, ensuring multiple exits and a designated meeting spot outside the building.</p>
        </div>
        
        <div className="sec_container">
        <div className="below">
            <ProgressBar completed={40} className="progressbar"/>
            <p>2/5 Complete</p>
            </div>
            <div className="player-wrapper">
            <ReactPlayer
          className='react-player'
          url={Video1}
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