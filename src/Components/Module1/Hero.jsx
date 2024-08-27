import React from "react";
import ReactPlayer from 'react-player';
import "../Hero.css";
import Video1 from "../../assets/PPE.mp4";
import ProgressBar from "@ramonak/react-progress-bar";
function Hero(){

    return(
        <>
        <div className="row"></div>
        <div className="container">
        
        <div className="first_container">
        <h2>Module 1: Personal Protective Equipment (PPE)</h2>
    <p> 1. Head Protection: Helmets and hard hats to protect against head injuries from falling objects or impacts.<br/></p>

    <p>2. Eye and Face Protection: Safety glasses, goggles, face shields, and welding helmets to shield eyes and face from chemicals, flying debris, or intense light.<br/></p>

    <p>3. Hearing Protection: Earplugs and earmuffs to protect against hearing damage in noisy environments.<br/></p>

    <p>4. Respiratory Protection: Masks and respirators to protect against inhalation of hazardous substances like dust, fumes, vapors, and gases.<br/></p>
        </div>
        
        <div className="sec_container">

        <div className="below">
            <ProgressBar completed={20} className="progressbar"/>
            <p>1/5 Complete</p>
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