import { useState } from "react";
export default function Counter(){
    let [number,setNumber]=useState(0)
    function handleClick(e){
        e.stopPropagation();
        console.log(`inside function${number}`);
        setTimeout(() => {
            setNumber(number=>number+1);
        }, 2000);
    }
    return(
        <>
        <h1>{number}</h1>
        <button onClick={handleClick}>press me</button>
        </>
    )
}