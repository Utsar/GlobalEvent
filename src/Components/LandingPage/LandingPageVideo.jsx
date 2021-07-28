import React from "react"
import "./LPVideo.css"
import Video from "../../Data/landingPageVideo.mp4"


export const LandingPageVideo = () => {
    return (
        <>
       
        
        <video className="LPVideo" controls={false} autostart autoPlay loop src={Video} type="video/mp4" />
        
        
        </>
    )
}
