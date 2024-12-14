import "./video.css"
function Video({title , channel="coder dost",views ,time,verified=false, id , children, deleteVideos,editVideos}){
    return (
        <div className="boxes">
            <button className="edit" onClick={(e)=>{editVideos(id,e)}}>Edit</button>
            <button className="close" onClick={(e)=>{deleteVideos(id,e)}}>X</button>
            <img  src={`https://picsum.photos/id/${id}/200/200`} alt="laptop"/>
            <div>{title}</div>
            <div>{channel} {verified ?"true":"false"}</div>
            <span>{views}</span> . <span>{time}</span>
            <div>{children}</div>

        </div> 
        
        
    )
}
export default Video ;