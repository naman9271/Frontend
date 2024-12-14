import Video from "./video";
import PlayButton from "./play";
function VideoList({videos}){
    
    return(
        <>
        {videos.map((video)=>(
          <Video 
            key = {video.id}
            id= {video.id}
            title = {video.title}
            channel = {video.channel}
            views = {video.views}
            time = {video.time}
            verified = {video.verified}
          >
            <PlayButton onPlay={()=>console.log(`playing.. ${video.title}`)} onPause={()=>console.log(`paused... ${video.title}`)}>{video.title}</PlayButton>
        </Video>
        ))}
        </>
    )
}
export default VideoList ;