import React from 'react';
import "./VideoFooter.css";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker'

const VideoFooter = ({channel,desc,song}) => {
    return (
        <div className="video__footer">
           <div className="video__footer__info">
            <h3>{channel}</h3>
             <p>{desc}</p>

           </div>
           <div className="song_ticker">
              <MusicNoteIcon/>
           </div>
           <Ticker>
        {({ index }) => (
            <>
                <p >{song} </p>
               
            </>
        )}
    </Ticker>
          <p># follow me # mern stack</p>  
        </div>
    )
}

export default VideoFooter;
