import "./video.css"
function Video({title , channel="coder dost",views ,time,verified=false, id , children}){
    return (
        <div className="boxes">
            <img  src={`https://picsum.photos/id/${id}/200/200`} alt="laptop"/>
            <div>{title}</div>
            <div>{channel} {verified ?"true":"false"}</div>
            <span>{views}</span> . <span>{time}</span>
            <div>{children}</div>

        </div>
        
        
    )
}
export default Video ;