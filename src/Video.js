import React from 'react';
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

// {imgsrc, channel, desc,song,like,comment,share}
const Video = ({imgsrc, channel, desc,song,likes,comment,share}) => {
    return (
        <div className="videos">
       
           <img className="imgtag" src={imgsrc} alt="not found" />
             <VideoFooter
                 channel={channel}
                 desc={desc}
                 song={song}
             />
             <VideoSidebar
                 likes={likes}
                 comment={comment}
                 share={share}
             />
            
        </div>
    )
}

export default Video;
