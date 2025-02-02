import { useContext } from "react";
import VideosDispatchContext from "../context/videosDispatchContext";
function useVideoDispatch(){
    return useContext(VideosDispatchContext);
}
export default useVideoDispatch;