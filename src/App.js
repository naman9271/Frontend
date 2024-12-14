import "./App.css";
import videoDB from "./data/data"
import { useState } from "react";
import VideoList from "./components/VideoList";
import AddVideo from "./components/addVideo"

function App(){
  const [videos,setVideos] = useState(videoDB);

  function addVideos(video){
      setVideos([...videos,{...video, id :videos.length+1}])
  }
  return (
    <div className="App" onClick ={()=>console.log("App")}>
      <AddVideo addVideos={addVideos}></AddVideo>
      <VideoList videos = {videos}></VideoList>
    </div>
  )}


export default App ;