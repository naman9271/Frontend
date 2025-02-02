import { useState } from "react"
import { useEffect } from "react"
import "./addVideo.css"
//import VideosDispatchContext from "../context/videosDispatchContext"
import useVideosDispatch from "../hooks/VideoDispatch"
function AddVideo({editableVideo}){
    const dispatch = useVideosDispatch();
    const initialState={
        channel:"coder dost",
        time :"3 year ago",
        verified: false,
        title:"",
        views:""
    }

    const [videos,setVideos]=useState(initialState);

    function handleSubmit(e){
        e.preventDefault();
        e.stopPropagation();
        if(editableVideo){
            dispatch({type:"Update",payload:videos});
        }else{
            dispatch({type:"Add",payload:videos})
        }
        setVideos(initialState);
    }
    function handleChange(e){
        e.stopPropagation();
        setVideos({...videos,
            [e.target.name] : e.target.value
    })
    }
useEffect(()=>{
    if(editableVideo){
        setVideos(editableVideo)};
},[editableVideo])

    return(
        <form>
            <input 
                type ="text" 
                placeholder="title" 
                name="title" 
                onChange={handleChange}
                value={videos.title}
                ></input>

            <input 
                type ="text" 
                placeholder="views" 
                name="views" 
                onChange={handleChange}
                value = {videos.views}
                ></input>

            <button 
            onClick= {handleSubmit}
            >{editableVideo?"Edit":"Add"}</button>
        </form>
    )
}
export default AddVideo ;