import React from "react";
import "./LandingPage.css";
import Video from "../../Assets/landingPageVideo.mp4";
import { withRouter } from "react-router";

export const LandingBackgroundVideo = () => {
  return (
    <>
      <video
        className="LPVideo"
        controls={false}
        autoPlay={true}
        muted={true}
        loop={true}
        src={Video}
        type="video/mp4"
      />
    </>
  );
};
export default withRouter(LandingBackgroundVideo);
