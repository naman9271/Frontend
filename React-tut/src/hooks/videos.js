import { useContext } from "react";
import VideosContext from "../context/videosContext";
function useVideo(){
    return useContext(VideosContext);
}
export default useVideo;