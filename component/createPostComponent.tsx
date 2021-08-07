export default function CreatePostComponent(props: { onChange?: (value: string) => void,onClick: () => void  }){




    return(
        <>
            <div className="flex flex-col bg-pink-700 rounded-2xl absolute -bottom-16 right-40 ">
                <input type={"text"} placeholder={"Share inside your head..."}
                       onChange={v => props.onChange?.(v.target.value)}
                       className="bg-gray-400
                outline-none
                rounded-xl m-3 p-3
                text-black

                placeholder-gray-700
                transition-all
                "/>

                <button onClick={props.onClick} className="outline-none
                rounded-xl m-3 p-3 hover:shadow-lg
                hover:bg-pink-400
                placeholder-gray-700
                transition-all bg-gray-400">
                    SHARE
                </button>
            </div>


        </>
    )
}