import {useState} from "react";

export default function Any(){
    let [showThing, setShowThing]=useState(false)
    return <>
        <p>this is any </p>
        <a className={"bg-blue-700 mt-16 rounded p-5"} onClick={()=>setShowThing(!showThing)}>+</a>
        {showThing && <p>Number is above 10</p>}
    </>
}