export default function CreateCommentComponent(props :{onchange?: (value:string) =>void,onClick:()=> void}){


    return(
        <>
            <div className={"flex flex-row "}>
                <input type={"text"} placeholder={"Share inside your head..."}
                    onChange={v=> props.onchange?.(v.target.value)}
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