import React from "react";
import ReactHlsPlayer from 'react-hls-player';
import './style.css';

const LiveStreamPlayer = ({
}) => {
  return(
    <ReactHlsPlayer
      url='http://localhost:8000/live/asfasfas/index.m3u8'
      autoplay={true}
      controls={true}
      width={"700px"}
      height={"400px"}
    />
  )
}
export default LiveStreamPlayer;
