import { useState } from "react"
import "./addVideo.css"
function AddVideo({addVideos}){
    const [videos,setVideos]=useState({
        channel:"coder dost",
        time :"3 year ago",
        verified: false,
        title:"",
        views:""
    })
    function handleSubmit(e){
        e.preventDefault();
        e.stopPropagation();
        addVideos(videos);
        console.log(videos);
    }
    function handleChange(e){
        e.stopPropagation();
        setVideos({...videos,
            [e.target.name] : e.target.value
    })
    }
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
            >Add</button>
        </form>
    )
}
export default AddVideo ;