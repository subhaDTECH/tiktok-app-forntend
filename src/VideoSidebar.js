import React,{useState} from 'react';
import "./VideoSidebar.css";
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Forward30Icon from '@material-ui/icons/Forward30';

const VideoSidebar = ({likes,comment,share}) => {
    const [like,setLike]=useState(false);
    return (
        <div className="videosidebar">
           <div className="side_icon" >
             {
                 like ? (
                    <FavoriteIcon className onClick={()=>setLike(false)} />
                 ):(
                    <FavoriteBorderIcon onClick={()=>setLike(true)}/>
                 )
             }   
            
            <p>{likes}</p>
               
           </div>
           <div className="side_icon">
                
                 <CommentIcon/>
                  <p>{comment}</p>
           </div>
           <div className="side_icon">
              
                 <ShareIcon/>
                 <p>{share}</p> 
           </div>
           <div className="side_icon rotate_icon ">
              
              <Forward30Icon className="rotate_icon" fontSize="large" />
              
        </div>
          
            
        </div>
    )
}

export default VideoSidebar;
