import React from "react"
import "./LandingPage.css"
import Video from "../../Assets/landingPageVideo.mp4"


export const LandingBackgroundVideo = () => {
    return (
        <>
       
        
        <video className="LPVideo" controls={false} autoStart={true} autoPlay={true} muted={true} loop={true} src={Video} type="video/mp4" />
        
        
        </>
    )
}
