import React from "react";

export default function SendButtonComponent(props: { onClick: () => void }) {

    return (
            <button onClick={props.onClick}
                    className="bg-pink-700 text-white
                     rounded-xl m-2 p-3
                    hover:bg-pink-700
                    outline-none
                    hover:bg-pink-800
                    shadow
                    transition-all">Send
            </button>
    )
}