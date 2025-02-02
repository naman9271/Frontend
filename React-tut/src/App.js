import "./App.css";
import videoDB from "./data/data";
import {useContext,useReducer, useState } from "react";
import VideoList from "./components/VideoList";
import AddVideo from "./components/addVideo";
import Theme from "./context/context";
import VideosContext from "./context/videosContext";
import VideosDispatchContext from "./context/videosDispatchContext";
import Counter from "./components/counter";

function App(){
  // const [videos,setVideos] = useState(videoDB);
  const [editableVideo,setEditableVideo] = useState(null);

  const [videos,dispatch] = useReducer(videoReducer , videoDB);

  function videoReducer(videos,action){
    switch(action.type){
      case "Add":
        return [...videos,{...action.payload, id :videos.length+1}]
      case "Delete":
        return videos.filter(video=>video.id!==action.payload)  
      case "Update":
        const index = videos.findIndex(v=>v.id ===action.payload.id);
        const newVideos=[...videos];
        newVideos.splice(index,1,action.payload);
        setEditableVideo(null);
        return newVideos 
      default:
        return videos;
    }
  }


  const theme = useContext(Theme);
  console.log(theme);

  // function addVideos(video){
  //   dispatch({type:"Add",payload:video})
  //     // setVideos([...videos,{...video, id :videos.length+1}])
  // }
  // function deleteVideos(id,e){
  //   e.stopPropagation();
  //   dispatch({type:"Delete",payload:id})
  //   // setVideos(videos.filter(video=>video.id!==id));
  // }
  function editVideos(id,e){
    e.stopPropagation();
    setEditableVideo(videos.find(video=>id===video.id));
  }
  // function updateVideo(video){
  //   dispatch({type:"Update",payload:video})
  //   // const index = videos.findIndex(v=>v.id ===video.id);
  //   // const newVideos=[...videos];
  //   // newVideos.splice(index,1,video);
  //   // setVideos(newVideos);
  // }

  return (
    <VideosContext.Provider value={videos}>
      <VideosDispatchContext.Provider value ={dispatch}>
    <div className="App" onClick ={()=>console.log("App")}>
      <Counter></Counter>
      <AddVideo editableVideo={editableVideo}></AddVideo>
      <VideoList editVideos={editVideos}></VideoList>
    </div>  
    </VideosDispatchContext.Provider>
    </VideosContext.Provider>
  )}


export default App ;