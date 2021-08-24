import Video from "./Video";
import './App.css';
import React,{useState,useEffect}from "react";
import axios from "./axios";

function App() {
  const [videos,setVideos]=useState([]);
  useEffect(()=>{
      async function fetchData(){
        const res=await axios.get('/v1/posts');
        setVideos(res.data);
      }
      fetchData();
  },[videos])
  console.log(videos)
  return (
    <div className="app">
        <div className="app_videos">
          {
            videos.map((video)=>{
              return (
                <Video
                key={video.id} 
                imgsrc={video.imgsrc}
                channel={video.channel}
                 desc={video.desc}
                 song={video.song}
                 likes={video.likes}
                 comment={video.comment}
                 share={video.share}
                />
              )
            })
          }
        

        </div>
    </div>
  );
}

export default App;
