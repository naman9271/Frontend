import "./play.css"
import { useState } from "react";
function PlayButton({children,message,onPlay,onPause}){
    let [a,setA] = useState(true);
    function handleClick(e){
        e.stopPropagation();
        if(a){
            onPlay();
            setA(a= false);
        }else{
            onPause();
            setA(a=true);
        }
    }
    return(
        <button className="button" onClick ={handleClick}>{children}  {a?'play':'pause'}</button>
    )
}
export default PlayButton ;