import React from "react";

export default function SendInputComponent(props: {onChange?: (value: string) => void}){

    return(
        <>

                <input className="bg-gray-400
                       outline-none
                       rounded-xl m-2 p-2
                       text-black
                       hover:shadow-lg
                       hover:bg-pink-600
                       placeholder-gray-700
                       transition-all"
                       type="text"
                       onChange={v => props.onChange?.(v.target.value)}
                />
        </>
    )
}